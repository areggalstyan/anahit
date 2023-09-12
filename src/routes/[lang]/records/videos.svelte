<script context="module">
  import { loadData } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('videos', fetch, page);
  }
</script>

<script>
  import { recordsMenu } from '$lib/content';
  import Images from '$lib/Images.svelte';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import TextBar from '$lib/TextBar.svelte';
  import Format from '$lib/Format.svelte';
  import Video from '$lib/Video.svelte';

  export let data;
  export let lang;

  data['videoList'] = data['videoList'].map((video) => {
    video['text'] = video['text'].replace(
      /\/O/g,
      '<i class="fas fa-play-circle text-3xl text-secondary mr-4"></i>'
    );
    return video;
  });
</script>

<svelte:head>
  <title>{data['videos']}</title>
</svelte:head>

<Header {data} {lang} route="/records/videos" local={recordsMenu(data, lang)} />
<div class="lg:grid md:p-5 bg-text" style="grid-template-columns: 3fr 1fr">
  <TextBar alignment="left">
    <h1 class="text-3xl">{data['videos'].toUpperCase()}</h1>
    {#each data['articleList'] as { text }}
      <p class="md:mt-10 mt-5">
        <Format {text} />
      </p>
    {/each}
    {#each data['videoList'] as { src, text }}
      <div class="mt-12 xl:flex">
        <Video {src} />
        <p class="xl:ml-12 xl:mt-0 mt-3">
          <Format {text} />
        </p>
      </div>
    {/each}
  </TextBar>
  <div class="bg-text p-5 pt-0 md:grid md:grid-cols-4 md:gap-8 lg:block">
    <Images {data} />
  </div>
</div>
<Footer {data} {lang} route="/records/videos" />
