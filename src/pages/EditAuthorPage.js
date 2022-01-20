import React, {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import {useParams} from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {deleteAuthorById, getAuthorById, saveAuthor} from "../controllers/EditAuthorController";
import Stack from "@mui/material/Stack";


export const EditAuthorPage = () => {

    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [id, setId] = useState(null)

    const params = useParams()

    useEffect(async () => {
        if (params.id !== undefined) {
            setId(params.id)
            const author = await getAuthorById(params.id)
            setName(author.name)
            setSurname(author.surname)
            setMiddleName(author.middleName)
        }
    }, [])

    return (
        <div className="edit-author-page">
            <Container>
                <h1>Сохранить автора</h1>

                <div className="input-field">
                    <TextField label="Введите фамилию" fullWidth variant="outlined" placeholder="Фамилия"
                               type="text" name="surname" value={surname} onChange={(e) => {
                        setSurname(e.target.value)
                    }}/>
                </div>

                <div className="input-field">
                    <TextField label="Введите имя" fullWidth variant="outlined" placeholder="Имя"
                               type="text" name="name" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                </div>

                <div className="input-field">
                    <TextField label="Введите отчество" fullWidth variant="outlined" placeholder="Отчество"
                               type="text" name="midname" value={middleName} onChange={(e) => {
                        setMiddleName(e.target.value)
                    }}/>
                </div>

                <div className="row">
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={async () => {
                            await saveAuthor(id, name, surname, middleName)
                        }}>сохранить</Button>
                        {params.id !== undefined ? (
                            <Button variant="outlined" onClick={async () => {
                                await deleteAuthorById(id)
                            }}>Удалить</Button>
                        ) : (<></>)}
                    </Stack>
                </div>
            </Container>
        </div>
    )
}
