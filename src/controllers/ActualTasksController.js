export const getActualTasks = (id) => {
    // request
    const tasks = [
        {
            'id': '123',
            'title': 'Капитанская дочка',
            'author': 'А.С. Пушкин',
            'deadline': new Date()
        },
        {
            'id': '456',
            'title': 'Война и Мир',
            'author': 'Лев Толстой',
            'deadline': new Date()
        },
        {
            'id': '789',
            'title': 'Герой нашего времени',
            'author': 'М.Ю. Лермонтов',
            'deadline': new Date()
        },

    ]

    return tasks

}
