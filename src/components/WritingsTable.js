import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

export const WritingsTable = ({ writings }) => {

    if (!writings.length) {
        return <p>Пусто</p>
    }

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Название</th>
                <th>Автор</th>
                <th>Действие</th>
            </tr>
            </thead>

            <tbody>
            { writings.map((writing, index) => {
                return (
                    <tr key={writing.id}>
                        <td>{index + 1}</td>
                        <td>{writing.name}</td>
                        <td>{writing.author.surname} {writing.author.name} {writing.author.middleName}</td>
                        <td><a href={`edit-writing/${writing.id}`}>Изменить</a></td>
                    </tr>
                )
            }) }
            </tbody>
        </table>
    )
}
