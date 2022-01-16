<script>
  import Format from './Format.svelte';
  import TextBar from './TextBar.svelte';

  export let data;
</script>

<TextBar alignment="left">
  <slot />
  {#each data['articleList'] as { text }}
    <p class="mt-5 md:mt-10">
      <Format {text} />
    </p>
  {/each}
</TextBar>