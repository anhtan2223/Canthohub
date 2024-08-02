const commonHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  
  interface RequestOptions extends RequestInit {
    headers?: Record<string, string>;
  }
  
  const createApiClient = (baseURL: string) => {
    const fetchJson = async (url: string, options: RequestOptions = {}): Promise<any> => {
      const response = await fetch(baseURL + url, {
        ...options,
        headers: {
          ...commonHeaders,
          ...options.headers,
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return response.json();
    };
  
    return {
      get: (url: string, options?: RequestOptions) => fetchJson(url, { ...options, method: 'GET' }),
      post: (url: string, data: any, options?: RequestOptions) => fetchJson(url, { ...options, method: 'POST', body: JSON.stringify(data) }),
      put: (url: string, data: any, options?: RequestOptions) => fetchJson(url, { ...options, method: 'PUT', body: JSON.stringify(data) }),
      delete: (url: string, options?: RequestOptions) => fetchJson(url, { ...options, method: 'DELETE' }),
    };
  };
  
  export default createApiClient;

  interface MultipartRequestOptions extends RequestInit {
    headers?: Record<string, string>;
  }
  
  const createMultipartApiClient = (baseURL: string) => {
    const fetchMultipart = async (url: string, options: MultipartRequestOptions = {}): Promise<any> => {
      const response = await fetch(baseURL + url, {
        ...options,
        headers: {
          Accept: 'multipart/form-data',
          ...options.headers,
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return response.json();
    };
  
    return {
      get: (url: string, options?: MultipartRequestOptions) => fetchMultipart(url, { ...options, method: 'GET' }),
      post: (url: string, data: FormData, options?: MultipartRequestOptions) => fetchMultipart(url, { ...options, method: 'POST', body: data }),
      put: (url: string, data: FormData, options?: MultipartRequestOptions) => fetchMultipart(url, { ...options, method: 'PUT', body: data }),
      delete: (url: string, options?: MultipartRequestOptions) => fetchMultipart(url, { ...options, method: 'DELETE' }),
    };
  };
  
  export { createMultipartApiClient };
  