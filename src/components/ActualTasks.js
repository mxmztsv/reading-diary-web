import React, {useState, useEffect} from "react";
import {TasksTable} from "./TasksTable";
import {getActualTasks} from "../controllers/ActualTasksController";
import Button from "@mui/material/Button";
import {useNavigate, useParams} from "react-router-dom";

export const ActualTasks = ( { id } ) => {

    const [tasks, setTasks] = useState([])

    let navigate = useNavigate();

    const params = useParams()

    useEffect(async () => {
        setTasks(await getActualTasks(params.id))
    }, [])

    return (
        <div className="tasks">
            <Button variant="contained" onClick={() => {
                navigate(`${window.location.pathname}/edit-task`)
            }}>Добавить задание</Button>
            <TasksTable tasks={tasks}/>
        </div>
    )
}
