const pad = (value: number) => String(value).padStart(2, '0');

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const meridiem = hours < 12 ? '오전' : '오후';
  const displayHours = hours % 12 || 12;

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${meridiem} ${pad(displayHours)}:${pad(date.getMinutes())}`;
};
