import { configureStore } from "@reduxjs/toolkit";

import taskSlice from "@/store/features/todos/taskSlice";

export const store = () =>
  configureStore({
    reducer: {
      task: taskSlice,
    },
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
