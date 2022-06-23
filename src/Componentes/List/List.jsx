

import { useState } from 'react'
import { FiTrash2, FiPlus } from 'react-icons/fi'
import './List.styles.css' 



const List = () => {



    const [list, setlist] = useState([])
    const [NewTask, setNewTask] = useState('')


        function handleTogglrTask(id) {
            const newTasks = list.map(task => task.id === id? {
        ...task,
        isComplete: !task.isComplete,
            }:task )

            setlist(newTasks)
        }     

    
        function handleCreateNewTask() {
            const task = {
                id: Math.random(),
                title: NewTask,
                isComplete: false,
            }
            
            if(task.title === ''){
                return
            }
            setlist([...list, task])
            setNewTask('')

        } 


        function handleDeleteTask(id) {
            const taskFiltered = list.filter(task => task.id !== id)
            setlist(taskFiltered)

        }


    return(
        <section className='list'>
            <header>
                <h2>Tarefas:</h2>

                <div className='input-container'>
                    <input 
                    type='text'
                    placeholder='Adicione as tarefas'
                    onChange={e => setNewTask(e.target.value)}
                    value={NewTask}
                     />
                    <button className='add-task' data-testid='add-task' onClick={handleCreateNewTask}>
                        <FiPlus size={16} color='#fff' />
                    </button>

                </div>
            </header>


            <main>
                <ul>
                    {
                        list.map(task => 
                    <li key={task.id}>
                        <div className={task.isComplete?  'completed': ''}>
                            <label className='checkbox-container'>
                                <input 
                                type='checkbox'
                                onClick={() => handleTogglrTask(task.id)} 
                                checked={task.isComplete}   
                                readOnly                                                            
                                />
                                <span className='checkmark'></span>
                            </label>
                                <p> {task.title} </p>
                        </div>
                        <button className='remove-task' data-testisd='remove-task' onClick={() => handleDeleteTask(task.id)}>
                            <FiTrash2 size={16} />
                        </button>
                    </li>
                            )
                    }
                </ul>
            </main>
        </section>
)
}

export default List