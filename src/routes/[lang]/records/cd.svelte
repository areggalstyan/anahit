<script context="module">
  import { loadData } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('cd', fetch, page);
  }
</script>

<script>
  import { recordsMenu, url } from '$lib/content';
  import Header from '$lib/Header.svelte';
  import TextBar from '$lib/TextBar.svelte';
  import Format from '$lib/Format.svelte';
  import Footer from '$lib/Footer.svelte';

  export let data;
  export let lang;

  data['imageList'] = data['imageList'].map(article => {
    article['text'] = article['text'].replace(/\/O/g,
      '<i class="fas fa-compact-disc text-3xl text-secondary mr-4"></i>');
    return article;
  });
</script>

<svelte:head>
  <title>{data['cd']}</title>
</svelte:head>

<Header {data} {lang} route="/records/" local={recordsMenu(data, lang)} />
<div class="lg:grid md:p-8 bg-text" style="grid-template-columns: 3fr 1fr">
  <TextBar alignment="left">
    <h1 class="text-3xl">{data['name'].toUpperCase()}</h1>
    <h2 class="text-2xl">{data['cd'].toUpperCase()}</h2>
    {#each data['articleList'] as { text }}
      <p class="mt-12">
        <Format {text} />
      </p>
    {/each}
    {#each data['imageList'] as cd}
      <div class="mt-12 md:flex">
        {#if cd['image']}
          <img src={url(cd['image'])} alt="" class="border-[1px] border-secondary rounded w-80 h-80">
        {/if}
        <p class="md:ml-12 md:mt-0 mt-3">
          <Format text={cd['text']} />
        </p>
      </div>
    {/each}
  </TextBar>
</div>
<Footer {data} {lang} route="/records/cd" />
