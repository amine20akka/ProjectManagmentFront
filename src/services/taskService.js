import axios from 'axios'

export const getAllTasks = (callback) => {
    axios.get('http://localhost:8080/ProjectManagement/task/all')
        .then((res) => callback(res))
}

export const createTask = (code, desc, start, end, proj, callback) => {
    const task = {
        code: code,
        description: desc,
        startDate: start,
        endDate: end,
        proj: proj
    };

    axios.post(`http://localhost:8080/ProjectManagement/task/create/${code}/${desc}/${start}/${end}/${proj}`, task)
        .then((res) => callback(null, res.data)) 
        .catch((err) => callback(err.response.data || "Error creating task"));
}


export const updateTask = (code, desc, start, end, proj, callback) => {
    const task = {
        code: code,
        description: desc,
        startDate: start,
        endDate: end,
        proj: proj
    };

    axios.post(`http://localhost:8080/ProjectManagement/task/update/${code}/${desc}/${start}/${end}/${proj}`, task)
        .then((res) => callback(null, res.data))
        .catch((err) => callback(err.response.data || "Error updating task"));
}

export const removeTask = (code, callback) => {
    axios.delete(`http://localhost:8080/ProjectManagement/task/remove/${code}`)
        .then((res) => callback(null, res.data))
        .catch((err) => callback(err.response.data || "Error deleting task"));
}