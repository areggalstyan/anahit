<script>
  import { url } from './content';
  import Format from './Format.svelte';

  export let data;
</script>

{#each data['imageList'] as { image, text }, i}
  <div class:mt-5={i !== 0}>
    <img src={url(image)} alt="" class="w-full border-[1px] border-secondary rounded">
    <div class="mt-3 text-sm">
      {#if text}
        <Format {text} />
      {/if}
    </div>
  </div>
{/each}