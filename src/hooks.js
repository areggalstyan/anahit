const supportedLanguages = ['ru', 'en', 'hy'];

export async function handle({ request, resolve }) {
  const response = await resolve(request);
  const path = request.path.split('/');
  const lang = path[1];

  if (supportedLanguages.includes(lang)) {
    if (response.status === 404) {
      return {
        status: 302,
        headers: { Location: `/${lang}` }
      };
    }

    return {
      ...response
    };
  }

  const acceptLanguages = request.headers['accept-language']
    .split(';')
    .map((lang) => lang.split(','));

  for (let acceptLang of acceptLanguages) {
    for (let acceptSubLang of acceptLang) {
      if (supportedLanguages.includes(acceptSubLang)) {
        path[1] = acceptSubLang;

        return {
          status: 302,
          headers: { Location: path.join('/') }
        };
      }
    }
  }

  path[1] = 'ru';

  return {
    status: 302,
    headers: { Location: path.join('/') }
  };
}
