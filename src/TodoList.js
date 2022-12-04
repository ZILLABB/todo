import React from "react";
import editIcon from "./images/edit-icon.svg";

const TodoList = ({
  todos,
  completedTask,
  Delete,
  count,
  setCount,
  setModal,
  handleEdit
}) => {
  return (
    <div className="absolute">
      <div>
        {todos &&
          todos.map((todo, index) => {
            return (
              <div className="shadow-lg border-2 mb-4 " key={index}>
                <h1
                  className={`text-[22px] font-medium font-poppins w-[602px] h-[140px] mt-[20px]  `}
                  key={index}
                >
                  <div className="px-3 flex justify-between">
                    <div>
                      <h1>{todo.todoName.name}</h1>
                      <p className="font-poppins font-normal text-base   ">
                        {todo.todoName.date}
                      </p>
                    </div>

                    <div>
                      <div className="group flex">
                        {todo.completed === true ? (
                          false
                        ) : (
                          // onClick={() => setUpdateTask(todo)}
                          <img
                            className={`mt-5 text-[#C54B4B] border-[1px] border-red-400 w-[25px] h-[24px] rounded-[50%] `}
                            src={editIcon}
                            alt="Edit"
                            onClick={()=> handleEdit(todo.id)}
                          />
                        )}
                        <div class="hidden group-hover:block font-normal text-sm font-poppins mt-10 ml-3">
                          Edit
                        </div>
                      </div>
                      <div className="mt-[4px]">
                        {todo.todoName.startTime}-{todo.todoName.endTime}
                      </div>
                    </div>
                  </div>
                </h1>
                <div className="flex justify-end pr-3 pb-[18px] gap-[9px]">
                  <button
                    onClick={() => completedTask(todo, setCount(count + 1))}
                    className={` mt-5 w-[116px] rounded-md h-[30px] border-2 
                    ${
                      todo.completed === true ? "text-white" : "text-[#C54B4B]"
                    } ${todo.completed === true ? "bg-green-300" : "bg-white"} 
                    ${
                      todo.completed === true
                        ? "border-none"
                        : " border-red-400"
                    }
                }`}
                  >
                    Completed
                  </button>

                  <button
                    onClick={() => Delete(todo, setCount(count - 1))}
                    className={`mt-5 w-[116px] rounded-md text-white h-[30px] bg-[#C54B4B]`}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
