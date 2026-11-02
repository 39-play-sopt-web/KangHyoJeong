import ky from 'ky';

export const client = ky.create({
  prefix: import.meta.env.VITE_API_BASE_URL,
  searchParams: {
    api_key: import.meta.env.VITE_API_KEY,
    language: 'ko-KR',
  },
});
