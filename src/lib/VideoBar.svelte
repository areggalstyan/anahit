<script>
  export let videos;
</script>

<div class="bg-primary xl:flex xl:justify-around p-5">
  {#each videos as src, i}
    <div class="w-full flex justify-center xl:mb-0" class:mb-5={i !== videos.length - 1}>
      <iframe
        width="560"
        height="315"
        {src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write;
                            encrypted-media; gyroscope; picture-in-picture"
        class="border-secondary border-4 rounded"
        allowFullScreen
      />
    </div>
  {/each}
</div>
