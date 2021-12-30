<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/env';

  export let slides;

  onMount(() => {
    if (browser) {
      jQuery('.slider').slick({
        infinite: true,
        speed: 300,
        variableWidth: true,
        prevArrow: '<button class="cursor-pointer"><i class="fas fa-chevron-left text-xl ' +
          'text-white absolute top-1/2 z-10 transform translate-x-1/2 -translate-y-1/2 left-0"></i></button>',
        nextArrow: '<button class="cursor-pointer"><i class="fas fa-chevron-right text-xl ' +
          'text-white absolute top-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 right-0"></i></button>'
      });
    }
  });
</script>

<div class="bg-primary">
  <div class="slider pr-6 pl-6">
    {#each slides as src}
      <img {src} alt="" class="mr-3 ml-3" />
    {/each}
  </div>
</div>
