<script>
  import Articles from './Articles.svelte';
  import Images from './Images.svelte';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import Format from './Format.svelte';
  import TextBar from './TextBar.svelte';

  export let data;
  export let lang;
  export let route;
  export let subtitle;
  export let local = null;
  export let bigCalendar = false;

  let current;
  let selected;
</script>

<Header {data} {lang} {route} {local} />
<div class="lg:grid md:p-5 bg-text" style="grid-template-columns: 3fr 1fr">
  <div>
    <Articles {data}>
      <h1 class="text-3xl">{subtitle}</h1>
    </Articles>
    {#if current && bigCalendar}
      <TextBar alignment="left">
        <div class="flex mt-2">
          <i class="fab fa-itunes-note text-3xl text-secondary mr-4" />
          <p class="border-[1px] border-secondary rounded p-3 pl-5 pr-5 inline-block">
            <Format bind:text={current} />
          </p>
        </div>
      </TextBar>
    {/if}
  </div>
  <div class="mt-5">
    {#if data['calendar'] && data['calendar'].sort((a, b) => (!a.length ? 1 : a.date - b.date))}
      {#if data['calendarTitle']}
        <h2 class="text-center">{data['calendarTitle']}</h2>
      {/if}
      <div class="bg-text p-5 pb-0 mb-5">
        <div class="grid grid-cols-4">
          {#each data['calendar'] as { date, text }, i}
            <button
              class="p-1 border-secondary text-sm"
              class:font-bold={selected === date}
              class:border-t-[1px]={i > 3}
              class:border-r-[1px]={i % 4 !== 3}
              on:click={() => {
                current = text;
                selected = date;
              }}
            >
              {#if date}
                {date}
              {/if}
            </button>
          {/each}
        </div>
        {#if current && !bigCalendar}
          <div class="mt-5 text-sm border-[1px] border-secondary rounded p-3 pl-5 pr-5 italic">
            <Format bind:text={current} />
          </div>
        {/if}
      </div>
    {/if}
    <div class="bg-text p-5 pt-0 md:grid md:grid-cols-4 md:gap-8 lg:block">
      <Images {data} />
    </div>
  </div>
</div>
<Footer {data} {lang} {route} />
