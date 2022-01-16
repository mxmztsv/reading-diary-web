import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {getTaskDetails} from "../controllers/TaskPageController";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {StatisticsTable} from "../components/StatisticsTable";
import Button from "@mui/material/Button";

export const TaskPage = () => {

    const [task, setTask] = useState({
        id: '',
        title: '',
        author: '',
        deadline: ''
    })
    const [statistics, setStatistics] = useState([])

    let params = useParams();

    useEffect(() => {
        const details = getTaskDetails(params.id)
        setTask({
            id: details.id,
            title: details.title,
            author: details.author,
            deadline: details.deadline
        })
        setStatistics(details.statistics)
    }, [])


    return (
        <div className="task-page">
            <Container>
            <div className="task-title-wrapper">
                <div className="name-column">
                    <h2 className="title">
                    {task.title}
                    </h2>
                    <p className="task-author">
                        {task.author}
                    </p>
                    <p className="task-deadline">
                        {task.deadline}
                    </p>
                </div>
                <Button variant="contained">Удалить</Button>
                {/*<Button variant="contained">Редактировать</Button>*/}
            </div>
                <div className="statistics-wrapper">
                    <h2>Статистика чтения</h2>
                    <StatisticsTable statistics={statistics}/>
                </div>
            </Container>
        </div>
    )
}
