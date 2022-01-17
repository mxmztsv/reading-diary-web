export const getAuthorById = (id) => {
    // request
    const author = {
        "id": 1,
        "name": "новый пушкин",
        "surname": "q",
        "middleName": "q"
    }

    return author
}

export const saveAuthor = (id, name, surname, middleName) => {
  // request
    console.log('Saving author: ', `${id} - ${surname} ${name} ${middleName}`)
}
