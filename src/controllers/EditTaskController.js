import {request} from "./HttpController";
import {getUserInfo} from "./AuthController";

export const getWritings = async () => {

    console.log('getting writings...')
  // request
    const writings = await request('/parent/writings', {id: getUserInfo().id})

    // const writings = [
    //     {
    //         "id": 2,
    //         "name": "Тихий Дон",
    //         "author": {
    //             "id": 2,
    //             "name": "Михаил",
    //             "surname": "Шолохов",
    //             "middleName": null
    //         }
    //     },
    //     {
    //         "id": 4,
    //         "name": "Капитанская дочка",
    //         "author": {
    //             "id": 3,
    //             "name": "Александр",
    //             "surname": "Пушкин",
    //             "middleName": "Сергеевич"
    //         }
    //     },
    //     {
    //         "id": 1,
    //         "name": "первый",
    //         "author": {
    //             "id": 1,
    //             "name": "новый пушкин",
    //             "surname": "q",
    //             "middleName": "q"
    //         }
    //     }
    // ]

    return writings
}

export const getTaskById = async (id) => {

    console.log('getTaskById: id', id)

    //request
    const task = await request('/main/reading-task-details', {id})
    // const task = {
    //     writing: {
    //         "id": 2,
    //         "name": "Тихий Дон",
    //         author: {
    //             "id": 3,
    //             "name": "Михаил",
    //             "surname": "Шолохов",
    //             "middleName": null
    //         }
    //     },
    //     completed: false,
    //     deadline: 'deadline'
    // }

    return task

}

export const submitHandler = async (id=null, studentId, writingId, deadline) => {
    // request
    console.log('Добавление задания: ', studentId + ' ' + writingId + ' ' + deadline)

    await request('/parent/save-task', {id, parentId: getUserInfo().id, studentId, writingId, deadline, completed: false}, 'POST')
    window.location.href = `/child/${studentId}`
}

export const deleteTaskById = async (id) => {
    await request('/parent/delete-task', {id}, 'POST')
    window.location.href = `/`
}
