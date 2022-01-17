import {request} from "./HttpController";
import {getUserInfo} from "./AuthController";

export const getChildren = async () => {
    console.log('info', getUserInfo())
    // request
    const children = await request('/parent/children', {id: getUserInfo().id})
    // const children = request('/parent/children', {id: '5'})

    console.log('children', children)

    // const children = [
    //     {
    //         name: 'Максим',
    //         surname: 'Зайцев',
    //         midname: 'Олегович',
    //         id: '284701'
    //     }
    // ]

    return children
}
