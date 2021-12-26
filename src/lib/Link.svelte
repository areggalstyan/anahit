<script>
  export let href = undefined;
  export let external = false;
  export let classes = '';
</script>

{#if href}
  <a
    {href}
    class="text-white hover:underline {classes ? classes : ''}"
    rel={external ? 'external' : null}><slot /></a
  >
{:else}
  <button class="text-white hover:underline text-left {classes ? classes : ''}"><slot /></button>
{/if}
