export const getWriting = (id) => {
  // request
    const writing = {
        "id": '123',
        "parentId": 13,
        "author": {
            "id": 1,
            "name": "новый пушкин",
            "surname": "q",
            "middleName": "q"
        },
        "name": "Война и Мир"
    }

    return writing
}

export const getAuthorsList = () => {
  // request
    const authors = [
        {
            "id": 1,
            "name": "новый пушкин",
            "surname": "q",
            "middleName": "q"
        },
        {
            "id": 2,
            "name": "старый",
            "surname": "лвы",
            "middleName": null
        },
        {
            "id": 3,
            "name": "текущий",
            "surname": "цвы",
            "middleName": null
        }
    ]

    return authors

}
