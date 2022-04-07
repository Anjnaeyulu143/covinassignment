import { listUsers, userDetail, userId } from "./Actions"



const initialState = {
    usersList : [],
    isLoading : true,
    filteredId : '',
    userDetails:[],
}

export const usersReducer = (state=initialState,{type,payload}) => {
    switch(type){
            case listUsers:
                return {
                    ...state,
                    usersList:payload,
                    isLoading:false
                }
            case userId:
                return {
                    ...state,
                    filteredId:payload,
                }
            case userDetail:
                return {
                    ...state,
                    userDetails:payload
                }
            default:
                return state
            }
}