export const createRequest = (options = {}) => {
  const {
    url,
    data = {},
    method = 'GET',
    callback = () => {}
  } = options;

  const xhr = new XMLHttpRequest();
  let requestUrl = url;
  let payload = null;

  if (method.toUpperCase() === 'GET' && Object.keys(data).length) {
    const params = new URLSearchParams(data).toString();
    requestUrl += (url.includes('?') ? '&' : '?') + params;
  } else if (method.toUpperCase() !== 'GET') {
    payload = new FormData();
    Object.entries(data).forEach(([key, value]) => payload.append(key, value));
  }

  xhr.responseType = 'json';

  try {
    xhr.open(method, requestUrl);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        callback(null, xhr.response);
      } else {
        callback(new Error(`Request failed with status ${xhr.status}`), null);
      }
    };
    xhr.onerror = () => callback(new Error('Network error'), null);
    xhr.send(payload);
  } catch (err) {
    callback(err, null);
  }
};
