import React,{useEffect, useState} from 'react'
import axios from "axios"
import { useDispatch,useSelector } from 'react-redux'
import { userData } from '../../store/Actions'

export const UserCard = ({pageId}) => {

  const dispatch = useDispatch()
  
  const usersListData = useSelector(state => state)
  const {userDetails} = usersListData

  useEffect(async() => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${pageId}`)
    dispatch(userData([data]))
  },[pageId])


  console.log(userDetails)


  return (
    <>
      {
        userDetails.map(eachUser => (
          <div key={eachUser.id}>    
          <h1>{eachUser.name}</h1>
          <h1>{eachUser.id}</h1>
          </div>
        ))
      }
    </>

  )
}
