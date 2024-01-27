import { useState } from "react";
import { Input } from "@nextui-org/react";

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

export default AddTaskInput;
