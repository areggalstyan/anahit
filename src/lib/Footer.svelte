<script>
  import { getNextLang, url } from '$lib/content';
  import AbstractFooter from './abstract/AbstractFooter.svelte';

  export let data;
  export let lang;
  export let route;
</script>

<AbstractFooter
  links={[
    data['facebook1'],
    data['youtube'],
    data['facebook2'],
    `mailto: ${data['email']}`,
    data['facebook3']
  ]}
  items={[
    { name: data['gallery'], href: `/${lang}/gallery` },
    { name: data['contacts'], href: `/${lang}/contacts` },
    {
      name: getNextLang(lang) === 'en' ? 'English'
      : getNextLang(lang) === 'hy' ? 'Հայերեն' : 'Русский',
      classes: 'ml-2 sm:ml-4 border-white border-[1px] p-1 pl-2 pr-2 rounded',
      href: `/${getNextLang(lang)}${route}`,
      external: true
    }
  ]}
/>
<audio src={url(data['background'])} autoplay loop></audio>