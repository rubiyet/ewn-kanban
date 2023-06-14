import { useState } from "react";
import Task from "@/components/Task";
import TaskEdit from "@/components/TaskEdit";
import AllTaskDeleteFromTrash from "@/components/AllTaskDeleteFromTrash";

export default function TaskList({ title, tasks, setTasks, filterTasks }) {
  const [selectedTask, setSelectedTask] = useState(null);

  const editTask = (taskId) => {
    setSelectedTask(taskId);
  };

  return (
    <div className="flex flex-col w-64 select-none">
      <h2
        className={`h-12 w-full rounded-t text-lg text-white font-semibold border-b-2 flex items-center justify-center ${
          title === "TODO"
            ? "bg-gray-500"
            : title === "DOING"
            ? "bg-yellow-500"
            : title === "DONE"
            ? "bg-green-500"
            : "bg-red-500"
        }`}
      >
        {title}
      </h2>
      <div className="w-full bg-gray-100 rounded-b border-2 space-y-3 p-2">
        {filterTasks.length === 0 ? (
          <p className="text-gray-500 flex items-center justify-center">No tasks</p>
        ) : (
          filterTasks.map((task) => (
            <div key={task.id}>
              {selectedTask === task.id ? (
                <TaskEdit
                  task={task}
                  tasks={tasks}
                  setTasks={setTasks}
                  setSelectedTask={setSelectedTask}
                />
              ) : (
                <div className="flex flex-col bg-white">
                  <Task task={task} onEditTask={editTask} />
                  <button
                    onClick={() => editTask(task.id)}
                    className="px-2 py-1 bg-blue-500 text-white rounded-b hover:bg-blue-600"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))
        )}
        {title === "TRASH" && filterTasks.length > 0 && (
          <AllTaskDeleteFromTrash tasks={tasks} setTasks={setTasks} />
        )}
      </div>
    </div>
  );
}
