import React, { useState, useEffect } from 'react';
import { getAllProjects, removeProject } from '../../../services/projectService';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './ListProjects.css';

const ListProjects = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the list of projects when the component mounts
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            // Call getAllProjects from your projectService
            const projectsData = await getAllProjects();
            setProjects(projectsData);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const redirectToUpdateForm = (project) => {
        navigate(`../update/${project.code}`, { state: { project } });
    };

    const deleteProject = (project) => {
        removeProject(project.code, (error, data) => {
            if (!error) {
                console.log('Project deleted successfully');
        
                fetchProjects();
            } else {
                console.error('Error deleting project:', error);
            }
        });
    }


    return (
        <div>
            <h1>List of Projects</h1>

            <Table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.code}>
                            <td>{project.code}</td>
                            <td>{project.description}</td>
                            <td>{project.startDate}</td>
                            <td className='actionButtons'>
                                <button id='updateButton' className='listButtons' onClick={() => redirectToUpdateForm(project)}>Update</button>
                                <button id='deleteButton' className='listButtons' onClick={() => deleteProject(project)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ListProjects;
