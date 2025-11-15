<script context="module">
  import { loadData } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('film-book', fetch, page);
  }
</script>

<script>
  import { biographyMenu } from '$lib/content';
  import InfoPage from '$lib/InfoPage.svelte';
  import { onMount } from 'svelte';
  import { PageFlip } from 'page-flip';

  export let data;
  export let lang;

  const aspectRatio = 680 / 1920;
  const pages = [...Array(201).keys()].map(i => `/book/page-${i + 1}.webp`);
  let container;

  onMount(() => {
    let flipRoot;
    let flip;

    function initFlip() {
      flipRoot = document.createElement('div');
      flipRoot.style.width = '100%';
      container.appendChild(flipRoot);

      flip = new PageFlip(flipRoot, {
        width: container.clientWidth,
        height: aspectRatio * container.clientWidth,
        autoSize: false,
      });
      flip.loadFromImages(pages);
    }

    let resizeTimer;

    initFlip();
    window.addEventListener('resize', () => {
      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }
      resizeTimer = setTimeout(() => {
        flip.destroy();
        initFlip();
      }, 80);
    });
  });
</script>

<svelte:head>
  <title>{data['filmBook']}</title>
</svelte:head>

<InfoPage
  route="/anahit/film-book"
  {data}
  {lang}
  subtitle={data['filmBook'].toUpperCase()}
  local={biographyMenu(data, lang)}
>
  <div class="px-12 py-5">
    <div bind:this={container} class="w-full" />
  </div>
</InfoPage>
