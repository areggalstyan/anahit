<script context="module">
  import { loadData } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('gallery', fetch, page);
  }
</script>

<script>
  import { url } from '$lib/content';
  import Header from '$lib/Header.svelte';
  import TextBar from '$lib/TextBar.svelte';
  import Format from '$lib/Format.svelte';
  import { onMount } from 'svelte';
  import Footer from '$lib/Footer.svelte';
  import { browser } from '$app/env';

  export let data;
  export let lang;

  onMount(() => {
    if (browser) {
      jQuery('.slider-solo').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        fade: true,
        asNavFor: '.slider-preview-solo'
      });

      jQuery('.slider-preview-solo').slick({
        infinite: true,
        speed: 300,
        variableWidth: true,
        asNavFor: '.slider-solo',
        focusOnSelect: true,
        prevArrow: '<button class="cursor-pointer"><i class="fas fa-chevron-left text-xl ' +
          'text-white absolute top-1/2 z-10 transform translate-x-1/2 -translate-y-1/2 left-0"></i></button>',
        nextArrow: '<button class="cursor-pointer"><i class="fas fa-chevron-right text-xl ' +
          'text-white absolute top-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 right-0"></i></button>'
      });

      jQuery('.slider-team').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        fade: true,
        asNavFor: '.slider-preview-team'
      });

      jQuery('.slider-preview-team').slick({
        infinite: true,
        speed: 300,
        variableWidth: true,
        asNavFor: '.slider-team',
        focusOnSelect: true,
        prevArrow: '<button class="cursor-pointer"><i class="fas fa-chevron-left text-xl ' +
          'text-white absolute top-1/2 z-10 transform translate-x-1/2 -translate-y-1/2 left-0"></i></button>',
        nextArrow: '<button class="cursor-pointer"><i class="fas fa-chevron-right text-xl ' +
          'text-white absolute top-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 right-0"></i></button>'
      });
    }
  });
</script>

<svelte:head>
  <title>{data['gallery']}</title>
</svelte:head>

<Header {data} {lang} route="/gallery" />
<div class="md:p-8 bg-text">
  <TextBar alignment="left">
    <h1 class="text-3xl">{data['solo'].toUpperCase()}</h1>

    {#if data['soloArticle']}
      <p class="mt-12">
        <Format text={data['soloArticle']} />
      </p>
    {/if}

    <div class="gallery slider slider-solo mt-3">
      {#if data['soloSlider'].sort((a, b) => a['date'] - b['date'])}
        {#each data['soloSlider'] as { image, date, description }}
          <div class="text-center">
            <div>
              <div class="flex justify-center">
                <img src={url(image)} alt="" class="max-h-[31rem]" />
              </div>
              <p class="mt-3">
                <Format text={date + (description ? ' ' + description : '')} />
              </p>
            </div>
          </div>
        {/each}
      {/if}
    </div>
    <div class="gallery slider-preview slider-preview-solo pl-8 pr-8 mb-8">
      {#if data['soloSlider'].sort((a, b) => a['date'] - b['date'])}
        {#each data['soloSlider'] as { image, date, description }}
          <div class="pl-1 pr-1">
            <img src={url(image)} alt="" class="max-h-24" />
          </div>
        {/each}
      {/if}
    </div>

    <h2 class="text-2xl mt-8">{data['team'].toUpperCase()}</h2>

    {#if data['teamArticle']}
      <p class="mt-12">
        <Format text={data['teamArticle']} />
      </p>
    {/if}

    <div class="gallery slider slider-team mt-3">
      {#if data['teamSlider'].sort((a, b) => a['date'] - b['date'])}
        {#each data['teamSlider'] as { image, date, description }}
          <div class="text-center">
            <div>
              <div class="flex justify-center">
                <img src={url(image)} alt="" class="max-h-[31rem]" />
              </div>
              <p class="mt-3">
                <Format text={date + (description ? ' ' + description : '')} />
              </p>
            </div>
          </div>
        {/each}
      {/if}
    </div>
    <div class="gallery slider-preview slider-preview-team pl-8 pr-8 mb-8">
      {#if data['teamSlider'].sort((a, b) => a['date'] - b['date'])}
        {#each data['teamSlider'] as { image, date, description }}
          <div class="pl-1 pr-1">
            <img src={url(image)} alt="" class="max-h-24" />
          </div>
        {/each}
      {/if}
    </div>
  </TextBar>
</div>
<Footer {data} {lang} route="/gallery" />