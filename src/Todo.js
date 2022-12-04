import React, { useEffect, useState,useRef } from "react";
import Modal from "./Modal";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState({
    name: "",
    date: "",
    startTime: "",
    endTime: "",
  });
  const [count, setCount] = useState(0);
  const [taskCount, setTaskCount] = useState(0);
  const [editTodo, setEditTodo] = useState(null);
  const [modal, setModal] = useState(false);

  const updateTodo = (todoName, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { todoName, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  const handleChange = (event) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value });
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!editTodo) {
      const todo = {
        id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
        todoName: newTask,
        completed: false,
      };
      setTodos([...todos, todo]);
    } else {
      updateTodo(newTask, editTodo.id, editTodo.completed);
    }

    // }
  };

  const completedTask = (todoName) => {
    setTodos(
      todos.map((todo) => {
        if (todo === todoName) {
          return { ...todo, completed: true };
        } else {
          return todo;
        }
      })
    );
  };

  const handleEdit = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
    setModal(true);
  };
  console.log(editTodo);


  // useEffect(() => {
  //   if (editTodo) {
  //     setNewTask(editTodo.todoName);
  //   } else {
  //     setNewTask("");
  //   }
  // }, [setNewTask, editTodo]);

  // const updateClick = (todo) => {
  //   setUpdateTask(todo.id, todo.completed, todo.todoName);
  // };

  const Delete = (todoName) => {
    setTodos(todos.filter((todo) => todo !== todoName));
  };

  return (
    <div className=" lg:flex absolute overflow-x  ">
      <div className=" text-center w-[634px]  ">
        <form onSubmit={addTask} className="">
          <h1 className="text-red-500 font-bold text-[26px] text-center mb-12 font-poppins">
            CREATE A TASK
          </h1>
          <input
            type="text"
            placeholder=" Task Name"
            name="name"
            className="h-[65px] rounded-[10px] border-solid border-2 border-slate-500 mb-[41px]  opacity-4 pl-3 mt-2 w-[555px] "
            onChange={handleChange}
            required
          />
          <input
            type="date"
            placeholder=" Date"
            name="date"
            className="h-[65px] rounded-[10px] border-solid border-2 border-slate-500 mb-[44px]  opacity-4 pl-3 mt-2 w-[555px]   "
            onChange={handleChange}
            required
          />
          <div className="flex gap-[59px] justify-center mb-20">
            <input
              type="time"
              placeholder=" Start Time"
              name="startTime"
              className="h-[65px] rounded-[10px] border-solid  border-slate-500 border-2  opacity-4 pl-3 mt-2  w-[248px] shadow-xl  "
              onChange={handleChange}
              required
            />
            <input
              type="time"
              placeholder=" End Time"
              name="endTime"
              className="h-[65px] rounded-[10px] border-solid  border-slate-500 border-2  opacity-4 pl-3 mt-2  w-[248px] shadow-xl  "
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#C54B4B] h-[68px] text-xl w-[394px] text-white  rounded-[14px] mt-2 font-poppins "
          >
            CREATE TASK
          </button>
        </form>
      </div>
      <div className="  mt-11">
        <h1 className="text-red-500 font-bold text-[26px] text-center  font-poppins">
          My Task
        </h1>
        <hr className="border-2 border-slate-400 mb-[26.98px]" />
        <div
          className={` text-black mb-[18px] w-[319px] h-[44px] rounded-md bg-[#F5F5F5] flex `}
        >
          <h1 className="font-poppins font-bold text-sm pl-[9px] pt-[14px]  ">
            Total task : {todos.length}
          </h1>
          <h1 className="font-poppins font-bold text-sm pl-[9px] pt-[14px]  ">
            completed Task : {count}
          </h1>
        </div>
        <div className="">
          <TodoList
            todos={todos}
            completedTask={completedTask}
            Delete={Delete}
            setEditTodo={setEditTodo}
            count={count}
            setCount={setCount}
            addTask={addTask}
            taskCount={taskCount}
            setTaskCount={setTaskCount}
            setModal={setModal}
            handleEdit={handleEdit}
          />
        </div>
        {modal && (
          <Modal
            todos={todos}
            addTask={addTask}
            handleChange={handleChange}
            setModal={setModal}
            setEditTodo={setEditTodo}
            handleEdit={handleEdit}
            editTodo={editTodo}
            setNewTask={setNewTask}
            newTask={newTask}
            
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
