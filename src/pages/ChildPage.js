import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Button from "@mui/material/Button";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import {getChildById} from "../controllers/ChildPageController";
import {TasksTable} from "../components/TasksTable";
import {ActualTasks} from "../components/ActualTasks";
import {CompletedTasks} from "../components/CompletedTasks";


export const ChildPage = () => {

    let params = useParams();

    const [child, setChild] = useState({
        name: '',
        surname: '',
        midname: '',
        id: ''
    })
    const [tab, setTab] = React.useState('1');

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    useEffect(() => {
        setChild(getChildById(params.id))
    }, [])


    return (
        <div className='child-page'>
            <Container>
            <div className="profile-header">
                <div className="name-column">
                    <div className="name-wrapper">
                        <span className='child-item_name'>{child.name}</span>
                        <span className='child-item_name'>{child.midname}</span>
                        <span className='child-item_name'>{child.surname}</span>
                    </div>
                    <span className='child-item_id'>{params.id}</span>
                </div>
                <Button variant="outlined" onClick={() => {

                }}>Отключить от себя</Button>
            </div>
            <TabContext value={tab}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Список литературы" value="1" />
                        <Tab label="Прочитанные" value="2" />
                        <Tab label="Дневники" value="3" />
                    </TabList>
                <TabPanel value="1">
                    <ActualTasks id={child.id}/>
                </TabPanel>
                <TabPanel value="2">
                    <CompletedTasks id={child.id}/>
                </TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
            </Container>
        </div>
    )
}
