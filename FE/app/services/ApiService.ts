const commonHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};
const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api';
// const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL ;
// const apiBaseURL = process.env.API_BASE_URL! || 'https://canthohub-o8k0ktl6v-julyyvs-projects.vercel.app/api';

const authHeader = (token?: string) => {
  if (!token)
    return null
  return {
    'Authorization': `Bearer ${token}`
  }
}

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

const createApiClient = (baseURL: string = apiBaseURL) => {
  const fetchJson = async (url: string, options: RequestOptions = {}): Promise<any> => {
    try {
      const response = await fetch(baseURL + url, {
        ...options,
        headers: {
          ...commonHeaders,
          ...options.headers
        },
      })
      
      if (response.status === 204) {
        return {}
      }
      const data = await response.json()
      if (!response.ok)
        return Promise.reject(data.error)

      return Promise.resolve(data.data)
    } catch (error) {
      console.log(error)
      throw Error(`Không Thể Kết Nối Đến Server ${baseURL}`)
    }
  };

  return {
    get: (url: string, token?: string, options?: RequestOptions) => fetchJson(url, { ...{ ...options, headers: { ...authHeader(token) } }, method: 'GET' }),
    post: (url: string, data: any, token?: string, options?: RequestOptions) => fetchJson(url, { ...{ ...options, headers: { ...authHeader(token) } }, method: 'POST', body: JSON.stringify(data) }),
    put: (url: string, data: any, token?: string, options?: RequestOptions) => fetchJson(url, { ...{ ...options, headers: { ...authHeader(token) } }, method: 'PUT', body: JSON.stringify(data) }),
    delete: (url: string, token?: string, options?: RequestOptions) => fetchJson(url, { ...{ ...options, headers: { ...authHeader(token) } }, method: 'DELETE' }),
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
