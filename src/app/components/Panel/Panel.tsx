import {Box, Button, Input} from '@mui/material'
import {ChangeEvent, FC, useState} from 'react'
import {ITodo} from '../../shared/interfaces/todo.interface'

const DEFAULT_TODO = {name: '', description: ''}

interface PanelProps {
    onClickAddTodo: (todo: Omit<ITodo, 'id' | 'checked'>) => void
}

export const Panel: FC<PanelProps> = ({onClickAddTodo}) => {
    const [todo, setTodo] = useState<Omit<ITodo, 'id' | 'checked'>>(DEFAULT_TODO)

    const onClick = (): void => {
        if (todo.name && todo.description) {
            onClickAddTodo(todo)
            setTodo(DEFAULT_TODO)
        }
    }
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
        const {value, name} = e.target

        setTodo({...todo, [name]: value})
    }

    return (
        <Box sx={{display: 'flex', gap: '30px'}}>
            <Input type="text" name="name" placeholder="Name" fullWidth value={todo.name} onChange={onChangeInput}/>
            <Input type="text" name="description" placeholder="Description" fullWidth value={todo.description} onChange={onChangeInput}/>
            <Button variant="outlined" fullWidth onClick={onClick}>Add Todo</Button>
        </Box>
    )
}

