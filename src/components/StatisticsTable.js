import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

export const StatisticsTable = ({ statistics }) => {

    if (!statistics.length) {
        return <p>Пусто</p>
    }

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Дата</th>
                <th>Начало</th>
                <th>Конец</th>
                <th>Продолжительность</th>
            </tr>
            </thead>

            <tbody>
            { statistics.map((statistic, index) => {
                return (
                    <tr key={statistic.id} >
                        <td>{index + 1}</td>
                        <td>{statistic.date}</td>
                        <td>{statistic.startTime}</td>
                        <td>{statistic.endTime}</td>
                        <td>{statistic.duration}</td>
                    </tr>
                )
            }) }
            </tbody>
        </table>
    )
}
