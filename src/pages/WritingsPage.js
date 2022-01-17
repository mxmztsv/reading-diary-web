import React, {useEffect, useState} from "react";
import Container from '@mui/material/Container';
import {getWritings} from "../controllers/EditTaskController";
import {WritingsTable} from "../components/WritingsTable";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";


export const WritingsPage = () => {

    const [writings, setWritings] = useState([])

    let navigate = useNavigate();

    useEffect(() => {
        setWritings(getWritings(1))
    }, [])


    return (
        <div className="writings-page">
            <Container>
                <h1>Добавленные произведения</h1>
                <Button variant="contained" onClick={() => {navigate(`/edit-writing`)}}>Добавить произведение</Button>

                <WritingsTable writings={writings}/>

            </Container>
        </div>
    )
}
