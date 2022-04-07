import { useEffect,useState } from 'react';
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {getData} from "./store/Actions"
import {PaginationPage } from './pages/PaginationPage';
import axios from 'axios';
import { UserCard } from './pages/UserCard';


function App() {

const usersListData = useSelector(state => state)
const {usersList,isLoading,filteredId} = usersListData
const [showCard,setShowCard] = useState(true)

const dispatch = useDispatch()

useEffect(async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    dispatch(getData(data))
},[])

console.log(showCard)

  return (
      <>
      {
        isLoading ? <h1>Anjan HI</h1>: <h1>Anjaneyulu</h1>
      }
      <UserCard pageId={filteredId}/>
      <PaginationPage  setShowCard={setShowCard}/>
      </>
  );
}

export default App;
