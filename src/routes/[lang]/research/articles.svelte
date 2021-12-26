<script context="module">
  import { loadData, researchMenu } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('articles', fetch, page);
  }
</script>

<script>
  import InfoPage from '$lib/InfoPage.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['articles']}</title>
</svelte:head>

<InfoPage route="/research/articles" {data} {lang} subtitle={data['articles'].toUpperCase()}
          local={researchMenu(data, lang)} bigCalendar />
