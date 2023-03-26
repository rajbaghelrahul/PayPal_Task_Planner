import { Is_Error, Is_Loading, Is_Success } from "./task.type";

const initState = {
    isLoading:false,
    isError:false,
    isSuccess:false,
    tasks:[]
}

export const reducerTask = (state=initState, {type, payload}) => {
    switch (type) {
        default :
            return state;
        case Is_Loading: 
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false,
            }
        case Is_Error: 
            return {
                ...state,
                isLoading:false,
                isError:true,
                isSuccess:false,
            }
        case Is_Success: 
            return {
                ...state,
                isLoading:false,
                isError:false,
                isSuccess:true,
                tasks:payload
            }
    }
}