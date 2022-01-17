import React, {useEffect, useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import {getWritings, submitHandler} from "../controllers/EditTaskController";
import {useNavigate, useParams, Link} from "react-router-dom";
import Button from "@mui/material/Button";
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

export const EditTaskPage = () => {

    const [selectedWriting, setSelectedWriting] = useState('')
    const [writingsList, setWritingsList] = useState([])
    const [deadline, setDeadline] = useState(new Date());

    useEffect(() => {
        setWritingsList(getWritings(1))
    }, [])

    const changeWriting = (event) => {
        setSelectedWriting(event.target.value)
    }

    return (
        <div className="edit-task-page">
            <Container>
                <h1>Добавить задание</h1>
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

                <Button variant="contained" onClick={() => {submitHandler(selectedWriting, deadline)}}>Добавить задание</Button>
            </Container>
        </div>
    )
}
