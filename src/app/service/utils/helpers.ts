export const buildQueryParams = (data: any) => {
  return Object.entries(data)
    .map(([key, value]) => {
      let finalValue = value;
      if (Array.isArray(value)) {
        finalValue = value.join(',');
      }

      return `${key}=${encodeURI(finalValue as any)}`;
    })
    .join('&');
};
