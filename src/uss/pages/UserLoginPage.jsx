import axios from 'axios'
import React from 'react'

export const UserLoginPage = ()=>{
    const test = e=>{
        e.preventDefault()
        alert('click')
        axios.get(`http://localhost:8080/hello`)
        .then(res=>{alert(`${res.data}`)})
        .catch(err=>{throw err})
    }
    return <>
        <button onClick={test}>hello</button>
    </>
}