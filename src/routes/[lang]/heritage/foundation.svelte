<script context="module">
  import { loadData } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('foundation', fetch, page);
  }
</script>

<script>
  import { heritageMenu } from '$lib/content';
  import InfoPage from '$lib/InfoPage.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['foundation']}</title>
</svelte:head>

<InfoPage
  route="/heritage/foundation"
  {data}
  {lang}
  subtitle={data['foundation'].toUpperCase()}
  local={heritageMenu(data, lang)}
/>
