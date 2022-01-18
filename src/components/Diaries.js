import React, {useState, useEffect} from "react";
import Button from "@mui/material/Button";
import {useNavigate, useParams} from "react-router-dom";
import {DiariesTable} from "./DiariesTable";
import {getDiariesByStudentId, getDiaryById} from "../controllers/DiariesController";

export const Diaries = ( { id } ) => {

    const [diaries, setDiaries] = useState([])

    let navigate = useNavigate();

    const params = useParams()

    useEffect(async () => {
        setDiaries(await getDiariesByStudentId(params.id))
    }, [])

    return (
        <div className="tasks">
            <DiariesTable diaries={diaries}/>
        </div>
    )
}
