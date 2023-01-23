import {ChangeEvent, FC, useState} from 'react'
import {Box, Button, Input, Paper} from '@mui/material'
import {ITodo} from '../../shared/interfaces/todo.interface'

interface EditPanelProps extends ITodo {
    onEditTodo: ({name, description}: Omit<ITodo, 'id' | 'checked'>) => void
}

const EditPanel: FC<EditPanelProps> = ({name, description, onEditTodo}): JSX.Element => {
    const [todo, setTodo] = useState<Omit<ITodo, 'id' | 'checked'>>({name, description})

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const {value, name} = e.target

        setTodo({...todo, [name]: value})
    }

    const onClickEditTodo = (): void => {
        if (todo.name && todo.description) {
            onEditTodo(todo)
        }
    }

    return (
        <Paper elevation={3} sx={{maxWidth: '550px', width: '100%', padding: '23px', marginTop: '23px'}}>
            <Box sx={{display: 'flex', gap: '30px'}}>
                <Input type="text" value={todo.name} onChange={onChange} name="name" placeholder="Name" fullWidth/>
                <Input type="text" value={todo.description} onChange={onChange} name="description"
                       placeholder="Description" fullWidth/>
                <Button variant="outlined" fullWidth onClick={onClickEditTodo}>Edit Todo</Button>
            </Box>
        </Paper>
    )
}

export default EditPanel
