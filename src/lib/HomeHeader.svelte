<script>
  import { url, globalMenu } from '$lib/content';
  import AbstractHomeHeader from './abstract/AbstractHomeHeader.svelte';

  export let data;
  export let lang;
</script>

<AbstractHomeHeader
  name={data['name']}
  surname={data['surname']}
  {lang}
  image={url(data['header'])}
  headerQuote={data['headerQuote']}
  {...globalMenu(data, lang)}
/>