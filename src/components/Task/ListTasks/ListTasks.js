import React, { useState, useEffect } from 'react';
import { getAllTasks, removeTask } from '../../../services/taskService';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './ListTasks.css';

const ListTasks = () => {
    const [Tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the list of Tasks when the component mounts
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            // Call getAllTasks from your TaskService
            const TasksData = await getAllTasks();
            setTasks(TasksData);
        } catch (error) {
            console.error('Error fetching Tasks:', error);
        }
    };

    const redirectToUpdateForm = (Task) => {
        navigate(`../update/${Task.code}`, { state: { Task } });
    };

    const deleteTask = async (Task) => {
        try {
            // Assuming removeTask returns a Promise
            await removeTask(Task.code);

            console.log('Task deleted successfully');

            // Fetch the updated list of Tasks
            await fetchTasks();
        } catch (error) {
            console.error('Error deleting Task:', error.message || error);
        }
    };



    return (
        <div>
            <h1>List of Tasks</h1>

            <Table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Project</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Tasks.map((Task) => (
                        <tr key={Task.code}>
                            <td>{Task.code}</td>
                            <td>{Task.description}</td>
                            <td>{Task.startDate}</td>
                            <td>{Task.endDate}</td>
                            <td>{Task.project.description}</td>
                            <td className='actionButtons'>
                                <button id='updateButton' className='listButtons' onClick={() => redirectToUpdateForm(Task)}>Update</button>
                                <button id='deleteButton' className='listButtons' onClick={() => deleteTask(Task)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ListTasks;
