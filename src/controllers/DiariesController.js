import {request} from "./HttpController";
import {BASE_URL} from "../config/api";
import { saveAs } from 'file-saver';
import axios from "axios";


export const getDiariesByStudentId = async (id) => {

    const diariesList = await request('/main/diaries', {id})

    return diariesList

}

export const getDiaryById = async (id, title) => {

    // const response = await request('/main/diary', {id})
    // const file = new Blob([blob]);
    //
    // saveAs(file, 'fileName');

    const body = JSON.stringify({id})

    const options = {
        responseType: 'arraybuffer',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/pdf'
        }
    }
    axios.post(BASE_URL + '/main/diary', body, options)
        .then((response) => {
            // console.log('response', response)
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${title}.pdf`);
            document.body.appendChild(link);
            link.click();
        })
        .catch((error) => console.log(error));



    // const headers = {}
    // headers['Content-Type'] = 'application/json'
    // const method = 'POST'
    // const response = await fetch(BASE_URL + '/main/diary', { method, body, headers })
    //
    // console.log('response', response.data)

}
