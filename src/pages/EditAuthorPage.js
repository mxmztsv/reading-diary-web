import React, {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import {useParams} from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {getAuthorById, saveAuthor} from "../controllers/EditAuthorController";


export const EditAuthorPage = () => {

    const [surname, setSurame] = useState('')
    const [name, setName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [id, setId] = useState(null)

    const params = useParams()

    useEffect(() => {
        if (params.id !== undefined) {
            setId(params.id)
            const author = getAuthorById(id)
            setName(author.name)
            setSurame(author.surname)
            setMiddleName(author.middleName)
        }
    }, [])

    return (
        <div className="edit-author-page">
            <Container>
                <h1>Сохранить автора</h1>

                <div className="input-field">
                    <TextField label="Введите фамилию" fullWidth variant="outlined" placeholder="Фамилия"
                               type="text" name="surname" value={surname} onChange={(e) => {setSurame(e.target.value)}}/>
                </div>

                <div className="input-field">
                    <TextField label="Введите имя" fullWidth variant="outlined" placeholder="Имя"
                               type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </div>

                <div className="input-field">
                    <TextField label="Введите отчество" fullWidth variant="outlined" placeholder="Отчество"
                               type="text" name="midname" value={middleName} onChange={(e) => {setMiddleName(e.target.value)}}/>
                </div>

                <Button variant="contained" onClick={() => {saveAuthor(id, name, surname, middleName)}}>сохранить</Button>
            </Container>
        </div>
    )
}
