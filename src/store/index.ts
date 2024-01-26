import { configureStore } from "@reduxjs/toolkit";

import taskSlice from "@/store/features/todos/taskSlice";

export const store = configureStore({
  reducer: {
    task: taskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
