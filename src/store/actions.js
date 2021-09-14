import quotesSlice from './quotes-slice';

export const sendData = (data, endpoint) => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_QUOTES_API}/${endpoint}.json`;
    const sendRequest = async () => {
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Sending quotes failed.');
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchData = (endpoint) => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_QUOTES_API}/${endpoint}.json`;
    const sendRequest = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Fetching quotes failed.');
      }
      const responseData = await response.json();
      return responseData;
    };

    try {
      const quotes = await sendRequest();
      dispatch(quotesSlice.actions.replaceQuotes(quotes));
    } catch (error) {
      console.log(error.message);
    }
  };
};
