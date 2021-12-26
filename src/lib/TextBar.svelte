<script>
  export let small = true;
  export let alignment = 'left';
</script>

<div class="p-5 pl-12 pr-12 text-{alignment} bg-text" class:xl:pl-96={!small}
     class:xl:pr-96={!small}>
  <slot />
</div>
