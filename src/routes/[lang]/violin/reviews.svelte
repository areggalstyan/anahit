<script context="module">
  import { loadData } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('reviews', fetch, page);
  }
</script>

<script>
  import { violinMenu } from '$lib/content';
  import Images from '$lib/Images.svelte';
  import Footer from '$lib/Footer.svelte';
  import Header from '$lib/Header.svelte';
  import TextBar from '$lib/TextBar.svelte';
  import Format from '$lib/Format.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['reviews']}</title>
</svelte:head>

<Header {data} {lang} route="/violin/reviews" local={violinMenu(data, lang)} />
<div class="lg:grid md:p-5 bg-text" style="grid-template-columns: 3fr 1fr">
  <div>
    <TextBar alignment="left">
      <h1 class="text-3xl">{data['reviews'].toUpperCase()}</h1>
      {#each data['reviewList'] as { text, name, position }}
        <p class="md:mt-10 mt-5">
          <Format {text} />
          <span class="uppercase mt-2 inline-block"><Format text={name} /></span>
          <span class="italic"><Format text={position} /></span>
        </p>
      {/each}
    </TextBar>
  </div>
  <div class="mt-5">
    <div class="bg-text p-5 pt-0 md:grid md:grid-cols-4 md:gap-8 lg:block">
      <Images {data} />
    </div>
  </div>
</div>
<Footer {data} {lang} route="/violin/reviews" />