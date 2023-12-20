import Table from 'react-bootstrap/Table';
import React, { Component } from 'react';
import { getAllProjects } from '../../services/projectService';
import './ListProjects.css'

class ListProjects extends Component {
    state = {
        projects: [],
    };

    componentDidMount() {
        // Fetch the list of projects when the component mounts
        this.fetchProjects();
    }

    fetchProjects = async () => {
        try {
            // Call getAllProjects from your projectService
            const projects = await getAllProjects();
            this.setState({ projects });
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    render() {
        const { projects } = this.state;

        return (
            <div>
                <h1>List of Projects</h1>

                <Table>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Description</th>
                            <th>Start Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.code}>
                                <td>{project.code}</td>
                                <td>{project.description}</td>
                                <td>{project.startDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ListProjects;
