const getData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status ${response.text}`);
  }
  return await response.json();
};

export { getData };
