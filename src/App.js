import { useState,useEffect } from 'react';
import axios from 'axios'
import {Users} from './users';
import Table from './Table'
function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([])

  useEffect(()=>{
    const featchUsers = async()=>{
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data)
    }
    featchUsers()
  },[query])

  return (
    <div className="app">
      <input type="text" placeholder="جستجو..." className="search" onChange={(e)=> setQuery(e.target.value)} />
      <ul className="list">
      <Table data={data}/>
      </ul>
    </div>
  );
}

export default App;
