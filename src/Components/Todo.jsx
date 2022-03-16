import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, delTodo, remTodo } from "../Actions";

const Todo = () => {
  const [inputData, setInputData] = useState("");

  const lists = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
 
  return (
    <>
      <div className="container text-center  ">
        <div className="row justify-content-center ">
          <div className="col-sm  col-lg-5">
            <h1>Todo List</h1>

            <div  className="d-flex align-items-center ">
              <input
                type="text"
                className="form-control"
                placeholder="✍🏻 Add Items.."
                required
                value={inputData}
                onChange={(event) => setInputData(event.target.value)}
              />
              <button
                onClick={()=>dispatch(addTodo(inputData), setInputData(""))}
                className="mx-1 px-2 btn btn-primary text-white btn-outline-dark"
              >
                <i className="fa-solid fa-plus"></i>
              </button>

              <button
                className=" px-2 btn btn-danger"
                onClick={() => dispatch(remTodo())}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
            <div>
              {lists.map((elem) => {
                return (
                  <div
                    className="d-flex mt-3 bg-dark text-white text-wrap justify-content-between text-break form-control  align-items-center  "
                    key={elem.id}
                  >
                    <h3>{elem.data}</h3>
                    <button
                      onClick={() => dispatch(delTodo(elem.id))}
                      className=" mx-2 my-2  btn  btn-outline-danger"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
