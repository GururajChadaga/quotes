import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const quotesSlice = createSlice({
  name: 'quotes',
  initialState: [],
  reducers: {
    addQuote(state, action) {
      const quote = {
        id: uuid(),
        author: action.payload.author,
        text: action.payload.text,
      };
      state.push(quote);
    },
  },
});

export default quotesSlice;
