import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import {Footer} from './components/Footer/Footer'
import Axios from 'axios';
import './App.css';
 import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme";

function App() {

   const [front, setfront] = useState(null);
   const [loading, setLoading] = useState(false);
 
  const fetchUsers = () => {
    setLoading(true)

    Axios.get(" https://reqres.in/api/users?page=1").then(
      (response) => {
        console.log("frontend Fetched")
        setfront(response.data.data);
        setLoading(false);
      }
    )
  }


  useEffect(() => {
    loading && fetchUsers();
    setTimeout(() => {
      setLoading(false)
    }, 30000)
  }, [loading])

  return (

    <div className="App">
      <Navbar buttonclicked={setLoading} />
      <div className="floatingline">
        <h1>Note: Please Click On Get Users To fetch data</h1>

    </div>
      <div className="allcards">
        {front && front.map((item) => {
          return <Card id={item.id} first_name={item.first_name} last_name={item.last_name} email={item.email} image={item.avatar} />
        })}
         </div>
         <Footer/>
         
      <div className="loader">
      <ClimbingBoxLoader
      color={"#fff"} 
      timeInSeconds={60}
      loading={loading} 
       size={50} />
      </div> 
    </div>
  );
}

export default App;