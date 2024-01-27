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

export default TaskHeader;
