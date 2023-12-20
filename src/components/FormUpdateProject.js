import React, { Component } from 'react';

class FormUpdateProject extends Component {
    constructor(props) {
        super(props);

        // Set the initial state with the project data
        this.state = {
            project: {
                code: props.code || '',
                description: props.description || '',
                startDate: props.startDate || '',
            },
        };
    }

    changeHandler = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            project: {
                ...prevState.project,
                [name]: value,
            },
        }));
    };

    updateProject = (event) => {
        event.preventDefault();
        this.props.updateProject(this.state.project);
    };

    render() {
        const { code, description, startDate } = this.state.project;

        return (
            <div>
                <h1>Update your Project</h1>

                <form onSubmit={this.updateProject}>
                    <label>
                        Project Code:
                        <input type="text" name="code" value={code} onChange={this.changeHandler} />
                    </label>
                    <label>
                        Project Description:
                        <input type="text" name="description" value={description} onChange={this.changeHandler} />
                    </label>
                    <label>
                        Start Date:
                        <input type="date" name="startDate" value={startDate} onChange={this.changeHandler} />
                    </label>
                    <button>Update Project</button>
                </form>
            </div>
        );
    }
}

export default FormUpdateProject;
