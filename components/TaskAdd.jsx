import { useState } from "react";

export default function TaskAdd({ tasks, setTasks }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [errorMessages, setErrorMessages] = useState();

  const addNewTask = () => {
    if (!newTaskTitle || !newTaskDescription) {
      setErrorMessages("Please enter a title and description");
      return;
    }
    const newTask = {
      id: new Date().getTime().toString(),
      title: newTaskTitle,
      description: newTaskDescription,
      status: "TODO",
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setNewTaskDescription("");
  };

  return (
    <div className="py-8 select-none space-y-1">
    <div className="flex items-center justify-center space-x-0.5">
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        className="px-2 py-1 border-2 border-black rounded placeholder:text-center"
        placeholder="New task title..."
      />
      <input
        type="text"
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
        className="px-2 py-1 border-2 border-black rounded placeholder:text-center"
        placeholder="New task description..."
      />
      <button
        onClick={addNewTask}
        className="px-5 py-1 bg-black border-2 border-black text-white font-semibold rounded hover:bg-green-600"
      >
        Add Task
      </button>
    </div>
    {errorMessages && (
        <div className="flex items-center justify-center text-red-500">
          {errorMessages}
          </div>
      )}
    </div>
  );
}
