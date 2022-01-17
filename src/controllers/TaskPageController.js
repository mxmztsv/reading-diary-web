import {request} from "./HttpController";

export const getTaskDetails = async (id) => {
    // request

    const details = await request('/main/reading-task-sessions', {id})

    console.log('task details', details)

    // const details = {
    //     'id': '123',
    //     'title': 'Капитанская дочка',
    //     'author': 'А.С. Пушкин',
    //     'deadline': 'deadline',
    //     'statistics': [
    //         {
    //             'id': '654',
    //             'date': '23.01.2022',
    //             'startTime': '12:17',
    //             'endTime': '12:47',
    //             'duration': '30 мин'
    //         },
    //         {
    //             'id': '321',
    //             'date': '22.01.2022',
    //             'startTime': '12:17',
    //             'endTime': '12:47',
    //             'duration': '30 мин'
    //         }
    //     ]
    // }

    return details
}
