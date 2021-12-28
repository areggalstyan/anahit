export const STRAPI_URL = import.meta.env.VITE_PUBLIC_STRAPI_URL;

export const supportedLanguages = ['ru', 'en', 'hy'];

export function getNextLang(lang) {
  let index = supportedLanguages.indexOf(lang) + 1;

  return supportedLanguages[index < supportedLanguages.length ? index : 0];
}

export const globalMenu = (data, lang) => {
  return {
    items: [
      { name: data['name'], href: `/${lang}/anahit` },
      {
        name: data['violin'],
        dropdown: [
          { name: data['violinHome'], href: `/${lang}/violin` },
          { name: data['reviews'], href: `/${lang}/violin/reviews` },
          { name: data['repertoire'], href: `/${lang}/violin/repertoire` },
          { name: data['concertTours'], href: `/${lang}/violin/concert-tours` }
        ]
      },
      {
        name: data['research'],
        dropdown: [
          { name: data['researchHome'], href: `/${lang}/research` },
          { name: data['dissertation'], href: `/${lang}/research/dissertation` },
          { name: data['books'], href: `/${lang}/research/books` },
          { name: data['articles'], href: `/${lang}/research/articles` }
        ]
      },
      { name: data['pedagogy'], href: `/${lang}/pedagogy` },
      { name: data['records'], href: `/${lang}/records` },
      { name: data['heritage'], href: `/${lang}/heritage` }
    ],
    more: data['musician']
  };
}

export const biographyMenu = (data, lang) => {
  return [
    { name: data['creativePath'], href: `/${lang}/anahit` },
    { name: data['biography'], href: `/${lang}/anahit/biography` },
    { name: data['newspaper'], href: `/${lang}/anahit/newspaper` },
    { name: data['diaryStories'], href: `/${lang}/anahit/diary-stories` }
  ];
}

export const researchMenu = (data, lang) => {
  return [
    { name: data['researchHome'], href: `/${lang}/research` },
    { name: data['dissertation'], href: `/${lang}/research/dissertation` },
    { name: data['books'], href: `/${lang}/research/books` },
    { name: data['articles'], href: `/${lang}/research/articles` }
  ];
}

export const violinMenu = (data, lang) => {
  return [
    { name: data['violinHome'], href: `/${lang}/violin` },
    { name: data['reviews'], href: `/${lang}/violin/reviews` },
    { name: data['repertoire'], href: `/${lang}/violin/repertoire` },
    { name: data['concertTours'], href: `/${lang}/violin/concert-tours` }
  ];
}

export const heritageMenu = (data, lang) => {
  return [
    { name: data['heritageHome'], href: `/${lang}/heritage` },
    { name: data['school'], href: `/${lang}/heritage/school` },
    { name: data['foundation'], href: `/${lang}/heritage/foundation` }
  ];
}

export const recordsMenu = (data, lang) => {
  return [
    { name: data['recordsHome'], href: `/${lang}/records` },
    { name: data['vinyl'], href: `/${lang}/records/vinyl` },
    { name: data['cd'], href: `/${lang}/records/cd` },
    { name: data['videos'], href: `/${lang}/records/videos` }
  ];
}

export function url(image) {
  return image['url'].replace('upload', 'upload/q_60');
}

export function format(text) {
  return text.replace(/\/N/g, '<br />');
}

export async function loadData(url, fetch, page) {
  if (supportedLanguages.includes(page.params.lang)) {
    const globalMenuRes = await fetch(`/${page.params.lang}/data/global-menu.json`);
    const globalMenuData = await globalMenuRes.json();

    const res = await fetch(`/${page.params.lang}/data/${url}.json`);

    try {
      const data = await res.json();

      return {
        props: {
          data: {
            ...globalMenuData,
            ...data
          },
          lang: page.params.lang
        }
      };
    } catch {
      return {
        status: 302,
        redirect: `/${page.params.lang}`
      };
    }
  }
}
