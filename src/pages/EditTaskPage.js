import React, {useEffect, useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import {deleteTaskById, getTaskById, getWritings, submitHandler} from "../controllers/EditTaskController";
import {useNavigate, useParams, Link} from "react-router-dom";
import Button from "@mui/material/Button";
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

export const EditTaskPage = () => {

    const [selectedWriting, setSelectedWriting] = useState('')
    const [writingsList, setWritingsList] = useState([])
    const [deadline, setDeadline] = useState(new Date());
    const [id, setID] = useState(null)

    const params = useParams()

    useEffect(async () => {
        setWritingsList(await getWritings())
        if (params.id !== undefined) {
            const task = await getTaskById(params.id)
            setID(params.id)
            // todo: не отображается настоящий дедлайн
            // setDeadline(task.deadline)
            setSelectedWriting(task.writing.id)
        }
    }, [])

    const changeWriting = (event) => {
        setSelectedWriting(event.target.value)
    }

    return (
        <div className="edit-task-page">
            <Container>
                <h1>Сохранить задание</h1>
                <p className="description">
                    Выбрать произведение из своего списка:
                </p>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Произведение</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        value={selectedWriting}
                        label="Произведение"
                        onChange={changeWriting}
                    >
                        {writingsList.map(writing => <MenuItem
                            value={writing.id}>{writing.name} - {writing.author.name} {writing.author.middleName} {writing.author.surname}</MenuItem>)}
                    </Select>
                </FormControl>
                <p className="description">
                    Либо <a href='/writings'>добавить в список выбора новое произведение</a>, если его еще нет
                </p>
                <p className="description">
                    Дата, к которой необходимо прочитать произведение:
                </p>
                <DatePicker selected={deadline} onChange={(date) => setDeadline(date)} />

                <Button variant="contained" onClick={async () => { await submitHandler(id, params.childId, selectedWriting, deadline)}}>Сохранить</Button>
                {params.id !== undefined ? (
                    <Button variant="outlined" onClick={async () => await deleteTaskById(id)}>Удалить</Button>
                ) : (<></>)}
            </Container>
        </div>
    )
}
