import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';


export const CompletedTasksTable = ({ tasks }) => {

    // useEffect(() => {
    //     console.log('tasks', tasks)
    // }, [])

    if (!tasks.length) {
        return <p>Пусто</p>
    }

    const selectHandler = (task) => {

    }

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Название</th>
                <th>Автор</th>
                <th>Дедлайн</th>
                <th>Выбрать</th>
            </tr>
            </thead>

            <tbody>
            { tasks.map((task, index) => {
                return (
                    <tr key={task.id}>
                        <td>{index + 1}</td>
                        <td>{task.name}</td>
                        <td>{task.author}</td>
                        <td>{task.deadline}</td>
                        <td>
                            <Checkbox onChange={() => {
                                task.selected = !task.selected
                            }}/>
                        </td>
                    </tr>
                )
            }) }
            </tbody>
        </table>
    )
}
