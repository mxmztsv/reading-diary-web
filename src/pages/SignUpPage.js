import React, {useState} from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {signUp} from "../controllers/AuthController";


export const SignUpPage = () => {
    const [form, setForm] = useState({
        name: '',
        surname: '',
        midname: '',
        email: '',
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
                    <h1>Регистрация</h1>
                    <div>

                        <div className="input-field">
                            <TextField label="Имя" fullWidth variant="outlined" placeholder="Введите имя" id="name"
                                       type="text" name="name" value={form.name} onChange={changeHandler}/>
                        </div>

                        <div className="input-field">
                            <TextField label="Фамилия" fullWidth variant="outlined" placeholder="Введите фамилию"
                                       id="surname"
                                       type="text" name="surname" value={form.surname} onChange={changeHandler}/>
                        </div>

                        <div className="input-field">
                            <TextField label="Отчество" fullWidth variant="outlined" placeholder="Введите отчество"
                                       id="midname"
                                       type="text" name="midname" value={form.midname} onChange={changeHandler}/>
                        </div>

                        <div className="input-field">
                            <TextField label="E-mail" fullWidth variant="outlined" placeholder="Введите e-mail"
                                       id="email"
                                       type="text" name="email" value={form.email} onChange={changeHandler}/>
                        </div>

                        <div className="input-field">
                            <TextField label="Логин" fullWidth variant="outlined" placeholder="Придумайте логин"
                                       id="login"
                                       type="text" name="login" value={form.login} onChange={changeHandler}/>
                        </div>

                        <div className="input-field">
                            <TextField label="Пароль" fullWidth variant="outlined" placeholder="Придумайте пароль"
                                       id="pass" type="password" name="pass" value={form.pass}
                                       onChange={changeHandler}/>
                        </div>

                    </div>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained"
                                onClick={() => signUp(form.login, form.pass, form.name, form.surname, form.midname, form.email)}>Зарегистрироваться</Button>
                    </Stack>
                </CardContent>
            </Card>
        </div>
    )
}
