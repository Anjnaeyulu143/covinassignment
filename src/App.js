import { useEffect,useState } from 'react';
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {getData} from "./store/Actions"
import {PaginationPage } from './pages/PaginationPage';
import axios from 'axios';
import { UserCard } from './pages/UserCard';
import { Container } from '@material-ui/core';
import { Spinner } from 'react-bootstrap';


function App() {

const usersListData = useSelector(state => state)
const {isLoading,filteredId} = usersListData
const [showCard,setShowCard] = useState(true)

const dispatch = useDispatch()

useEffect(async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    dispatch(getData(data))
},[])



const renderContent = () => {
  return(
    <>
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: "100vh" }}>
    {
       showCard ? <h1>Plese, Click on your id</h1> : <UserCard pageId={filteredId}/>
      }
      <PaginationPage  setShowCard={setShowCard}/>
    </div>
    </>
  )
}

  return (
      <>
      <Container>
      {
        isLoading ? <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Spinner animation="border" variant="primary" />
      </div>: renderContent()
      }
      </Container>
      </>
  );
}

export default App;
