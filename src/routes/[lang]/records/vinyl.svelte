<script context="module">
  import { loadData, recordsMenu, url } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('vinyl', fetch, page);
  }
</script>

<script>
  import Format from '$lib/Format.svelte';
  import TextBar from '$lib/TextBar.svelte';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';

  export let data;
  export let lang;

  data['imageList'] = data['imageList'].map(article => {
    article['text'] = article['text'].replace(/\/O/g,
      '<i class="fas fa-record-vinyl text-3xl text-secondary mr-4"></i>');
    return article;
  });
</script>

<svelte:head>
  <title>{data['vinyl']}</title>
</svelte:head>

<Header {data} {lang} route="/records/vinyl" local={recordsMenu(data, lang)} />
<div class="lg:grid md:p-8 bg-text" style="grid-template-columns: 3fr 1fr">
  <TextBar alignment="left">
    <h1 class="text-3xl">{data['name'].toUpperCase()}</h1>
    <h2 class="text-2xl">{data['vinyl'].toUpperCase()}</h2>
    {#each data['articleList'] as { text }}
      <p class="mt-12">
        <Format {text} />
      </p>
    {/each}
    {#each data['imageList'] as vinyl}
      <div class="mt-12 md:flex">
        {#if vinyl['image']}
          <img src={url(vinyl['image'])} alt="" class="border-[1px] border-secondary rounded w-80">
        {/if}
        <p class="md:ml-12 md:mt-0 mt-3">
          <Format text={vinyl['text']} />
        </p>
      </div>
    {/each}
  </TextBar>
</div>
<Footer {data} {lang} route="/records/vinyl" />
