<script context="module">
  import { loadData } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('records-home', fetch, page);
  }
</script>

<script>
  import { recordsMenu } from '$lib/content';
  import InfoPage from '$lib/InfoPage.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['recordsHome']}</title>
</svelte:head>

<InfoPage route="/records" {data} {lang} subtitle={data['recordsHome'].toUpperCase()}
          local={recordsMenu(data, lang)} />
