export const isIncludesQuery = (query: string, str: string) => {
  const slicedQuery = query.split(" ");

  for (let i = 0; i < slicedQuery.length; i++) {
    if (str.toLowerCase().includes(slicedQuery[i])) {
      return true;
    }
  }

  return false;
};
