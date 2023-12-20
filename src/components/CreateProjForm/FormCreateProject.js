import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import { createProject } from '../../services/projectService'
import './FormCreateProject.css';

class FormCreateProject extends Component {
    state = {
        project: {
            code: '',
            description: '',
            startDate: '',
        },
    };

    changeHandler = (event) => {
        const { name, value } = event.target;

        // Check if the input is the date input
        if (name === 'startDate') {
            // Parse the current date value to a Date object
            const currentDate = new Date(value);

            // Format the date to the "dd-MM-YYYY" format
            const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`;

            // Update the state with the formatted date
            this.setState((prevState) => ({
                project: {
                    ...prevState.project,
                    [name]: formattedDate,
                },
            }));
        } else {
            // For other inputs, update the state directly
            this.setState((prevState) => ({
                project: {
                    ...prevState.project,
                    [name]: value,
                },
            }));
        }
    };

    createProject = async (event) => {
        event.preventDefault();

        try {
            // Call the createProject function from projectService
            await createProject(this.state.project);

            console.log('Project created successfully');

            // Use useNavigate to get access to the navigate function
            const navigate = useNavigate();

            // Redirect to the "/list" route
            navigate('/list');

        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    render() {
        const { code, description, startDate } = this.state.project;

        return (
            <div>
                <h1>Creation of a new Project</h1>

                <form onSubmit={this.createProject}>
                    <label>
                        Code:
                        <input type="text" name="code" value={code} onChange={this.changeHandler} />
                    </label>
                    <label>
                        Description:
                        <input type="text" name="description" value={description} onChange={this.changeHandler} />
                    </label>
                    <label>
                        Start Date:
                        <input type="date" name="startDate" value={startDate} onChange={this.changeHandler} />
                    </label>
                    <Button variant="outline-primary">Create Project</Button>
                </form>
            </div>
        );
    }
}

export default FormCreateProject;
