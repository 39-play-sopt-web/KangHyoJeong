const STORAGE_KEY = 'rankings';

export function getRecords() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
}

export function saveRecord(record) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...getRecords(), record]));
}

export function clearRecords() {
  localStorage.removeItem(STORAGE_KEY);
}
