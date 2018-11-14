import axios from 'axios'
import { dataType,setNewDataType,setDefauleDataType } from './actionTypes';
export const dataAction = (dispatch) => {
    dispatch({
        type : dataType,
        payload : new Promise(resolve=>{
            axios({
                method : 'get',
                url :'/v2/5be3ced42f00006d00d9f13b'
            })
            .then((data) => {
                resolve(data)
            })
        })
    })
}

export const setNewDataAction = (val) => ({
    type : setNewDataType,
    value : val
})

export const setDefauleDataAction = () => ({
    type : setDefauleDataType
})