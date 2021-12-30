<script context="module">
  import { loadData, url } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('home', fetch, page);
  }
</script>

<script>
  import Format from '$lib/Format.svelte';
  import HomeHeader from '$lib/HomeHeader.svelte';
  import TextBar from '$lib/TextBar.svelte';
  import ImageBar from '$lib/ImageBar.svelte';
  import VideoBar from '$lib/VideoBar.svelte';
  import Logo from '$lib/Logo.svelte';
  import Slider from '$lib/Slider.svelte';
  import Footer from '$lib/Footer.svelte';

  export let data;
  export let lang;
</script>

<svelte:head>
  <title>{data['name']}</title>
</svelte:head>

<HomeHeader {data} {lang} />
<TextBar><Format text={data['article1']} /></TextBar>
<ImageBar
  images={[
    { name: data['biography'], src: url(data['biographyImage']), href: `/${lang}/anahit/biography` },
    { name: data['repertoire'], src: url(data['repertoireImage']), href: `/${lang}/violin/repertoire` },
    { name: data['records'], src: url(data['recordsImage']), href: `/${lang}/records` },
    { name: data['pedagogue'], src: url(data['pedagogyImage']), href: `/${lang}/pedagogy` }
  ]}
/>
<TextBar><Format text={data['article2']} /></TextBar>
<VideoBar
  videos={[
    data['video1'],
    data['video2']
  ]}
/>
<TextBar><Format text={data['article3']} /></TextBar>
<ImageBar
  images={[
    { name: data['scientist'], src: url(data['researchImage']), href: `/${lang}/research` },
    { name: data['books'], src: url(data['booksImage']), href: `/${lang}/research/books` },
    { name: data['gallery'], src: url(data['galleryImage']), href: `/${lang}/gallery` },
    { name: data['diaryStories'], src: url(data['diaryStoriesImage']), href: `/${lang}/anahit/diary-stories` }
  ]}
/>
<TextBar><Format text={data['article4']} /></TextBar>
<Slider
  slides={data['slider'].map(slide => url(slide))}
/>
<TextBar><Format text={data['article5']} /></TextBar>
<Logo {data} />
<Footer {data} {lang} route="/" />
