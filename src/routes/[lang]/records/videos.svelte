<script context="module">
  import { loadData, recordsMenu } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('videos', fetch, page);
  }
</script>

<script>
  import Images from '$lib/Images.svelte';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import TextBar from '$lib/TextBar.svelte';
  import Format from '$lib/Format.svelte';

  export let data;
  export let lang;

  data['videoList'] = data['videoList'].map(video => {
    video['text'] = video['text'].replace(/\/O/g, '<i class="fas fa-play-circle text-3xl text-secondary mr-3"></i>');
    return video;
  });
</script>

<Header {data} {lang} route="/records/videos" local={recordsMenu(data, lang)} />
<div class="lg:grid md:p-8 bg-text" style="grid-template-columns: 3fr 1fr">
  <TextBar alignment="left">
    <h1 class="text-3xl">{data['name'].toUpperCase()}</h1>
    <h2 class="text-2xl">{data['videos'].toUpperCase()}</h2>
    {#each data['articleList'] as { text }}
      <p class="mt-12">
        <Format {text} />
      </p>
    {/each}
    {#each data['videoList'] as { src, text }}
      <div class="mt-12 md:flex">
        <iframe
          width="560"
          height="315"
          {src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write;
                            encrypted-media; gyroscope; picture-in-picture"
          class="border-secondary border-4 rounded max-w-full"
          allowFullScreen
        />
        <p class="md:ml-12 md:mt-0 mt-3">
          <Format {text} />
        </p>
      </div>
    {/each}
  </TextBar>
  <div class="bg-text p-5 md:grid md:grid-cols-4 md:gap-8 lg:block">
    <Images {data} />
  </div>
</div>
<Footer {data} {lang} route="/records/videos" />