<script>
  export let href = undefined;
  export let external = false;
  export let classes = '';
  export let target = '_self';
</script>

{#if href}
  <a
    {href}
    class="text-white hover:text-icon {classes ? classes : ''}"
    target={target}
    rel={external ? 'external' : null}><slot /></a
  >
{:else}
  <button class="text-white hover:text-icon text-left {classes ? classes : ''}"><slot /></button>
{/if}
