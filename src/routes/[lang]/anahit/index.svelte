<script context="module">
  import { loadData } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('anahit', fetch, page);
  }
</script>

<script>
  import { biographyMenu } from '$lib/content';
  import InfoPage from '$lib/InfoPage.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['name']}</title>
</svelte:head>

<InfoPage route="/anahit" {data} {lang} subtitle={data['creativePath'].toUpperCase()}
          local={biographyMenu(data, lang)}/>
