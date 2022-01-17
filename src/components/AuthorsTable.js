import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

export const AuthorsTable = ({ authors }) => {

    if (!authors.length) {
        return <p>Пусто</p>
    }

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Отчество</th>
                <th>Действие</th>
            </tr>
            </thead>

            <tbody>
            { authors.map((author, index) => {
                return (
                    <tr key={author.id}>
                        <td>{index + 1}</td>
                        <td>{author.surname}</td>
                        <td>{author.name}</td>
                        <td>{author.middleName}</td>
                        <td><a href={`edit-author/${author.id}`}>Изменить</a></td>
                    </tr>
                )
            }) }
            </tbody>
        </table>
    )
}
