<script>
  import Video from './Video.svelte';
  export let videos;
</script>

<div class="bg-primary xl:flex xl:justify-around p-5" id="teaser">
  {#each videos as src, i}
    <div class="w-full flex justify-center xl:mb-0" class:mb-5={i !== videos.length - 1}>
      <Video {src} />
    </div>
  {/each}
</div>
