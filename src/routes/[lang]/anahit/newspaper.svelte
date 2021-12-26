<script context="module">
  import { loadData, biographyMenu } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('newspaper', fetch, page);
  }
</script>

<script>
  import InfoPage from '$lib/InfoPage.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['newspaper']}</title>
</svelte:head>

<InfoPage route="/anahit/newspaper" {data} {lang} subtitle={data['newspaper'].toUpperCase()}
          local={biographyMenu(data, lang)}/>
