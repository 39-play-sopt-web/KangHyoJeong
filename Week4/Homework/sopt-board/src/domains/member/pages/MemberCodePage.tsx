import { useState } from 'react';
import { useNavigate } from 'react-router';

import { PART_OPTIONS } from '@/domains/member/constants';
import { useIssueAuthorizationCode } from '@/domains/member/hooks/useIssueAuthorizationCode';
import Button from '@/shared/components/Button';
import Select from '@/shared/components/Select';
import { ROUTES } from '@/shared/constants/routes';
import { STORAGE_KEYS } from '@/shared/constants/storage';

function MemberCodePage() {
  const navigate = useNavigate();
  const [part, setPart] = useState('');
  const { mutate: issueCode, isPending } = useIssueAuthorizationCode();

  const hasCode = Boolean(localStorage.getItem(STORAGE_KEYS.AUTHORIZATION_CODE));

  const handleIssue = () => {
    issueCode(
      { part },
      {
        onSuccess: () => navigate(ROUTES.POST_LIST),
        onError: (error) => alert(error.message),
      },
    );
  };

  return (
    <main className="flex min-h-dvh items-center justify-center px-4">
      <div className="flex w-full max-w-96 flex-col">
        <h1 className="text-3xl font-bold">PLAY SOPT 게시판</h1>
        <p className="mt-3 text-sm font-medium text-foreground-muted">
          파트를 선택하면 코드가 발급됩니다.
        </p>
        <div className="mt-7 flex gap-2">
          <Select
            aria-label="파트 선택"
            options={PART_OPTIONS}
            placeholder="파트를 선택하세요."
            value={part}
            onChange={(e) => setPart(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleIssue} disabled={!part || isPending}>
            코드 발급 받기
          </Button>
        </div>
        <Button
          variant="outline"
          onClick={() => navigate(ROUTES.POST_LIST)}
          disabled={!hasCode}
          className="mt-3 w-full"
        >
          게시판 목록 보기
        </Button>
      </div>
    </main>
  );
}

export default MemberCodePage;
