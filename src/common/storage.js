export const getBookmarks = () => {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('bookmarks') || '[]');
};

export const addBookmark = (surah, ayat, arab, arti) => {
  const bookmarks = getBookmarks();
  const exists = bookmarks.find(b => b.surah === surah && b.ayat === ayat);
  if (!exists) {
    bookmarks.push({ surah, ayat, arab, arti, date: new Date().toISOString() });
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
};

export const removeBookmark = (surah, ayat) => {
  const bookmarks = getBookmarks().filter(b => !(b.surah === surah && b.ayat === ayat));
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
};

export const isBookmarked = (surah, ayat) => {
  return getBookmarks().some(b => b.surah === surah && b.ayat === ayat);
};

export const setLastRead = (surah, ayat) => {
  localStorage.setItem('lastRead', JSON.stringify({ surah, ayat, date: new Date().toISOString() }));
};

export const getLastRead = () => {
  if (typeof window === 'undefined') return null;
  return JSON.parse(localStorage.getItem('lastRead') || 'null');
};
