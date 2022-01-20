import React, {useState, useEffect} from "react";
import {getChildren} from "../controllers/ChildrenPageController";
import {ChildItem} from "../components/ChildItem";
import { useParams, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {getUserInfo} from "../controllers/AuthController";
import {Divider} from "@mui/material";
import toast from "react-hot-toast";



export const ChildrenPage = () => {

    const [children, setChildren] = useState([])

    useEffect(async () => {
        setChildren(await getChildren())
    }, [])

    let navigate = useNavigate();

    return (
        <div className="children-page">
            <Container>
                <h1>{getUserInfo().name + ' ' + getUserInfo().middleName + ' ' + getUserInfo().surname + ' ID#' + getUserInfo().id}</h1>
                <Divider />
                <h2>Список детей</h2>
                {children.map(child => <ChildItem
                    name={child.name}
                    surname={child.surname}
                    midname={child.middleName}
                    id={child.id}
                    onClick={() => {
                        navigate(`/child/${child.id}`)
                    }}
                />)}
            </Container>
        </div>
    )
}
