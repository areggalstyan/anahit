<script>
  import { url, globalMenu } from '$lib/content';

  import AbstractHeader from './abstract/AbstractHeader.svelte';

  export let data;
  export let lang;
  export let route;
  export let local = null;
</script>

<AbstractHeader
  image={url(data['header'])}
  {route}
  name={data['name']}
  surname={data['surname']}
  {lang}
  {...globalMenu(data, lang)}
  subItems={local}
/>