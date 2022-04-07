import React,{useState,useEffect} from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { useSelector,useDispatch } from 'react-redux';
import { uniqueId } from '../../store/Actions';

export const PaginationPage = ({setShowCard}) => {

  const [pageId,setPageId] = useState(1)
  const usersList = useSelector(state => state.usersList)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(uniqueId(pageId))
  },[pageId])


  return (
    <Pagination
    count ={(usersList.length)}
    style={{
        padding: 20,
        width: "100%",
        display: "flex",
        justifyContent:"center",
    }}
    color = "secondary"
    onChange={(_,value) => {
        setPageId(value);
        setShowCard(false)
    }}
    />
  )
}
