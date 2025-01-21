import React, { useState } from 'react';
import Button from './Button.jsx';
import DisabledButton from './DisabledButton.jsx';

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function updateNewTask(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '') {
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => (i !== index));
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div>
            <div className='flex flex-row gap-x-2'>
                <input className="border-black border-2 rounded-md p-1" type="text" placeholder="Enter a task..." onChange={updateNewTask} value={newTask} />
                <Button text='Add task...' onclick={() => (addTask(newTask))} bgColor='bg-green-500'></Button>
            </div>

            <div className='flex flex-col gap-y-2'>
                {tasks.map((task, index) =>
                    <div key={index} className='border-2 border-black rounded-md mt-2 p-1 pl-2 flex flex-row justify-between items-center'>
                        <span>{task}</span>
                        <div className='flex flex-row gap-x-1'>

                            {/* Disable the button for moving the first element up */}
                            {
                                index !== 0 ?
                                    <Button bgColor='bg-sky-500' activeBgColor='bg-sky-700' text='↑' onclick={() => (moveTaskUp(index))}></Button> :
                                    <DisabledButton bgColor='bg-gray-500' text='↑'></DisabledButton>
                            }

                            {/* Disable the button for moving the last element down */}
                            {
                                index !== tasks.length - 1 ?
                                    <Button bgColor='bg-sky-500' activeBgColor='bg-sky-700' text='↓' onclick={() => (moveTaskDown(index))}></Button> :
                                    <DisabledButton bgColor='bg-gray-500' text='↓'></DisabledButton>
                            }

                            <Button text='Delete task' onclick={() => (deleteTask(index))} bgColor='bg-red-500'></Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ToDoList