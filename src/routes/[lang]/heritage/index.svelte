<script context="module">
  import { loadData } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('heritage-home', fetch, page);
  }
</script>

<script>
  import { heritageMenu } from '$lib/content';
  import InfoPage from '$lib/InfoPage.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['heritageHome']}</title>
</svelte:head>

<InfoPage route="/heritage" {data} {lang} subtitle={data['heritageHome'].toUpperCase()}
          local={heritageMenu(data, lang)}/>
