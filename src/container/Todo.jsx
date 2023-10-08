import _ from "lodash"
import { AddTodo } from "../components/AddTodo"
import { useRecoilState } from "recoil"
import { listState } from "../App"
import { TodoList } from "../components/TodoList"

export const Todo = () => {
    const [lists] = useRecoilState(listState)
    return (
        <main>
            <AddTodo />
            {!_.isEmpty(lists) && lists.map(list => <TodoList todo={
                list
            } />)}
        </main>
    )
}