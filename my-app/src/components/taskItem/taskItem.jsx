import { Component } from 'react';

import './taskItem.scss'

class TaskItem extends Component {
  render() {
    return (
        <section className="task">
            <div className="task__container">
              <label className="check">
                <input className="check__input" type="checkbox"/><span className="check__box"></span>
                <div className="check__text text">Buy groceries (milk, vegetables, fruits, fish)</div>
                <button className="check__remove"><img src="./remove.svg" alt="remove"/></button>
              </label>
            </div>
        </section>
    )
  }
}

export default TaskItem;