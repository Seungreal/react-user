import {userConstant} from '.'

export const userReducer = (state=[],action)=>{
    switch(action.type){
        case userConstant.UserJoinTypes.REQUEST: return {...state,payload:action.payload}
        case userConstant.UserJoinTypes.SUCCESS: return {...state,payload:action.payload}
        case userConstant.UserJoinTypes.FAIL: return {...state,payload:action.payload}

        case userConstant.UserListTypes.REQUEST: return {...state,payload:action.payload}
        case userConstant.UserListTypes.SUCCESS: return {...state,payload:action.payload}
        case userConstant.UserListTypes.FAIL: return {...state,payload:action.payload}

        case userConstant.UserDetailTypes.REQUEST: return {...state,payload:action.payload}
        case userConstant.UserDetailTypes.SUCCESS: return {...state,payload:action.payload}
        case userConstant.UserDetailTypes.FAIL: return {...state,payload:action.payload}

        case userConstant.UserLoginTypes.REQUEST: return {...state,payload:action.payload}
        case userConstant.UserLoginTypes.SUCCESS: return {...state,payload:action.payload}
        case userConstant.UserLoginTypes.FAIL: return {...state,payload:action.payload}

        case userConstant.UserUpdateTypes.REQUEST: return {...state,payload:action.payload}
        case userConstant.UserUpdateTypes.SUCCESS: return {...state,payload:action.payload}
        case userConstant.UserUpdateTypes.FAIL: return {...state,payload:action.payload}

        default: return state
    }
}