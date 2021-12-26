<script>
  import { format } from '$lib/content';
  import SvelteMarkdown from 'svelte-markdown';

  export let text;
</script>

<div class="prose">
  <SvelteMarkdown source={format(text)} />
</div>