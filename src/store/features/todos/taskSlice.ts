import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  caption: string;
}

interface TasksInterface {
  tasks: Task[];
}

const initialState: TasksInterface = {
  tasks: [{ caption: "Task todo 1" }, { caption: "Task todo 2" }],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    setTask: (state, action: PayloadAction<Task>) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export const { setTask } = taskSlice.actions;
export default taskSlice.reducer;
