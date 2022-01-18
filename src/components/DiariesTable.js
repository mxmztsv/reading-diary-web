import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {getDiaryById} from "../controllers/DiariesController";

export const DiariesTable = ({ diaries }) => {

    // useEffect(() => {
    //     console.log('tasks', tasks)
    // }, [])
    let navigate = useNavigate();


    if (!diaries.length) {
        return <p>Пусто</p>
    }

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Название</th>
                <th>Дата</th>
            </tr>
            </thead>

            <tbody>
            { diaries.map((diary, index) => {
                return (
                    <tr key={diary.id} onClick={async () => {
                        await getDiaryById(diary.id)
                    }}>
                        <td>{index + 1}</td>
                        <td>{diary.name}</td>
                        <td>{diary.creationDate}</td>
                    </tr>
                )
            }) }
            </tbody>
        </table>
    )
}
