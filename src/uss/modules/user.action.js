import {userConstant} from '.'

const register = user=>dispatch=>{
    const request = user=>{return{type:userConstant.UserJoinTypes.REQUEST,user}}
    const success = user=>{return{type:userConstant.UserJoinTypes.SUCCESS,user}}
    const failure = user=>{return{type:userConstant.UserJoinTypes.FAIL,user}}
}
const list = count=>dispatch=>{
    const request = count=>{return{type:userConstant.UserListTypes.REQUEST,count}}
    const success = count=>{return{type:userConstant.UserListTypes.SUCCESS,count}}
    const failure = count=>{return{type:userConstant.UserListTypes.FAIL,count}}
}
const detail = userid=>dispatch=>{
    const request = userid=>{return{type:userConstant.UserDetailTypes.REQUEST,userid}}
    const success = userid=>{return{type:userConstant.UserDetailTypes.SUCCESS,userid}}
    const failure = userid=>{return{type:userConstant.UserDetailTypes.FAIL,userid}}
}
const login = user=>dispatch=>{
    const request = user=>{return{type:userConstant.UserLoginTypes.REQUEST,user}}
    const success = user=>{return{type:userConstant.UserLoginTypes.SUCCESS,user}}
    const failure = user=>{return{type:userConstant.UserLoginTypes.FAIL,user}}
}
const update = user=>dispatch=>{
    const request = user=>{return{type:userConstant.UserUpdateTypes.REQUEST,user}}
    const success = user=>{return{type:userConstant.UserUpdateTypes.SUCCESS,user}}
    const failure = user=>{return{type:userConstant.UserUpdateTypes.FAIL,user}}
}

export const userAction={
    register,list,detail,login,update
}