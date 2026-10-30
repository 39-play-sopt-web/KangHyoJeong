const languageNames = new Intl.DisplayNames(['ko'], { type: 'language' });
const regionNames = new Intl.DisplayNames(['ko'], { type: 'region' });

export const formatLanguage = (code: string) => languageNames.of(code) ?? code;

export const formatCountry = (code: string) => regionNames.of(code) ?? code;

export const formatUsd = (amount: number) =>
  amount > 0 ? `$${amount.toLocaleString('en-US')}` : '정보 없음';
