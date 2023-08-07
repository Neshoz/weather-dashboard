const BASE_URL = "https://api.weatherapi.com/v1";
const KEY = "1e4cdb94662743c6a8873637232007";

export function get<T>(path: string, query: object) {
  return request<T>(path, query, "GET");
}

function request<T>(path: string, query: object, method: string): Promise<T> {
  const controller = new AbortController();
  const req = new Request(compileUrl(path, query), {
    method,
    signal: controller.signal,
  });

  const promise = fetch(req).then((res) => res.json());

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  promise.cancel = () => controller.abort();

  return promise;
}

function compileUrl(path: string, query: object) {
  return `${BASE_URL}${path}?key=${KEY}&${stringifyQuery(query)}`;
}

function stringifyQuery(query: object) {
  return Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}
