"use client";

import { useState } from "react";
import { Input } from "@nextui-org/react";

import Task from "@/components/Task";

const TaskHeader = ({ tasksCount = 0 }) => {
  return (
    <div className="flex items-center">
      <div className="w-1/2 h-12">
        <h1 className="text-2xl mb-6">
          Tasks{" "}
          <span className="text-medium align-top text-gray-400">
            {tasksCount}
          </span>
        </h1>
      </div>
    </div>
  );
};

const AddTask = ({ onAddTask }: any) => {
  return (
    <div className="flex items-center  cursor-pointer" onClick={onAddTask}>
      <span className="text-3xl text-red-400 font-thin mr-2.5">+</span>
      <span className="text-gray-400">Add Task</span>
    </div>
  );
};

const AddTaskInput = ({ onAdd, onCancel }: any) => {
  const [taskInput, setTaskInput] = useState("");

  return (
    <>
      <Input
        type="text"
        variant="bordered"
        size="sm"
        placeholder="Your fucking task tilte"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <div className="text-right pt-2">
        <span className="mr-3 text-small cursor-pointer" onClick={onCancel}>
          Cancel
        </span>
        <span
          className="text-small text-red-500 cursor-pointer"
          onClick={() => onAdd(taskInput)}
        >
          Add Task
        </span>
      </div>
    </>
  );
};

export default function Home() {
  const [tasks, setTasks] = useState([
    { caption: "Task 1", done: false },
    { caption: "Task 2", done: false },
  ]);

  const [showTaskInput, setShowTaskInput] = useState(true);

  const handleClickonAddTask = (caption = "") => {
    const newTask = { caption, done: false };
    setTasks((task) => [...task, newTask]);
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
