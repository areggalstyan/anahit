import { STRAPI_URL } from '$lib/content';

export async function get({ params }) {
  const res = await fetch(`${STRAPI_URL}/${params.page}?_locale=${params.lang}`);
  const data = await res.json();

  return { body: data };
}
