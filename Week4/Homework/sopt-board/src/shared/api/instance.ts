import ky from 'ky';

import { STORAGE_KEYS } from '@/shared/constants/storage';

export const api = ky.create({
  prefix: `${import.meta.env.VITE_API_BASE_URL}/api/v1`,
  timeout: 10000,
  retry: 0,
  hooks: {
    beforeRequest: [
      ({ request }) => {
        const authorizationCode = localStorage.getItem(STORAGE_KEYS.AUTHORIZATION_CODE);
        if (authorizationCode) request.headers.set('Authorization', authorizationCode);
      },
    ],
  },
});
