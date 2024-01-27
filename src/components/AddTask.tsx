const AddTask = ({ onAddTask }: any) => {
  return (
    <div className="flex items-center  cursor-pointer" onClick={onAddTask}>
      <span className="text-3xl text-red-400 font-thin mr-2.5">+</span>
      <span className="text-gray-400">Add Task</span>
    </div>
  );
};

export default AddTask;
