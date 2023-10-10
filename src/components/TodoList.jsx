export const TodoList = ({todo,color})=>{
    return(
        <div className="rounded-md p-2" style={{backgroundColor:"#"+color}}>
            {todo}
        </div>
    )
}