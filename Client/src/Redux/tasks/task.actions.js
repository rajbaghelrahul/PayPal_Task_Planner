import { Is_Error, Is_Loading, Is_Success } from "./task.type"
import axios from 'axios';

export const createTask = (form) => async (dispatch) => {
    dispatch({type:Is_Loading});
    try{
        const res = await axios.post('mongodb://localhost:27017/task', form);
        const data = await res.data;
        console.log(data);
        dispatch({type:Is_Success, payload:[]});
        return data;
    } catch (err) {
        dispatch({type:Is_Error});
        console.log(err);
    }
}

export const getTasks = () => async (dispatch) => {
    dispatch({type:Is_Loading});
    try{
        const res = await axios.get('mongodb://localhost:27017/task');
        const data = await res.data;
        console.log(data);
        dispatch({type:Is_Success, payload:[]});
        return data;
    } catch (err) {
        dispatch({type:Is_Error});
        console.log(err);
    }
}