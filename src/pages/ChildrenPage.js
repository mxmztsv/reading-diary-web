import React, {useState, useEffect} from "react";
import {getChildren} from "../controllers/ChildrenPageController";
import {ChildItem} from "../components/ChildItem";
import { useParams, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';



export const ChildrenPage = () => {

    const [children, setChildren] = useState([])

    useEffect(async () => {
        setChildren(await getChildren())
    }, [])

    let navigate = useNavigate();

    return (
        <div className="children-page">
            <Container>
            <h1>Список детей</h1>
            { children.map(child => <ChildItem
                name={child.name}
                surname={child.surname}
                midname={child.middleName}
                id={child.id}
                onClick={() => {
                    navigate(`/child/${child.id}`)
                }}
            />) }
            </Container>
        </div>
    )
}
