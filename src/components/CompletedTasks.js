import React, {useEffect, useState} from "react";
import {generateButtonHandler, getCompletedTasks} from "../controllers/CompletedTasksController";
import {CompletedTasksTable} from "./CompletedTasksTable";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import {useParams} from "react-router-dom";

export const CompletedTasks = ({id}) => {

    const [tasks, setTasks] = useState([])

    const params = useParams()

    useEffect(async () => {
        setTasks(await getCompletedTasks(params.id))
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
                        <Button variant="contained" onClick={async () => {
                            await generateButtonHandler(tasks)
                        }}>Сформировать дневник</Button>
                    </Grid>
                </Grid>
            </div>
            <CompletedTasksTable tasks={tasks}/>
        </div>
    )
}
