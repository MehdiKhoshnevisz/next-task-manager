import { Checkbox } from "@nextui-org/react";

const Task = ({ caption = "", active = false }) => {
  return (
    <li className="border-t-1 py-4">
      <Checkbox radius="sm">{caption}</Checkbox>
    </li>
  );
};

export default Task;
