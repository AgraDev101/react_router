import { useEffect, useState } from "react"
import Header from "../../components/Header"
import { tasksState, addTask } from "./taskSlice"
import { getTasks, addTask1, deleteTask, updateTask } from "./taskAPI"
import { useSelector, useDispatch } from "react-redux"

const Tasks = () => {

    const dispatch = useDispatch()

    const [ task0, setTask ] = useState("")
    const [ completed, setCompleted ] = useState(0)

    console.log(completed)

    useEffect(() => {
        dispatch(getTasks())
    }, [])

    const { tasks } = useSelector(tasksState)

    function handleCompleted(x) {
        if (x == 0) {
            return "Not Completed"
        } else if (x == 1) {
            return "Completed"
        }
    }

    return (
        <>
            <Header />
            <h1>Tasks APP Using Redux</h1>
            <section style={{
                maxWidth: "50%",
                margin: "80px auto"
            }}>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Add Task</span>
                    <input onChange={(e) => setTask(e.target.value)} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                {/* <button onClick={() => dispatch(addTask({title: task, completed: 0, id: Date.now()}))} type="button" class="btn btn-primary">Add Task</button> */}
                <button onClick={() => dispatch(addTask1({title: task0, completed: 0}))} type="button" class="btn btn-primary">Add Task</button>
            </section>
            <section style={{
                maxWidth: "50%",
                margin: "80px auto"
            }}>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">title</th>
                        <th scope="col">completed</th>
                        <th scope="col">ID</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{task.title}</td>
                                    <td>{handleCompleted(task.completed)}</td>
                                    <td>{task.id}</td>
                                    <td><button onClick={() => dispatch(deleteTask({ id: task.id }))} type="button" class="btn btn-danger">Delete</button></td>
                                    <td>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#exampleModal" + task.id}>
                                            Update
                                        </button>

                                        <div class="modal fade" id={"exampleModal" + task.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="inputGroup-sizing-default">Input Task</span>
                                                <input onChange={(e) => setTask(e.target.value)} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                                </div>
                                                <div class="form-check">
                                                <input onClick={(e) => setCompleted(1)} class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Completed
                                                </label>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button onClick={() => dispatch(updateTask({ id: task.id, title: task0, completed: completed}))} type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </section>
        </>
    )
}

export default Tasks