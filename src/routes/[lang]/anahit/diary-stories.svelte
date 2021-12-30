<script context="module">
  import { loadData } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('diary-stories', fetch, page);
  }
</script>

<script>
  import { biographyMenu } from '$lib/content';
  import InfoPage from '$lib/InfoPage.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['diaryStories']}</title>
</svelte:head>

<InfoPage route="/anahit/diary-stories" {data} {lang} subtitle={data['diaryStories'].toUpperCase()}
          local={biographyMenu(data, lang)} bigCalendar />
