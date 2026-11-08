import type {
  AuthorizationCodeResponse,
  IssueAuthorizationCodeRequest,
} from '@/domains/member/types';
import { api } from '@/shared/api/instance';
import type { ApiResponse } from '@/shared/types/apiResponse';

export const issueAuthorizationCode = async (body: IssueAuthorizationCodeRequest) => {
  const { data } = await api
    .post('members/authorization-code', { json: body })
    .json<ApiResponse<AuthorizationCodeResponse>>();
  return data;
};
