import axios from 'axios'

export const getAllProjects = async () => {
    try {
        const response = await axios.get('http://localhost:8080/ProjectManagement/project/all');
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};


export const createProject = (code, desc, start, callback) => {
    const project = {
        code: code,
        description: desc,
        startDate: start
    };

    axios.post(`http://localhost:8080/ProjectManagement/project/create/${code}/${desc}/${start}`, project)
        .then((res) => callback(null, res.data))
        .catch((err) => callback(err.response.data || "Error creating project"));
}

export const updateProject = (code, desc, start, callback) => {
    const project = {
        code: code,
        description: desc,
        startDate: start
    };

    axios.post(`http://localhost:8080/ProjectManagement/project/update/${code}/${desc}/${start}`, project)
        .then((res) => callback(null, res.data))
        .catch((err) => callback(err.response.data || "Error updating project"));
}

export const removeProject = (code, callback)=>{ 
    axios.delete(`http://localhost:8080/ProjectManagement/project/remove/${code}`)
        .then((res) => callback(null, res.data))
        .catch((err) => callback(err.response.data || "Error deleting project"));
}