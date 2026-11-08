import { useMutation } from '@tanstack/react-query';

import { issueAuthorizationCode } from '@/domains/member/api/member';
import { STORAGE_KEYS } from '@/shared/constants/storage';

export const useIssueAuthorizationCode = () =>
  useMutation({
    mutationFn: issueAuthorizationCode,
    onSuccess: ({ authorizationCode }, { part }) => {
      localStorage.setItem(STORAGE_KEYS.AUTHORIZATION_CODE, authorizationCode);
      localStorage.setItem(STORAGE_KEYS.PART, part);
    },
  });
