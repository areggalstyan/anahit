<script>
  import NavBar from '$lib/NavBar.svelte';
  import Link from '../Link.svelte';
  import IconLink from '../IconLink.svelte';
  import { getNextLang } from '$lib/content';

  export let items;
  export let subItems;
  export let more;
  export let name;
  export let surname;
  export let image;
  export let lang;
  export let route;
</script>

<header class="relative">
  <div class="flex items-center relative top-0 w-full border-b-[1px] border-white p-4 sm:pl-12 sm:pr-12 bg-secondary">
    <div class="w-full">
      <IconLink href="/{getNextLang(lang)}{route}" external><i class="text-2xl fas fa-globe mr-6" /></IconLink
      >
      <Link href="/{lang}"
      ><h1 class="text-2xl lg:text-3xl text-white font-bold inline-block">
        {name}
        {surname}
      </h1></Link
      >
      <div class="md:hidden w-full inline-block flex justify-end">
        <div>
          <NavBar {items} {more} bars={false} alignment="right" text="right" vertical />
        </div>
      </div>
    </div>
    <div class="flex flex-grow flex-shrink-0 hidden md:block">
      <NavBar {items} {more} alignment="end" fill />
    </div>
  </div>
  <img src={image} alt="" class="w-full border-b-[1px] border-white" />
</header>
{#if subItems}
  <div class="bg-primary p-4 hidden md:block sticky top-0 z-[9999]">
    <NavBar items={subItems} alignment="center" />
  </div>

  <div class="bg-primary p-4 md:hidden">
    <div class="ml-8">
      <NavBar items={subItems} bars={false} alignment="left" text="left" vertical />
    </div>
  </div>
{/if}
