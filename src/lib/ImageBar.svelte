<script>
  import Link from './Link.svelte';
  export let images;
</script>

<div class="bg-primary grid grid-cols-1 lg:grid-cols-4 gap-5 p-5">
  {#each images as { name, src, href }, i}
    <div>
      <Link {href} classes="w-full">
        <img {src} alt={name} class="w-full mb-3 border-secondary border-4 rounded" />
        <i class="fas mr-3" class:fa-music={i % 2 === 0} class:fa-sliders-h={i % 2 !== 0} />
        {name}
      </Link>
    </div>
  {/each}
</div>
