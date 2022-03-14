import { Component } from 'react';

import Navigation from '../navigation/nav';
import TaskList from '../taskList/taskList'
import Footer from '../footer/footer';

class App extends Component{
    render() {
        return (
            <>
                <Navigation/>,
                <TaskList/>,
                <Footer/>
            </>
        )
    }
} 

export default App;