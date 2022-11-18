import moment from "moment/moment";
import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [input, setInput] = useState(false);

  // let newTime = {};
  let formattedTime = moment("".time).format("MMM DD YYYY  HH:mm");
  console.log();

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask) {
      alert("Add a Task");
    } else {
      const todo = {
        id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
        todoName: newTask,
        completed: false,
      };
      setTodos([...todos, todo]);
    }
  };

  const completedTask = (todoName) => {
    setTodos(
      todos.map((todo) => {
        if (todo === todoName) {
          console.log(todo);
          return { ...todo, completed: true };
        } else {
          return todo;
        }
      })
    );
  };

  const Delete = (todoName) => {
    setTodos(todos.filter((todo) => todo !== todoName));
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="text-center  justify-center m-auto  ">
        <h1 className="text-[40px] lg:w-[200px] font-4xl text-white border-4  shadow-xl rounded-2xl p-3 ">
          {formattedTime}
        </h1>
        <div className="">
          <h1 className="text-3xl">Add a task</h1>
          <GrAddCircle
            className="w-10 h-10 m-auto mt-4 "
            onClick={() => setInput(!input)}
          />
        </div>

        {input && (
          <form action="" className="">
            <input
              type="text"
              placeholder="Add New Task "
              className="h-10 pl-5 lg:rounded-l-xl rounded-md border-2 mt-20 lg:w-[300px] w-[300px]  "
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              onClick={addTask}
              className="bg-green-400 h-10 text-xl w-[150px] text-white lg:rounded-r-xl rounded-xl mt-2"
            >
              Add New Task
            </button>
          </form>
        )}
        <div>
          {todos &&
            todos.map((todo, index) => {
              return (
                <div className="shadow-lg">
                  <h1
                    className={`text-[50px]  shadow-lg rounded-xl text-white font-normal bg-slate-400 lg:w-[400px]  flex justify-center m-auto mt-[20px] ${
                      todo.completed === true ? "bg-green-300" : "bg-green-900"
                    }  `}
                    key={index}
                  >
                    {todo.todoName}
                  </h1>
                  <button
                    onClick={() => completedTask(todo)}
                    className={`bg-emerald-800  text-white text-4xl mt-5 w-[200px] rounded-lg h-15 mb-5 
                }`}
                  >
                    Completed
                  </button>
                  <button
                    onClick={() => Delete(todo)}
                    className="bg-emerald-800 text-white text-4xl mt-5 w-[150px] ml-5 rounded-lg h-15 mb-5"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
