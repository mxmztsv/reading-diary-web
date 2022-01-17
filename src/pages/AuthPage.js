import React, {useState} from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import {signIn} from "../controllers/AuthController";



export const AuthPage = () => {
    const [form, setForm] = useState({
        login: '',
        pass: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <div className='auth-page'>
            <Card>
                <CardContent>
                    <h1>Вход</h1>
                    <div>

                        <div className="input-field">
                            <TextField label="Логин" fullWidth variant="outlined" placeholder="Введите логин" id="login"
                                       type="text" name="login" value={form.login} onChange={changeHandler}/>
                        </div>

                        <div className="input-field">
                            <TextField label="Пароль" fullWidth variant="outlined" placeholder="Введите пароль"
                                       id="pass" type="password" name="pass" value={form.pass}
                                       onChange={changeHandler}/>
                        </div>

                    </div>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={() => signIn(form.login, form.pass)}>Войти</Button>
                        <Link to="/signup"><Button variant="outlined">Зарегистрироваться</Button></Link>

                    </Stack>
                </CardContent>
            </Card>
        </div>
    )
}
