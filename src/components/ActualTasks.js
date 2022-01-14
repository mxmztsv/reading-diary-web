import React, {useState, useEffect} from "react";
import {TasksTable} from "./TasksTable";
import {getActualTasks} from "../controllers/ActualTasksController";

export const ActualTasks = ( { id } ) => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(getActualTasks(id))
    }, [])

    return (
        <div className="tasks">
            {/*<TasksTable tasks={tasks}/>*/}
        </div>
    )
}
