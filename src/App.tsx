import './App.css'
import {Box, Paper} from '@mui/material'
import {Panel, TodoList} from './app/components'
import {useState} from 'react'
import {ITodo} from './app/shared/interfaces/todo.interface'

function App() {
    const [todos, setTodos] = useState<ITodo[]>([
        {
            id: 1,
            name: 'Todo-1',
            description: 'Buy beard',
            checked: false
        },
        {
            id: 2,
            name: 'Todo-2',
            description: 'Go to School',
            checked: true
        },
        {
            id: 3,
            name: 'Todo-3',
            description: 'Watch learning videos by programming',
            checked: false
        }
    ])

    const [isEdit, setIsEdit] = useState<number | null>(null)

    const onClickAddTodo = ({name, description}: Omit<ITodo, 'id' | 'checked'>): void => {
        setTodos([...todos, {id: new Date().getTime(), name, description, checked: false}])
    }

    const onDeleteTodo = (todoId: ITodo['id']): void => {
        setTodos(
            todos.filter(todo => todo.id !== todoId)
        )
    }

    const toggleComplete = (todoId: ITodo['id']): void => {
        setTodos(
            todos.map(todo => todo.id === todoId ? {...todo, checked: !todo.checked} : todo)
        )
    }

    const onEditTodoId = (todoId: ITodo['id']): void => {
        setIsEdit(todoId)
    }

    const onEditTodo = ({name, description}: Omit<ITodo, 'id' | 'checked'>): void => {
        setTodos(
            todos.map(todo => {
                if (todo.id === isEdit) {
                    return {
                        ...todo,
                        name,
                        description
                    }
                } else {
                    return todo
                }
            })
        )
        setIsEdit(null)
    }

    return (
        <Box display={'flex'} alignItems={'center'} marginTop={'5%'} flexDirection={'column'}>
            <Paper elevation={3} sx={{maxWidth: '550px', width: '100%', padding: '23px'}}>
                <Box>
                    <Panel onClickAddTodo={onClickAddTodo}/>
                </Box>
            </Paper>

            <TodoList todos={todos} onDeleteTodo={onDeleteTodo} toggleComplete={toggleComplete}
                      onEditTodoId={onEditTodoId} isEdit={isEdit} onEditTodo={onEditTodo}/>
        </Box>
    )
}

export default App
