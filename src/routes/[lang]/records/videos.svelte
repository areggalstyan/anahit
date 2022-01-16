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

  export let data;
  export let lang;

  data['videoList'] = data['videoList'].map(video => {
    video['text'] = video['text'].replace(/\/O/g, '<i class="fas fa-play-circle text-3xl text-secondary mr-4"></i>');
    return video;
  });
</script>

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
  <div class="bg-text p-5 pt-0 md:grid md:grid-cols-4 md:gap-8 lg:block">
    <Images {data} />
  </div>
</div>
<Footer {data} {lang} route="/records/videos" />