<script>
  import IconLink from '../IconLink.svelte';
  import NavBar from '../NavBar.svelte';

  export let links;
  export let items;
  export let route;
</script>

<footer class="bg-secondary p-5 pl-10 pr-10 lg:flex lg:items-center mt-auto">
  <div class="lg:inline-block lg:absolute w-full lg:ml-[-2.5rem]">
    <NavBar {items} alignment="center" last>
      <div class="ml-2 sm:ml-4 border-white border-[1px] p-1 pl-3 pr-3 rounded">
        <NavBar items={[
          { name: 'eng', href: `/en/${route}`, external: true },
          { name: 'рус', href: `/ru/${route}`, external: true },
          { name: 'հայ', href: `/hy/${route}`, external: true }
        ]} />
      </div>
    </NavBar>
  </div>
  <div class="lg:inline-block lg:w-auto w-full flex justify-center z-10 mt-4 lg:mt-0">
    <IconLink href={links[0]} external
      ><i class="fab fa-facebook text-3xl" title="Facebook" /></IconLink
    >
    <IconLink href={links[1]} external
      ><i class="fab fa-youtube text-3xl ml-3" title="Youtube" /></IconLink
    >
    <IconLink href={links[2]} external
      ><i class="fas fa-graduation-cap text-3xl ml-3" title="Musical school" /></IconLink
    >
    <IconLink href={links[3]} external
      ><i class="fas fa-envelope text-3xl ml-3" title="Email" /></IconLink
    >
    <IconLink href={links[4]} external
      ><i class="fab fa-facebook text-3xl ml-3" title="Facebook" /></IconLink
    >
  </div>
</footer>
