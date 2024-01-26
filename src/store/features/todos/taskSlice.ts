import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  caption: string;
}

interface TasksInterface {
  tasks: Task[];
}

const initialState: TasksInterface = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    setTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { setTask } = taskSlice.actions;
export default taskSlice.reducer;