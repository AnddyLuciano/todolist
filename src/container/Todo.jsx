import _ from "lodash";
import { AddTodo } from "../components/AddTodo";
import { useRecoilState } from "recoil";
import { listState } from "../App";
import { TodoList } from "../components/TodoList";
import { useEffect } from "react";

export const Todo = () => {
    const [lists] = useRecoilState(listState);
    useEffect(() => {
        console.log(lists);
    }, [lists]);
    return (
        <main className="w-full h-full flex items-center justify-center relative">
            <AddTodo />
            <div className="absolute top-0 right-0 h-full overflow-y-scroll flex flex-col gap-2 bg-white w-1/5 p-2">
                {!_.isEmpty(lists) &&
                    lists.map((list, index) => (
                        <div className="w-full">
                            <TodoList
                                key={`todo-${index}`}
                                todo={list.todo}
                                color={list.color || "F4DAD2"}
                            />
                        </div>
                    ))}
            </div>
        </main>
    );
};
