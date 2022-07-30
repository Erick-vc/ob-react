import React, {useState, useEffect} from 'react';
import { LEVELS } from "../../models/levels.enum"
import { Task } from "../../models/task.class"
import TaskComponents from '../pure/task';
import TaskForm from "../pure/forms/taskForm"

import "../../styles/task.scss"

const TaskListComponent = () => {

    const defaultTask1 = new Task("Example1", "Description1", true, LEVELS.NORMAL);
    const defaultTask2 = new Task("Example2", "Description2", false, LEVELS.URGENT);
    const defaultTask3 = new Task("Example3", "Description3", false, LEVELS.BLOCKING);
    
    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
    const [loading, setLoading] = useState([true])
    
    // Control de ciclo de vida del componente
    useEffect(() => {
        console.log("Task State has benn modified");
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log("TaskList component is going to unmount");
        }
    }, [tasks])
    
    function completedTask(task) {
        console.log('Complete this Task', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        setTasks(tempTasks);
    }

    function deleteTaks(task) {
        console.log("Delete this Taks:", task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.splice(index,1)
        setTasks(tempTasks)
    }

    function addTask(task) {
        console.log("Add this Taks:", task)
        const tempTasks = [...tasks]
        tempTasks.push(task)
        setTasks(tempTasks);
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    { tasks.map((task, index) => {
                        return (
                            <TaskComponents 
                                key={index}
                                task={task}
                                complete={completedTask}
                                remove={deleteTaks}
                            ></TaskComponents>
                            )
                        } 
                    ) }        

                {/* <TaskComponents task={defaultTask1}></TaskComponents> */}
                </tbody>
            </table>
        )
    }

    let tasksTable;

    if(tasks.length > 0) {
        tasksTable = <Table></Table>
    } else {
        tasksTable = (<div>
            <h3> There are no tasks to show</h3>
            <h4> Please, create one</h4>
        </div>)
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className="col-12">
                <div className='card'>
                    {/* Card Header {title} */}
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    {/* Card Body {content} */}
                    <div className="card-body" data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        {/* TODO: Add Loading Spinner */}
                        { loading ? (<p style={loadingStyle} > loading tasks...</p>) : tasksTable}
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
