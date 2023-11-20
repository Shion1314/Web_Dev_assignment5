
import { configureStore } from '@reduxjs/toolkit';
import authorReducer from './AuthorBooks_Slice';

const store = configureStore({
  reducer: {
    author: authorReducer,
  },
});

export default store;
