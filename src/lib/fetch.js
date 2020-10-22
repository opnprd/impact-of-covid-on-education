export const getJson = async (url) => {
  const request = await fetch(url);
  return request.json();
};

export const getCsv = async (url) => {
  const request = await fetch(url);
  const text = await request.text();
  const [columns, ...data] = text
    .split('\n')
    .filter((x) => x)
    .map((row) => row.split(/\s*,\s*/));
  const table = data.map((row) =>
    row.reduce((a, c, i) => {
      a[columns[i]] = c;
      return a;
    }, {}),
  );
  Object.defineProperty(table, 'columns', {
    enumerable: false,
    writable: true,
  });
  table.columns = columns;
  return table;
};
