const STORAGE_KEY = 'rankings';

export function getRecords() {
  try {
    const records = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(records) ? records : [];
  } catch {
    return [];
  }
}

export function saveRecord(record) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...getRecords(), record]));
}

export function clearRecords() {
  localStorage.removeItem(STORAGE_KEY);
}
