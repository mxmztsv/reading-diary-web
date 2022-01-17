import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

export const TasksTable = ({ tasks }) => {

    // useEffect(() => {
    //     console.log('tasks', tasks)
    // }, [])
    let navigate = useNavigate();


    if (!tasks.length) {
        return <p>Пусто</p>
    }

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Название</th>
                <th>Автор</th>
                <th>Дедлайн</th>
                <th>Действие</th>
            </tr>
            </thead>

            <tbody>
            { tasks.map((task, index) => {
                return (
                    <tr key={task.id} onClick={() => {
                        navigate(`${window.location.pathname}/task/${task.id}`)
                    }}>
                        <td>{index + 1}</td>
                        <td>{task.name}</td>
                        <td>{task.author}</td>
                        <td>{task.deadline}</td>
                        <td><a href={`${window.location.pathname}/edit-task/${task.id}`}>Изменить</a></td>
                    </tr>
                )
            }) }
            </tbody>
        </table>
    )
}
