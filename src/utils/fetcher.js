// utils/fetcher.js
export function getBaseUrl() {
    if (typeof window !== 'undefined') return '';
    
    const vc = process.env.VERCEL_URL;
    if (vc) return `https://${vc}`;
  
    const localPort = process.env.LOCAL_PORT || 4000;
    return `http://localhost:${localPort}`;
  }
  
  export async function fetcher(route, options = {}) {
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/${route}`;
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} - ${response.statusText}`);
      }
  
      return response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }
  