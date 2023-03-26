import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import AddTask from '../Pages/AddTask';

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/addTask' element={<AddTask />}></Route>
        </Routes>
    )
};
