import ky, { isHTTPError } from 'ky';

import { STORAGE_KEYS } from '@/shared/constants/storage';
import type { ApiResponse } from '@/shared/types/apiResponse';

export const api = ky.create({
  prefix: `${import.meta.env.VITE_API_BASE_URL}/api/v1`,
  retry: 0,
  hooks: {
    beforeRequest: [
      ({ request }) => {
        const code = localStorage.getItem(STORAGE_KEYS.AUTHORIZATION_CODE);
        if (code) request.headers.set('Authorization', code);
      },
    ],
    beforeError: [
      ({ error }) => {
        const body = isHTTPError(error) ? (error.data as ApiResponse<null> | undefined) : undefined;
        if (body?.message) error.message = body.message;
        return error;
      },
    ],
  },
});
