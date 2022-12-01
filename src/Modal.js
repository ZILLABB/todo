import React from "react";

const Modal = ({ addTask, handleChange, setModal }) => {
  return (
    <div className="top-0 left-0 right-0 z-2 w-[100vw] h-[100vh] bg-[#00000066]  absolute   ">
      <div className="flex justify-center">
        <div className="  bg-[#F5F5F5] w-[635px] h-[554px] rounded-[5px] absolute   text-center">
          <div>
            <button
              onClick={() => setModal(false)}
              className="font-bold text-xl text-red-500 ml-[500px]  "
            >
              X
            </button>
            <form onSubmit={addTask} className="">
              <h1 className="text-red-500 font-bold text-[26px] text-center  font-poppins">
                EDIT TASK
              </h1>
              <input
                type="text"
                placeholder=" Task Name"
                name="name"
                className="h-[65px] rounded-[10px] border-solid border-2 border-slate-500 mb-[21px]  opacity-4 pl-3 mt-1 w-[555px] "
                onChange={handleChange}
                required
              />
              <input
                type="date"
                placeholder=" Date"
                name="date"
                className="h-[65px] rounded-[10px] border-solid border-2 border-slate-500 mb-[24px]  opacity-4 pl-3 mt-2 w-[555px]   "
                onChange={handleChange}
                required
              />
              <div className="flex gap-[59px] justify-center mb-10">
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
                className="bg-[#C54B4B] h-[46px] text-xl w-[187px] text-white  rounded-[5px] mt-2 font-poppins "
              >
                SAVE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
