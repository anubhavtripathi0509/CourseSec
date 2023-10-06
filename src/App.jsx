import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const App = () => {

  const[courses, setCourses] = useState();

  useEffect( () =>{
    const fetchData = async() => {
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save data into a variable
        console.log(output.data);
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
    }
    fetchData();
  },[])

  return (
    <div>
      <Navbar />

      <Filter filterData={filterData}/>

      <Cards courses={courses}/>
  
    </div>
  );
}

export default App;
