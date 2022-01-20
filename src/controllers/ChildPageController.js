import {request} from "./HttpController";
import {getUserInfo} from "./AuthController";
import {toast} from "react-hot-toast";

export const getChildById = async (id) => {
    // request

    const child = await request('/parent/child', {id})
    // const child = {
    //     name: 'Максим',
    //     surname: 'Зайцев',
    //     midname: 'Олегович',
    //     id: '284701'
    // }

    return child
}

export const disconnectChild = async(childId) => {
    try {
        await request('/account/disconnect', {
            parentId: getUserInfo().id,
            studentId: childId
        }, 'POST')
        window.location.href = '/'
        toast('Изменения сохранены')
    } catch (e) {
        toast.error(e.message)
    }

}
