import { useState, useEffect } from "react";
import TaskList from "@/components/TaskList";
import TaskAdd from "@/components/TaskAdd";
import Head from "next/head";

export default function Index() {
  const list = ["TODO", "DOING", "DONE", "TRASH"]; // List of status
  const [tasks, setTasks] = useState([]); // State for tasks

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []); // Get tasks from local storage

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]); // Set tasks to local storage

  const onDragOver = (e) => {
    e.preventDefault();
  }; // Prevent default

  const onDrop = (e, status) => {
    const taskId = e.dataTransfer.getData("taskId");
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          status: status,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }; // Update status of task when drop to new status column (list)

  return (
    <div>
      <Head>
        <title>Kanbanboard/</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Kanbanboard" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
      </Head>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center font-semibold pt-8 tracking-wide">
          Drag & Drop
        </h1>
        <h2 className="text-5xl text-center font-bold pt-4">
          Lean Kanban Board
        </h2>
        <TaskAdd tasks={tasks} setTasks={setTasks} />
        <div className="flex space-x-8 pt-8">
          {list.map((item) => (
            <div
              key={Math.random()}
              className="flex flex-col items-center"
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => onDrop(e, item)}
            >
              <TaskList
                title={item}
                tasks={tasks}
                setTasks={setTasks}
                filterTasks={tasks?.filter((task) => task.status === item)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
