import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../../../redux/actions";

const TaskForm = () => {
    const [text, setText] = useState("");
    
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo());
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
            <form className="form-control" onSubmit={onFormSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter new task . . ." 
                    className="input input-bordered w-full max-w-xs mx-auto mt-10 " 
                    onChange={onInputChange}
                />
            </form>
    );
};

export default TaskForm;