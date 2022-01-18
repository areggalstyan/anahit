<script>
  import { url } from '$lib/content';
  import AbstractFooter from './abstract/AbstractFooter.svelte';
  import Logo from './Logo.svelte';

  export let data;
  export let lang;
  export let route;
</script>

<AbstractFooter
  {route}
  links={[
    data['facebook1'],
    data['youtube'],
    data['facebook2'],
    `mailto: ${data['email']}`,
    data['facebook3']
  ]}
  items={[
    { name: data['gallery'], href: `/${lang}/gallery` },
    { name: data['contacts'], href: `/${lang}/contacts` }
  ]}
/>
<Logo {data} />
<audio src={url(data['background'])} autoplay></audio>
