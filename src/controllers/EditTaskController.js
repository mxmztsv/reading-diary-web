export const getWritings = (id) => {

    console.log('getting writings...')

  // request
    const writings = [
        {
            "id": 2,
            "name": "Тихий Дон",
            "author": {
                "id": 2,
                "name": "Михаил",
                "surname": "Шолохов",
                "middleName": null
            }
        },
        {
            "id": 4,
            "name": "Капитанская дочка",
            "author": {
                "id": 3,
                "name": "Александр",
                "surname": "Пушкин",
                "middleName": "Сергеевич"
            }
        },
        {
            "id": 1,
            "name": "первый",
            "author": {
                "id": 1,
                "name": "новый пушкин",
                "surname": "q",
                "middleName": "q"
            }
        }
    ]

    return writings
}

export const submitHandler = (writingId, deadline) => {
    // request
    console.log('Добавление задания: ', writingId + ' ' + deadline)
}
