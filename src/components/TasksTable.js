import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'



export const TasksTable = ({ tasks }) => {

    // todo: не отображается

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
            </tr>
            </thead>

            <tbody>
            { tasks.map((task, index) => {
                return (
                    <tr key={task.id}>
                        <td>{index + 1}</td>
                        <td>{task.title}</td>
                        <td>{task.author}</td>
                        <td>{task.deadline}</td>
                    </tr>
                )
            }) }
            </tbody>
        </table>
    )
}
