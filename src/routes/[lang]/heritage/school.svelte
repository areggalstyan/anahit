<script context="module">
  import { loadData, heritageMenu } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('school', fetch, page);
  }
</script>

<script>
  import InfoPage from '$lib/InfoPage.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['school']}</title>
</svelte:head>

<InfoPage route="/heritage/school" {data} {lang} subtitle={data['school'].toUpperCase()}
          local={heritageMenu(data, lang)}/>
