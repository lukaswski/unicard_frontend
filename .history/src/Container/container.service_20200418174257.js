const getData = async (url) => {
  const fetchedData = await fetch(url);
  const response = fetchedData.json();
  return response;
};

export default getData;
