"use client";

import { useState } from "react";
import { Input } from "@nextui-org/react";

import Task from "@/components/Task";

export default function Home() {
  const [tasks, setTasks] = useState([
    { caption: "Task 1", done: false },
    { caption: "Task 2", done: false },
  ]);

  const [showTaskInput, setShowTaskInput] = useState(true);

  const [taskInput, setTaskInput] = useState("");

  const handleClickonAddTask = () => {
    const newTask = { caption: taskInput, done: false };
    setTasks((task) => [...task, newTask]);
    setShowTaskInput(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-1/4">
        <div className="flex items-center">
          <div className="w-1/2 h-12">
            <h1 className="text-2xl mb-6">
              Tasks{" "}
              <span className="text-medium align-top text-gray-400">
                {tasks.length}
              </span>
            </h1>
          </div>
        </div>

        <ul>
          {tasks.map((item, index) => (
            <Task caption={item.caption} key={index} />
          ))}
        </ul>

        <div className="border-t-1 py-4">
          {showTaskInput ? (
            <div
              className="flex items-center  cursor-pointer"
              onClick={() => setShowTaskInput(false)}
            >
              <span className="text-3xl text-red-400 font-thin mr-2.5">+</span>
              <span className="text-gray-400">Add Task</span>
            </div>
          ) : (
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
                <span
                  className="mr-3 text-small cursor-pointer"
                  onClick={() => setShowTaskInput(true)}
                >
                  Cancel
                </span>
                <span
                  className="text-small text-red-500 cursor-pointer"
                  onClick={handleClickonAddTask}
                >
                  Add Task
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
