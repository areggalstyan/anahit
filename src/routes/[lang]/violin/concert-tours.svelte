<script context="module">
  import { loadData } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('concert-tours', fetch, page);
  }
</script>

<script>
  import { violinMenu, url } from '$lib/content';
  import TextBar from '$lib/TextBar.svelte';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import Format from '$lib/Format.svelte';
  import { onMount } from 'svelte';

  export let data;
  export let lang;

  onMount(() => {
    let map = L.map('map', {
      attributionControl: false
    }).setView([0, 0], 3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      noWrap: true
    }).addTo(map);

    for (let { lat, lng, text } of data['markerList']) {
      L.marker([lat, lng], {
        icon: L.icon({
          iconUrl: url(data['marker']),
          iconSize: [20, 30]
        })
      }).addTo(map).bindPopup(text);
    }
  });
</script>

<svelte:head>
  <title>{data['concertTours']}</title>
</svelte:head>

<Header {data} {lang} route="/violin/concert-tours" local={violinMenu(data, lang)} />
<div class="lg:grid md:p-5 bg-text">
  <TextBar alignment="left">
    <h1 class="text-3xl">{data['concertTours'].toUpperCase()}</h1>
    <div class="w-full text-center">
      <div id="map" class="h-96 md:h-[48rem] md:mt-10 mt-5 bg-text"></div>
    </div>
    <div class="mt-3">
      <Format text={data['note']} />
    </div>
  </TextBar>
</div>
<Footer {data} {lang} route="/violin/concert-tours" />
