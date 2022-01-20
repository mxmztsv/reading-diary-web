import {request} from "./HttpController";
import {getUserInfo} from "./AuthController";
import {BASE_URL} from "../config/api";
import axios from "axios";
import toast from "react-hot-toast";

export const getCompletedTasks = async (id) => {
    // request

    console.log('getCompletedTasks: id', id)

    const data = await request('/main/completed-tasks', {id})

    // const data = [
    //     {
    //         'id': '123',
    //         'title': 'Капитанская дочка',
    //         'author': 'А.С. Пушкин',
    //         'date': `${new Date()}`
    //     },
    //     {
    //         'id': '456',
    //         'title': 'Война и Мир',
    //         'author': 'Лев Толстой',
    //         'date': `${new Date()}`
    //     },
    //     {
    //         'id': '789',
    //         'title': 'Герой нашего времени',
    //         'author': 'М.Ю. Лермонтов',
    //         'date': `${new Date()}`
    //     },
    // ]
    const tasks = data.map(item => {
        item['selected'] = false
        return item
    })
    console.log(tasks)
    return tasks
    // return data
}

export const getSelectedTasks = (tasksList) => {
    return tasksList.filter(task => task.selected === true)
}

export const generateDiary = async (selectedTasksList, studentId) => {
    if (selectedTasksList.length) {
        console.log('Sending a request to a diary generator... ', studentId)
        const date = new Date()
        const name = `reading_diary_${date.getDay()}-${date.getMonth()}-${date.getFullYear()}_${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`

        const readingTasksId = selectedTasksList.map(item => {
            return item.id
        })
        console.log('Selected tasks is: ', readingTasksId)
        // request
        // const response = await request('/main/generate-diary', {studentId, name, readingTasksId})
        const body = JSON.stringify({studentId, name, readingTasksId})
        const headers = {}
        headers['Content-Type'] = 'application/json'
        const method = 'POST'
        // const response = await fetch(BASE_URL + '/main/generate-diary', { method, body, headers })
        // const response = await fetch(BASE_URL + '/main/diary', { method, headers })
        // console.log('response', response)

        const options = {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/pdf'
            }
        }
        axios.post(BASE_URL + '/main/generate-diary', body, options)
            .then((response) => {
                // console.log('response', response)
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${name}.pdf`);
                document.body.appendChild(link);
                link.click();
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.message)
            });
    }
}

export const generateButtonHandler = async (tasksList, id) => {
    await generateDiary(getSelectedTasks(tasksList), id)
}

// export const selectTask = (item) => {
//
// }
