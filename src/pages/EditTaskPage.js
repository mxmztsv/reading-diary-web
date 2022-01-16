import React, {useEffect, useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import {getWritings} from "../controllers/EditTaskController";
import {useNavigate, useParams, Link} from "react-router-dom";
import Button from "@mui/material/Button";


// todo: select deadline

export const EditTaskPage = () => {

    const [selectedWriting, setSelectedWriting] = useState('')
    const [writingsList, setWritingsList] = useState([])

    useEffect(() => {
        setWritingsList(getWritings(1))
    })

    const changeWriting = (event) => {
        setSelectedWriting(event.target.value)
    }

    return (
        <div className="edit-task-page">
            <Container>
                <h1>Добавить задание</h1>
                <p className="discription">
                    Выбрать произведение из своего списка
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
                <p className="discription">
                    Либо <a href='/'>добавить в список выбора новое произведение</a>, если его еще нет
                </p>
                <Button variant="contained" >Добавить задание</Button>
            </Container>
        </div>
    )
}
