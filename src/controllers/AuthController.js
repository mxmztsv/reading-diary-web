import React, {useContext, useEffect, useState} from "react";
import {request} from "./HttpController";

const storageName = 'userData'

export const signUp = async (login, password, name, surname, middleName, email) => {
    const response = await request('/account/sign-up', {login, password, name, surname, middleName, email, roleName: "parent"}, 'POST')
    // const response = {
    //     "id": 14,
    //     "name": "Олег",
    //     "surname": "Зайцев",
    //     "middleName": "Олегович",
    //     "email": "6@gmail.com",
    //     "role": "parent"
    // }

    localStorage.setItem(storageName, JSON.stringify({...response}))
    window.location.href = '/'
    return response
}

export const signIn = async (login, password) => {
    const response = await request('/account/sign-in', {login, password})
    console.log('response', response)

    // const response = {
    //     "id": 14,
    //     "name": "Олег",
    //     "surname": "Зайцев",
    //     "middleName": "Олегович",
    //     "email": "6@gmail.com",
    //     "role": "parent"
    // }
    localStorage.setItem(storageName, JSON.stringify({...response}))
    window.location.href = '/'

    return response
}

export const signOut = () => {
    //request

    console.log('Выход')
    localStorage.removeItem(storageName)
    window.location.href = '/'

    getUserInfo()

}

export const getUserInfo = () => {
    const userInfo = JSON.parse(localStorage.getItem(storageName))
    console.log(userInfo, userInfo)
    if (userInfo) return userInfo
    return {
        token: null,
        name: null,
        surname: null,
        middleName: null,
        userId: null,
    }
}
