"use client";

import { useState } from "react";
// import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/react";

const TaskItem = ({ caption = "", active = false }) => {
  return (
    <li className="border-t-1 py-3">
      <Checkbox defaultSelected radius="sm">
        {caption}
      </Checkbox>
    </li>
  );
};

export default function Home() {
  const [tasks, setTasks] = useState([
    { caption: "Task 1", done: false },
    { caption: "Task 2", done: false },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-1/4">
        <div className="flex items-center">
          <div className="w-1/2 h-12">
            <h1 className="text-2xl mb-6">Tasks</h1>
          </div>
          {/* <div className="w-1/2 h-12 flex justify-end">
            <Button isIconOnly color="success" radius="full"></Button>
          </div> */}
        </div>

        <ul>
          {tasks.map((item) => (
            <TaskItem caption={item.caption} />
          ))}
        </ul>
      </div>
    </main>
  );
}
