import TaskItem from '../taskItem/taskItem';

import './taskList.scss';

const TaskList = () => {
    return (
        <div className="task-list">
          <div className="container">
            <div className="row">
              <TaskItem/>
              <TaskItem/>
              <TaskItem/>
              <TaskItem/>
              <TaskItem/>
            </div>
          </div>
        </div>
    )
}

export default TaskList;