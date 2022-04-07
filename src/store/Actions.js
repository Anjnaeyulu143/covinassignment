export const listUsers = "LISTUSERS"
export const userId = "USERID"
export const userDetail = "USERDETAILS"


export const getData = (data) => {
    return {
        type: listUsers,
        payload: data
    }
}

export const uniqueId = (id) => {
    return {
        type:userId,
        payload:id
    }
}



export const userData = (data) => {
    return {
        type:userDetail,
        payload:data
    }
}