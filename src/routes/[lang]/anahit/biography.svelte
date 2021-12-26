<script context="module">
  import { loadData, biographyMenu } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('biography', fetch, page);
  }
</script>

<script>
  import InfoPage from '$lib/InfoPage.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['biography']}</title>
</svelte:head>

<InfoPage route="/anahit/biography" {data} {lang} subtitle={data['biography'].toUpperCase()}
          local={biographyMenu(data, lang)} />
