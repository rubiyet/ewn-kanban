import { useState } from "react";

export default function TaskEdit({ task, tasks, setTasks, setSelectedTask }) {
  const [editedTitle, setEditedTitle] = useState(task.title); // for edit task
  const [editedDescription, setEditedDescription] = useState(task.description); // for edit task

  const saveTask = (taskId, editedTitle, editedDescription) => {
    const updatedTasks = tasks?.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          title: editedTitle,
          description: editedDescription,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
    setSelectedTask(null);
  }; // save task for edit task (set selected task to null)

  const handleSave = () => {
    saveTask(task.id, editedTitle, editedDescription);
  }; // handle save task for edit task

  return (
    <div className="flex flex-col bg-white">
      <div className="p-4 border border-gray-300 rounded-t">
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="px-2 py-1 mb-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded w-full"
        />
      </div>
      <button
        onClick={handleSave}
        className="px-2 py-1 bg-blue-500 text-white border border-blue-500 rounded-b hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
}
