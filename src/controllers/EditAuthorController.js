import {request} from "./HttpController";
import {getUserInfo} from "./AuthController";

export const getAuthorById = async (id) => {
    // request

    const author = await request('/main/author', {id})

    console.log('author', author)

    // const author = {
    //     "id": 1,
    //     "name": "новый пушкин",
    //     "surname": "q",
    //     "middleName": "q"
    // }

    return author
}

export const saveAuthor = async (id=null, name, surname, middleName) => {
  // request
    await request('/parent/save-author', {id, name, surname, middleName, parentId: getUserInfo().id}, 'POST')
    console.log('Saving author: ', `${id} - ${surname} ${name} ${middleName}`)
    window.location.href = '/authors'

}

export const deleteAuthorById = async (id) => {
  await request('/parent/delete-author', {id}, "POST")
    window.location.href = '/authors'

}
