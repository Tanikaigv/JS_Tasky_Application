const state = {
    taskList : [],
};

//DOM operations
const taskContents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__Modal__body");

//Dynamic operations
const htmlTaskContent = ({id,url,title,type,description}) => `
    <div class = 'col-md-6 col-lg-4 mt-3' id = ${id}>
        <div class = 'card shadow-sm task__card'>
            <div class = 'card-header d-flex justify-content-end task__card__header'>
                <button type='button'class='btn btn-outline-primary' name=${id}>
                    <i class='fas fa-pencil-alt'>
                </button>
                <button type='button'class='btn btn-outline-danger' name=${id}>
                    <i class='fas fa-trash-alt'>
                </button>
            </div>
            <div class='card-body'>
                ${
                    url &&
                    `<img width='100%' src=${url} alt='Card Image' class='card-img-top md-3 rounded'/>`
                }
                <h4 class='card-title task__card__title'>${title}</h4>
                <p class='description trim-3-lines text-muted'>${description}</p>
                <div class='tags text-white d-flex flex-wrap'>
                    <span class='badge bg-primary m-1'>${type}</span>
                </div>
            </div>
            <div class='card-footer'>
                <button type='button' class='btn btn-outline-primary float-right' data-bs-toggle="modal" data-bs-target="#showTask">Open Task Modal</button>
            </div>
        </div>
    </div>
`;

//Modal Body on click of Open Task
const htmlModalContent = ({id,url,title,type,description}) => {
    const date = new Date(parseInt(id));
    return `
    <div id=${id}>
        ${
            url &&
            `<img width='100%' src=${url} alt='Card Image' class='img-fluid place__holder__image mb-3'>`
        }
        <strong class='text-muted text-sm'>Created on ${date.toDateString()}</strong>
        <h2 class='my-3'>${title}</h2>
        <p class='text-muted'>${description}</p>
    `
}

const updateLocalStorage = () => {
    localStorage.setItem(
        'task',
        JSON.stringify(
            {
                tasks: state.taskList,
            }
        )
    );
};