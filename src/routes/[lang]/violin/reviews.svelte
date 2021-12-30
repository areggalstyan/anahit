<script context="module">
  import { loadData } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('reviews', fetch, page);
  }
</script>

<script>
  import { violinMenu } from '$lib/content';
  import InfoPage from '$lib/InfoPage.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['reviews']}</title>
</svelte:head>

<InfoPage route="/violin/reviews" {data} {lang} subtitle={data['reviews'].toUpperCase()}
          local={violinMenu(data, lang)}/>
