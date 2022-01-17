import React, {useEffect, useState} from 'react'
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {WritingsTable} from "../components/WritingsTable";
import {useNavigate} from "react-router-dom";
import {getWritings} from "../controllers/EditTaskController";
import {getAuthorsList} from "../controllers/EditWritingController";
import {AuthorsTable} from "../components/AuthorsTable";

export const AuthorsPage = () => {
    const [authors, setAuthors] = useState([])

    let navigate = useNavigate();

    useEffect(() => {
        setAuthors(getAuthorsList())
    }, [])

    return (
        <div className="authors-page">
            <Container>
                <h1>Добавленные авторы</h1>
                <Button variant="contained" onClick={() => {navigate(`/edit-author`)}}>Добавить автора</Button>

                <AuthorsTable authors={authors}/>
            </Container>
        </div>
    )
}
