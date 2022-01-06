<script context="module">
  import { loadData } from '$lib/content';

  export async function load({ fetch, page }) {
    return loadData('repertoire', fetch, page);
  }
</script>

<script>
  import { violinMenu } from '$lib/content';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import TextBar from '$lib/TextBar.svelte';
  import Images from '$lib/Images.svelte';
  import Articles from '$lib/Articles.svelte';

  export let data;
  export let lang;

  $: alphabet = data['lines'].map(line => line['line'][0])
    .filter((value, index, self) => self.indexOf(value) === index).sort();
  $: selected = data['all'];
</script>

<svelte:head>
  <title>{data['repertoire']}</title>
</svelte:head>

<div class="min-h-screen bg-text flex flex-col">
  <Header {data} {lang} route="/violin/repertoire" local={violinMenu(data, lang)} />
  <div class="lg:grid md:p-8 bg-text" style="grid-template-columns: 3fr 1fr">
    <div>
      <Articles {data}>
        <h1 class="text-3xl">{data['name'].toUpperCase()}</h1>
        <h2 class="text-2xl">{data['repertoire'].toUpperCase()}</h2>
      </Articles>
      <TextBar alignment="left">
        <button class="mr-3" class:font-bold={selected === data['all']} on:click={() => selected = data['all']}>
          {data['all'].toUpperCase()}</button>
        {#each alphabet as letter}
          <button class="mr-3" class:font-bold={selected === letter}
                  on:click={() => selected = letter}>{letter}</button>
        {/each}
        <p class="mt-5">
          {#if selected}
            {#each data['lines'].filter(line => selected === data['all']
              ? line['line'] : line['line'][0] === selected).map(line => line['line']).sort() as line}
              {line}<br>
            {/each}
          {/if}
        </p>
      </TextBar>
    </div>
    <div class="bg-text p-5 md:grid md:grid-cols-4 md:gap-8 lg:block mt-5">
      <Images {data} />
    </div>
  </div>
  <Footer {data} {lang} route="/violin/repertoire" />
</div>