<script context="module">
  import { loadData, researchMenu } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('dissertation', fetch, page);
  }
</script>

<script>
  import InfoPage from '$lib/InfoPage.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['dissertation']}</title>
</svelte:head>

<InfoPage route="/research/dissertation" {data} {lang} subtitle={data['dissertation'].toUpperCase()}
          local={researchMenu(data, lang)} />
