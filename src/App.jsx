import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

  const[courses, setCourses] = useState();
  const[loading, setLoading] = useState(true);

  const fetchData = async() => {
    setLoading(true);
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
    setLoading(false);
  }

  useEffect( () =>{
    fetchData();
  },[])

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Filter filterData={filterData}/>
      </div>

      <div>
        {/* <Cards courses={courses}/> */}
        {
          loading ? (<Spinner/>) : (<Cards courses={courses}/>)
        }
      </div>
    </div>
  );
}

export default App;
