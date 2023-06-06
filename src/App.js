import './App.css';
import {useEffect,useLayoutEffect,useState} from "react"
import {Table} from 'antd';
import { HashLoader } from 'react-spinners';
function App () {
const { Column} = Table;
const [users,setUsers]=useState([])
const [loading,setLoading]=useState(false)

///////// fetch data
useLayoutEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=>res.json())
  .then((res)=>setUsers(res))
},[])

/////////// loading
useLayoutEffect(()=>{
  setLoading(true)
  setTimeout(()=>setLoading(false),3000)
},[])

return(
  <div className='App'>
  {
  loading?
    <HashLoader color="#36d7b7" size={120}/>
    :
    <div className='box'>
      <Table dataSource={users} >
        <Column title="First Name" dataIndex="name" key="name" />
        <Column title="Age" dataIndex='id' key="id" />
        <Column title="Address" dataIndex='username' key="username" />
      </Table>
    </div>
    }
  </div>
);
}
export default App;