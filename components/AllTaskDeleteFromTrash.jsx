export default function AllTaskDeleteFromTrash({ tasks, setTasks }) {
  const deleteTasksTrashTasks = () => {
    const updatedTasks = tasks.filter((task) => task.status !== "TRASH");
    localStorage.removeItem("tasks");
    setTasks(updatedTasks);
  };

  return (
    <button
      onClick={deleteTasksTrashTasks}
      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center w-full"
    >
      Delete All
    </button>
  );
}
