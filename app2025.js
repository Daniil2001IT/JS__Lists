


const title = document.getElementById('title')
const create = document.getElementById('create')
const list = document.getElementById('list')



function createHTML(massive, index) {
    return `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="${massive.completed ? 'text-uppercase' : 'text-lowercase'}">${massive.title}</span>
                <span>
                    <span class="btn btn-small btn-${massive.completed ? 'success' : 'danger'}" data-index="${index}" data-type='togle'>&check;</span>
                    <span class="btn btn-small btn-danger" data-index="${index}" data-type='remove'>&times;</span>
                </span>
            </li>
        `

}


list.onclick = function (event) {
    if (event.target.dataset.index) {
        let index = Number(event.target.dataset.index)
        let type = event.target.dataset.type

        if (type === 'togle') {
            massive[index].completed = !massive[index].completed
        } else if (type === 'remove') {
            massive.splice(index, 1)
        }
        render()
    }
}


create.onclick = function () {
    if (title.value.length === 0) {
        return
    }
    const pepPep =
    {
        title: title.value,
        completed: false,
    }
    massive.push(pepPep)
    list.insertAdjacentHTML('beforeend', createHTML(pepPep))

    title.value = ''
    render()
}



const massive = [
    {
        title: 'Привет',
        completed: true,
    },

    {
        title: 'Пока',
        completed: false,
    },

    {
        title: 'Как дела?',
        completed: true,
    }
]


function render() {
    list.textContent = ''
    if (massive.length === 0) {
        list.textContent = 'Отсутсвуют Элементы'
    }

    for (let i = 0; i < massive.length; i++) {
        list.insertAdjacentHTML('beforeend', createHTML(massive[i], i))
    }


}
render()










































