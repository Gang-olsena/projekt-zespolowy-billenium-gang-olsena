class ApiService {
    constructor(axios = undefined) {
        this.axios = axios;
    }
    getChart() {
        return this.axios.get(`/chart/`).then(response => response.data);
    }
    getBoards() {
        return this.axios.get(`/board/`).then(response => response.data);
    }

    newBoard(name) {
        return this.axios.post(`/board/`, {"name": name}).then(response => response.data);
    }

    newRow(name) {
        return this.axios.post(`/row/`, {"name": name}).then(response => response.data);
    }

    updateBoard(pk, data) {
        return this.axios.post(`/board/${pk}/`, data).then(response => response.data);
    }

    updateRow(pk, data) {
        return this.axios.post(`/row/${pk}/`, data).then(response => response.data);
    }

    moveBoard(pk, index) {
        return this.axios.post(`/board/${pk}/move/`, {"index": index}).then(response => response.data);
    }

    removeBoard(taskId) {
        return this.axios.delete(`/board/${taskId}/`).then(response => response.data);
    }

    removeRow(rowId) {
        return this.axios.delete(`/row/${rowId}/`).then(response => response.data);
    }

    newCard(boardId, description) {
        return this.axios.post(`/board/${boardId}/card/`, {"description": description}).then(response => response.data);
    }

    updateCard(boardId, data) {
        return this.axios.post(`/board/${boardId}/card/`, data).then(response => response.data);
    }
    updateSingleCard(pk, data) {
        return this.axios.post(`/card/${pk}/`, data).then(response => response.data);
    }
    appendUserCard(pk, data) {
        return this.axios.post(`/card/${pk}/users/`, data).then(response => response.data);
    }

    moveCard(pk, index, board, row) {
        return this.axios.post(`/card/${pk}/move/`, {"index": index, "board": board, "row": row}).then(response => response.data);
    }

    removeCard(taskId) {
        return this.axios.delete(`/card/${taskId}/`, {pk: taskId}).then(response => response.data);
    }

    newCardItem(cardId, name) {
        return this.axios.post(`/card/${cardId}/item/`, {"name": name}).then(response => response.data);
    }

    updateCardItem(itemId, data) {
        return this.axios.post(`/card/item/${itemId}`, data).then(response => response.data);
    }

    removeCardItem(itemId, ) {
        return this.axios.delete(`/card/item/${itemId}/`).then(response => response.data);
    }

    getUsers() {
        return this.axios.get(`/user/`).then(response => response.data);

    }
    getUser(pk) {
        return this.axios.get(`/user/${pk}/`).then(response => response.data);

    }
    getParameter(pk) {
    return this.axios.get(`/parameter/${pk}/`).then(response => response.data);
    }
    updateUser(pk, data) {
        return this.axios.post(`user/${pk}/image/`, data).then(response => response.data);
    }
    updateParameter(pk, data) {
        return this.axios.post(`/parameter/${pk}/`, data).then(response => response.data);
    }
    getRemaining() {
        return this.axios.get(`/limit/`).then(response => response.data);
    }
    
    loginUser(username, password) {
        return this.axios.post(`/token/`, {"username": username, "password": password}).then(response => response.data);
    }

    createUser(username, password, password2) {
        return this.axios.post(`/user/`, {"username": username, "password": password, "password2": password2}).then(response => response.data);
    }
}

export default ApiService;