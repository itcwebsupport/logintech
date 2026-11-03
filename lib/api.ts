async function apiFetch<T = any>(
  path: string,
  init: RequestInit = {}
) {
  const isServer = typeof window === 'undefined';

  const headers = new Headers();

  let baseUrl: string;

  if (isServer) {
    const { cookies, headers: getHeaders } = await import('next/headers');
    const [cookieStore, headerStore] = await Promise.all([cookies(), getHeaders()]);

    headers.set('Cookie', cookieStore.toString());

    const host = headerStore.get('host');
    const protocol = headerStore.get('x-forwarded-proto') ?? 'http';

    baseUrl = `${protocol}://${host}`;
  } else {
    baseUrl = window.location.origin;
  }

  const url = `${baseUrl}${path}`;

  headers.set('Content-Type', 'application/json');

  const response = await fetch(url, {
    ...init,  
    headers,
    credentials: 'include',
  });

  return response;
}

export function apiGet(path: string) {
  return apiFetch(path, { method: 'GET' });
}

export function apiPost(path: string, data = []) {
  return apiFetch(path, {
    method: 'POST',
    body: JSON.stringify(data)
  })
}
