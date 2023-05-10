class ApiService {
    constructor(axios = undefined) {
        this.axios = axios;
        this.API_URL = 'http://34.118.122.21:8000';
        //this.API_URL = '${this.API_URL}';
    }

    getBoards(name) {
        return this.axios.get(`${this.API_URL}/api/board/`).then(response => response.data);
    }

    newBoard(name) {
        return this.axios.post(`${this.API_URL}/api/board/`, {"name": name}).then(response => response.data);
    }

    newRow(name) {
        return this.axios.post(`${this.API_URL}/api/row/`, {"name": name}).then(response => response.data);
    }

    updateBoard(pk, data) {
        return this.axios.post(`${this.API_URL}/api/board/${pk}/`, data).then(response => response.data);
    }

    updateRow(pk, data) {
        return this.axios.post(`${this.API_URL}/api/row/${pk}/`, data).then(response => response.data);
    }

    moveBoard(pk, index) {
        return this.axios.post(`${this.API_URL}/api/board/${pk}/move/`, {"index": index}).then(response => response.data);
    }

    removeBoard(taskId) {
        return this.axios.delete(`${this.API_URL}/api/board/${taskId}/`).then(response => response.data);
    }

    removeRow(rowId) {
        return this.axios.delete(`${this.API_URL}/api/row/${rowId}/`).then(response => response.data);
    }

    newCard(boardId, description) {
        return this.axios.post(`${this.API_URL}/api/board/${boardId}/card/`, {"description": description}).then(response => response.data);
    }

    updateCard(boardId, data) {
        return this.axios.post(`${this.API_URL}/api/board/${boardId}/card/`, data).then(response => response.data);
    }

    moveCard(pk, index, board, row) {
        return this.axios.post(`${this.API_URL}/api/card/${pk}/move/`, {"index": index, "board": board, "row": row}).then(response => response.data);
    }

    removeCard(taskId) {
        return this.axios.delete(`${this.API_URL}/api/card/${taskId}/`, {pk: taskId}).then(response => response.data);
    }

    getUsers() {
        return this.axios.get(`${this.API_URL}/api/user/`).then(response => response.data);

    }

    loginUser(username, password) {
        return fetch("${this.API_URL}/api/token/", {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body   : JSON.stringify({
                username,
                password
            })
        })
    }

    createUser(username, password, password2) {
        return fetch("http://127.0.0.1:8000/api/user/", {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body   : JSON.stringify({
                username,
                password
            })
        });
    }
}

export default ApiService;