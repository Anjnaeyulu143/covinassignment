import React,{useEffect, useState} from 'react'
import axios from "axios"
import { useDispatch,useSelector } from 'react-redux'
import { userData } from '../../store/Actions'
import { Spinner } from 'react-bootstrap'
import { Card,CardActionArea,CardContent,Typography } from '@mui/material'

export const UserCard = ({pageId}) => {

  const dispatch = useDispatch()
  const [loader,setLoader] = useState(true)
  
  const usersListData = useSelector(state => state)
  const {userDetails} = usersListData

  useEffect(async() => {
    setLoader(true)
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${pageId}`)
    dispatch(userData([data]))
    setLoader(false)
  },[pageId])


  console.log(userDetails)
  console.log(loader)


  return (
    <>
      {

      loader ? <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <Spinner animation="border" variant="primary" />
      </div>:
        userDetails.map(eachUser => (
          <div key={eachUser.name} style={{backgroundColor:"blue",borderRadius:"15px"}}>    
           <Card
           sx={{ maxWidth: 300, padding: "1em", margin: ".5em" }}>
             <CardActionArea>
               <CardContent>
               <Typography gutterBottom variant="h5" style={{textDecoration:"underline",textDecorationColor:"blue"}}>
                  {`User id:   ${eachUser.id}`}
                </Typography>
                <Typography gutterBottom variant="h6">
                      {`Name: ${eachUser.name}`}
                </Typography>
                <Typography gutterBottom variant="h6">
                      {`User Name: ${eachUser.username}`}
                </Typography> 
                <Typography gutterBottom variant="h6">
                      {`Email: ${eachUser.email}`}
                </Typography>
                <Typography gutterBottom variant="h6">
                      {`Website: ${eachUser.website}`}
                </Typography>
               </CardContent>
             </CardActionArea>
           </Card>
          </div>
        ))
      }
    </>

  )
}
