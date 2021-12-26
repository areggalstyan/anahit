<script context="module">
  import { loadData, researchMenu } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('books', fetch, page);
  }
</script>

<script>
  import InfoPage from '$lib/InfoPage.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['books']}</title>
</svelte:head>

<InfoPage route="/research/books" {data} {lang} subtitle={data['books'].toUpperCase()}
          local={researchMenu(data, lang)} />
