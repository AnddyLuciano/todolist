import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "../App";
import { useRandomColor } from "../hook/useRandomColor";

export const AddTodo = () => {
    const [inp, setInp] = useState();
    const [lists, setLists] = useRecoilState(listState);
    const { color, generateColor } = useRandomColor();
    const handleInputChange = (e) => {
        setInp(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        generateColor();
        setLists([...lists, { todo: inp, color: color }]);
        e.target.reset();
    };
    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                name="inp-txt"
                placeholder="add work here"
                onChange={handleInputChange}
                className="rounded-md p-2 outline-[#F4DAD2]"
            />
            <input
                type="submit"
                value="add"
                className="bg-[#1167F4] hover:bg-[#1168f4dd] text-white p-2 rounded-md"
            />
        </form>
    );
};
