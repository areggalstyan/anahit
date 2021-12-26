<script context="module">
  import { loadData, researchMenu } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('research-home', fetch, page);
  }
</script>

<script>
  import InfoPage from '$lib/InfoPage.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['researchHome']}</title>
</svelte:head>

<InfoPage route="/research" {data} {lang} subtitle={data['research'].toUpperCase()}
          local={researchMenu(data, lang)} />
