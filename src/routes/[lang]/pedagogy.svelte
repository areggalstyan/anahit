<script context="module">
  import { loadData } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('pedagogy', fetch, page);
  }
</script>

<script>
  import InfoPage from '$lib/InfoPage.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['pedagogy']}</title>
</svelte:head>

<InfoPage route="/pedagogy" {data} {lang} subtitle={data['pedagogy'].toUpperCase()} />
