"use client";

import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setTask } from "@/store/features/todos/taskSlice";

import Task from "@/components/Task";
import AddTask from "@/components/AddTask";
import TaskHeader from "@/components/TaskHeader";
import AddTaskInput from "@/components/AddTaskInput";

export default function Home() {
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.task);

  const [showTaskInput, setShowTaskInput] = useState(true);

  const handleClickonAddTask = (caption = "") => {
    const newTask = { caption, done: false };
    dispatch(setTask(newTask));
    setShowTaskInput(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-1/4">
        <TaskHeader tasksCount={tasks.length} />

        <ul>
          {tasks.map((item, index) => (
            <Task caption={item.caption} key={index} />
          ))}
        </ul>

        <div className="border-t-1 py-4">
          {showTaskInput ? (
            <AddTask onAddTask={() => setShowTaskInput(false)} />
          ) : (
            <AddTaskInput
              onAdd={handleClickonAddTask}
              onCancel={() => setShowTaskInput(true)}
            />
          )}
        </div>
      </div>
    </main>
  );
}
