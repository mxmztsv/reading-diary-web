import {request} from "./HttpController";
import {getUserInfo} from "./AuthController";
import toast from "react-hot-toast";

export const getWriting = async (id) => {
  // request

    const writing = await request('/main/writing', {id})

    // const writing = {
    //     "id": '123',
    //     "parentId": 13,
    //     "author": {
    //         "id": 1,
    //         "name": "новый пушкин",
    //         "surname": "q",
    //         "middleName": "q"
    //     },
    //     "name": "Война и Мир"
    // }

    return writing
}

export const getAuthorsList = async () => {
  // request
    const authors = await request('/parent/authors', {id: getUserInfo().id})
    // const authors = [
    //     {
    //         "id": 1,
    //         "name": "новый пушкин",
    //         "surname": "q",
    //         "middleName": "q"
    //     },
    //     {
    //         "id": 2,
    //         "name": "старый",
    //         "surname": "лвы",
    //         "middleName": null
    //     },
    //     {
    //         "id": 3,
    //         "name": "текущий",
    //         "surname": "цвы",
    //         "middleName": null
    //     }
    // ]

    return authors

}

export const saveWriting = async (id=null, authorId, name) => {
    try {
        await request('/parent/save-writing', {id, parentId: getUserInfo().id, authorId, name}, 'POST')
        window.location.href = '/writings'
    } catch (e) {
        toast(e.message);
    }
}

export const deleteWritingById = async (id) => {
  // request
    await request('/parent/delete-writing', {id}, 'POST')
    window.location.href = '/writings'
}
