<script context="module">
  import { loadData, violinMenu } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('violin-home', fetch, page);
  }
</script>

<script>
  import InfoPage from '$lib/InfoPage.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['violinHome']}</title>
</svelte:head>

<InfoPage route="/violin" {data} {lang} subtitle={data['violinHome'].toUpperCase()}
          local={violinMenu(data, lang)}/>
