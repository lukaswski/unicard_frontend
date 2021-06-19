const getData = async (url) => {
  try {
    const fetchedData = await fetch(url);
    const response = fetchedData.json();

    returnresponse;
  } catch(err) {
    console.log(err);
  }
};

export default getData;
