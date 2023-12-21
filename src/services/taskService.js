import axios from 'axios'

export const getAllTasks = async () => {
    try {
        const response = await axios.get('http://localhost:8080/ProjectManagement/task/all');
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

export const createTask = (task, callback) => {
    axios.post(`http://localhost:8080/ProjectManagement/task/create`, task)
        .then((res) => callback(null, res.data)) 
        .catch((err) => callback(err.response.data || "Error creating task"));
    console.log(task);
}


export const updateTask = (task, callback) => {
    axios.put(`http://localhost:8080/ProjectManagement/task/update`, task)
        .then((res) => callback(null, res.data))
        .catch((err) => callback(err.response.data || "Error updating task"));
}

export const removeTask = async (code) => {
    try {
        const response = await axios.delete(`http://localhost:8080/ProjectManagement/task/remove/${code}`);
        return response.data; // Return the data on success
    } catch (error) {
        // Handle the error and throw it for the caller to catch
        throw error.response?.data || "Error deleting task";
    }
};
