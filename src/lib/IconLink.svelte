<script>
  export let href = undefined;
  export let external = false;
  export let classes = '';
</script>

{#if href}
  <a
    {href}
    class="text-white hover:text-icon {classes ? classes : ''}"
    rel={external ? 'external' : null}><slot /></a
  >
{:else}
  <button class="text-white hover:text-icon text-left {classes ? classes : ''}"><slot /></button>
{/if}
