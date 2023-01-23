import {Box} from '@mui/material'
import {FC} from 'react'
import {ITodo} from '../../shared/interfaces/todo.interface'
import {TodoItem} from './TodoItem/TodoItem'
import EditPanel from '../EditPanel/EditPanel'

interface TodoListProps {
    todos: ITodo[]
    onDeleteTodo: (todoId: ITodo['id']) => void
    toggleComplete: (todoId: ITodo['id']) => void
    onEditTodoId: (todoId: ITodo['id']) => void
    isEdit: number | null
    onEditTodo: ({name, description}: Omit<ITodo, 'id' | 'checked'>) => void
}

export const TodoList: FC<TodoListProps> = ({
                                                todos,
                                                onDeleteTodo,
                                                toggleComplete,
                                                onEditTodoId,
                                                isEdit,
                                                onEditTodo
                                            }): JSX.Element => {
    return (
        <Box sx={{maxWidth: '550px', width: "100%"}}>
            {
                todos.map((todo) => {
                    if (isEdit !== todo.id) {
                        return <TodoItem key={todo.id} {...todo} onDeleteTodo={onDeleteTodo}
                                         toggleComplete={toggleComplete}
                                         onEditTodoId={onEditTodoId}/>
                    } else {
                        return <EditPanel key={todo.id} {...todo} onEditTodo={onEditTodo}/>
                    }
                })
            }
        </Box>
    )
}

