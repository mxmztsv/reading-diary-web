import React, {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import {useParams} from "react-router-dom";
import {deleteWritingById, getAuthorsList, getWriting, saveWriting} from "../controllers/EditWritingController";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {deleteTaskById, submitHandler} from "../controllers/EditTaskController";


export const EditWritingPage = () => {

    const [name, setName] = useState('')
    const [authorId, setAuthorId] = useState('')
    const [selectedAuthor, setSelectedAuthor] = useState('')
    const [authorsList, setAuthorsList] = useState([])
    const [id, setId] = useState(null)

    const params = useParams()

    useEffect(async () => {
        if (params.id !== undefined) {
            setId(params.id)
            const writing = await getWriting(params.id)
            setName(writing.name)
            setAuthorId(writing.author.id)
            setSelectedAuthor(writing.author.id)
        }
        setAuthorsList(await getAuthorsList())
    }, [])

    return (
        <div className="edit-writing-page">
            <Container>
                <h1>Сохранить произведение</h1>
                <div className="input-field">
                    <TextField label="Введите название" fullWidth variant="outlined" placeholder="Название"
                               type="text" name="title" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </div>
                <p className="description">
                    Выбрать автора из своего списка:
                </p>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Автор</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        value={selectedAuthor}
                        label="Автор"
                        onChange={(e) => {
                            setSelectedAuthor(e.target.value)
                        }}
                    >
                        {authorsList.map(author => <MenuItem
                            value={author.id}>{author.name} {author.middleName} {author.surname}</MenuItem>)}
                    </Select>
                </FormControl>
                <p className="description">
                    Либо <a href='/authors'>добавить в список выбора нового автора</a>, если его еще нет
                </p>
                <Button variant="contained" onClick={async () => await saveWriting(id, selectedAuthor, name)}>сохранить</Button>
                {params.id !== undefined ? (
                    <Button variant="outlined" onClick={async () => await deleteWritingById(id)}>Удалить</Button>
                ) : (<></>)}
            </Container>
        </div>
    )
}
