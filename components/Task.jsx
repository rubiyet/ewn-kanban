export default function Task({ task }) {
  const onDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  return (
    <div
      className="p-4 bg-white shadow cursor-move border border-gray-300 rounded-t"
      draggable="true"
      onDragStart={(e) => onDragStart(e, task.id)}
    >
      <h3 className="font-semibold">{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
}
