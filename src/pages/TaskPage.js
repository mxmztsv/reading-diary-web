import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
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
    const navigate = useNavigate()


    useEffect(async () => {
        const details = await getTaskDetails(params.id)
        setTask({
            id: details.id,
            title: details.name,
            author: details.author,
            deadline: details.deadline
        })
        setStatistics(details.sessions)
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
                        Дедлайн: {task.deadline}
                    </p>
                </div>

                <Button variant="outlined" onClick={() => navigate(`/child/${params.childId}/edit-task/${params.id}`)}>Редактировать</Button>
            </div>
                <div className="statistics-wrapper">
                    <h2>Статистика чтения</h2>
                    <StatisticsTable statistics={statistics}/>
                </div>
            </Container>
        </div>
    )
}
