<script>
  import Link from '$lib/Link.svelte';
  export let items;
  export let alignment = 'start';
  export let more = false;
  export let bars = true;
  export let vertical = false;
  export let text = 'left';
  export let last = false;
  export let fill = false;
</script>

<nav
  class="flex flex-shrink-0 flex-grow"
  class:justify-start={alignment === 'start'}
  class:justify-center={alignment === 'center'}
  class:justify-end={alignment === 'end'}
>
  <ul class:text-center={vertical}>
    {#if more}
      <li class="md:inline-block list-none lg:hidden text-{text}" class:li={bars}>
        <div class="group inline-block">
          <Link>
            {more}
            <i class="fas fa-caret-down ml-1" />
          </Link>
          <ul class="hidden group-hover:block"
              class:absolute={!vertical}
              class:bg-secondary={!vertical && fill}
              class:p-4={!vertical && fill}
              class:rounded={!vertical && fill}
          >
            {#each items as { name, href, classes, dropdown }}
              {#if !dropdown}
                <li class="list-none {classes ? classes : ''}">
                  <Link {href}>{name}</Link>
                </li>
              {/if}
            {/each}
          </ul>
        </div>
      </li>
    {/if}
    {#each items as { name, href, external, dropdown, classes }}
      <li
        class="lg:inline-block list-none"
        class:text-right={text === 'right'}
        class:text-left={text === 'left'}
        class:text-center={text === 'center'}
        class:li={bars}
        class:hidden={!dropdown && more}
        class:inline-block={(dropdown || !more) && !vertical}
        class:last={last}
      >
        <div class="group inline-block {classes ? classes : ''}">
          <Link {href} {external}>
            {name}
            {#if dropdown}
              <i class="fas fa-caret-down ml-1" />
            {/if}
          </Link>
          {#if dropdown}
            <ul class="hidden group-hover:block"
                class:absolute={!vertical}
                class:bg-secondary={!vertical && fill}
                class:p-4={!vertical && fill}
                class:rounded={!vertical && fill}
            >
              {#each dropdown as { name, href }}
                <li class="list-none">
                  <Link {href}>{name}</Link>
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      </li>
    {/each}
    {#if $$slots.default}
      <li class="inline-block">
        <slot />
      </li>
    {/if}
  </ul>
</nav>

<style>
  .li:not(:last-child, .last:nth-last-child(2))::after {
    content: '|';
    @apply ml-2 mr-2 sm:ml-4 sm:mr-4 text-white;
  }

  .li:nth-child(4)::after {
      @apply hidden lg:inline;
  }
</style>
