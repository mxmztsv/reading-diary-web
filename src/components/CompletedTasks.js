import React, {useEffect, useState} from "react";
import {generateButtonHandler, getCompletedTasks} from "../controllers/CompletedTasksController";
import {CompletedTasksTable} from "./CompletedTasksTable";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";

export const CompletedTasks = ({id}) => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(getCompletedTasks(id))
    }, [])

    return (
        <div className="tasks">
            <div className="child-tab-title">
                <Grid container>
                    <Grid item sm={8} xs={12}>
                        <p className="description">
                            Здесь находятся произведение, прочтение которых завершено.
                        </p>
                        <p className="description">Вы можете выбрать нужные
                            произведения для
                            автоматического формирования дневника.
                        </p>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Button variant="contained" onClick={() => {
                            generateButtonHandler(tasks)
                        }}>Сформировать дневник</Button>
                    </Grid>
                </Grid>
            </div>
            <CompletedTasksTable tasks={tasks}/>
        </div>
    )
}
