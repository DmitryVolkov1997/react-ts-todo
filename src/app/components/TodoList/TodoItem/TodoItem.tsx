import {Box, IconButton, Paper, Typography} from '@mui/material'
import {Delete as DeleteIcon, BorderColor as BorderColorIcon} from '@mui/icons-material'
import {FC} from 'react'
import {ITodo} from '../../../shared/interfaces/todo.interface'

interface TodoItemProps extends ITodo {
    onDeleteTodo: (todoId: ITodo['id']) => void
    toggleComplete: (todoId: ITodo['id']) => void
    onEditTodoId: (todoId: ITodo['id']) => void
}

export const TodoItem: FC<TodoItemProps> = ({
                                                id,
                                                name,
                                                description,
                                                checked,
                                                onDeleteTodo,
                                                toggleComplete,
                                                onEditTodoId
                                            }): JSX.Element => {

    return (
        <Paper elevation={3}
               sx={{padding: '23px', marginTop: '20px', maxWidth: '550px', width: "100%", opacity: checked ? .6 : 1}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                    <Typography variant="h5" gutterBottom sx={{
                        fontFamily: 'Lato', cursor: 'pointer',
                        textDecorationLine: checked ? 'line-through' : 'none'
                    }} onClick={() => toggleComplete(id)}>
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{fontFamily: 'Lato'}}>
                        {description}
                    </Typography>
                </Box>
                <Box>
                    <IconButton aria-label="delete" color={'error'} onClick={() => onDeleteTodo(id)}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label="edit" color={'primary'} onClick={() => onEditTodoId(id)}>
                        <BorderColorIcon/>
                    </IconButton>
                </Box>
            </Box>
        </Paper>
    )
}

