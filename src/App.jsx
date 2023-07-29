import * as React from "react";
import Modal from "./components/Modal";
import Card from "./components/Card";
import { Toaster, toast } from "react-hot-toast";
import { Plus } from "react-feather";

const App = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [task, setTask] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const getTodo = localStorage.getItem("tasks");
    if (getTodo) {
      setTodos(JSON.parse(getTodo));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const addTodo = () => {
    const addTodoPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        setTodos([...todos, { title, task }]);
        resolve(); // Resolve the promise once the state is updated
      }, 500);
    });

    toast.promise(addTodoPromise, {
      loading: "Saving...",
      success: <b>Settings saved!</b>,
      error: <b>Could not save.</b>,
    });

    setTitle("");
    setTask("");
    closeModal();
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((key, value) => value !== index));
  };

  return (
    <>
      <div className="min-h-screen bg-[#20262E] dark:bg-white selection:bg-[#00FFAB] selection:text-[#515b69]">
        <h1 className="text-[#00FFAB] font-bold text-5xl flex justify-center items-center">To do list</h1>
        <div className="flex flex-col gap-4 md:w-[40%] mt-5 mx-auto bg-[#2b323b] rounded-lg p-2">
          <div onClick={openModal} className="flex items-center text-[#20262E] bg-[#00FFAB] w-fit px-2 rounded-md font-semibold text-lg cursor-pointer hover:bg-[#8892a0]">
            <Plus size={18} />
            Task
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal} title="Task">
            <p className="text-white">Title</p>
            <input required autoFocus onChange={handleTitleChange} name="title" type="text" className="w-80 h-8 p-2 text-white focus:outline-none rounded-md bg-[#515b69] border-[#00FFAB] border-[1px]" />
            <p className="mt-4 text-white">Task</p>
            <input required onChange={handleTaskChange} type="text" name="task" className="w-80 h-8 p-2 text-white focus:outline-none rounded-md bg-[#515b69] border-[#00FFAB] border-[1px]" />
            <div>
              <button onClick={addTodo} type="submit" className="w-80 h-8 mt-4 rounded-md bg-[#00FFAB] text-white hover:opacity-50">
                Submit
              </button>
            </div>
          </Modal>
          {todos?.map((todo, index) => (
            <Card key={index} onDelete={() => deleteTodo(index)} title={todo.title} description={todo.task} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
