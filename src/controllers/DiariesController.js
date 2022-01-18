import {request} from "./HttpController";
import {BASE_URL} from "../config/api";
import { saveAs } from 'file-saver';


export const getDiariesByStudentId = async (id) => {

    const diariesList = await request('/main/diaries', {id})

    return diariesList

}

export const getDiaryById = async (id) => {

    // const response = await request('/main/diary', {id})
    // const file = new Blob([blob]);
    //
    // saveAs(file, 'fileName');

    const body = JSON.stringify({id})
    const headers = {}
    headers['Content-Type'] = 'application/pdf'
    const method = 'POST'
    const response = await fetch(BASE_URL + '/main/diary', { method, body, headers })
    // response.download()
    // const response = await fetch(BASE_URL + '/main/diary', { method, headers })
    console.log('response', response)

}
