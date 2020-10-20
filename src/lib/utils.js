export const formatDate = (date) =>
  Intl.DateTimeFormat([], {
    dateStyle: 'full',
  }).format(new Date(date));
