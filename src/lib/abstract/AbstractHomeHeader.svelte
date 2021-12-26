<script>
  import NavBar from '$lib/NavBar.svelte';
  import Link from '../Link.svelte';
  import IconLink from '../IconLink.svelte';
  import { getNextLang } from '$lib/content';

  export let items;
  export let more;
  export let name;
  export let surname;
  export let headerQuote;
  export let lang;
  export let image;
</script>

<header class="relative">
  <img src={image} alt="" class="w-full" />
  <div class="sm:flex sm:items-center absolute top-0 w-full p-4 sm:pl-12 sm:pr-12 bg-">
    <div>
      <IconLink href={getNextLang(lang)} external><i class="text-2xl fas fa-globe mr-6" /></IconLink
      >
      <Link href="/{lang}"
        ><h1 class="text-2xl lg:text-3xl text-white font-bold inline-block">
          {name}
          {surname}
        </h1></Link
      >
    </div>
    <div class="flex flex-grow flex-shrink-0 hidden md:block">
      <NavBar {items} {more} alignment="end" />
    </div>
  </div>
  <blockquote
    class="font-serif absolute top-1/4 right-24 w-1/3 text-white text-2xl hidden lg:block italic"
  >
    {headerQuote}
  </blockquote>
</header>

<div class="bg-primary p-4 md:hidden">
  <NavBar {items} {more} bars={false} alignment="center" text="right" vertical />
</div>
