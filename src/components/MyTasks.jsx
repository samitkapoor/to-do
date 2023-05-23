import "../styles/myTasks.css";

export default function MyTasks(props) {
    const todoList = props.todoList;

    return <div className="tasks">
        {todoList.map(item => { 
            return <div key={item.id} className="task-item">
                <h1 className="title">
                    {item.title}
                </h1>
                <div className="action">
                    <button>
                        <i className="fa-regular fa-trash-can action-btn danger"></i>
                    </button>
                    <button>
                        {item.completed ?
                            <i className="fa-solid fa-circle-check action-btn"></i> :
                            <i className="fa-regular fa-circle-check action-btn inactive"></i>}
                    </button>
                </div>
            </div>;
        })}
    </div>
}