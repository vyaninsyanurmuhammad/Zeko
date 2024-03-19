import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./features/app-slice";
import teamsReducer from "./features/teams/teams-slice";
import aboutReducer from "./features/about/about-slice";
import homeReducer from "./features/home/home-slice";

export const store = configureStore({
  reducer: {
    appReducer,
    teamsReducer,
    aboutReducer,
    homeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
