import { useEffect } from "react";
import supabase from "../config/supabaseClient";

const useFetch = (name) => {
    return ( 
        useEffect(() => {
            const fetchData = async () => {
              const { data, error } = await supabase
                .from(name)
                .select()
                   
              if (error) {
                console.log(error)
              }
              if (data) {
                console.log(data)
              }
            }
          
            fetchData()
          }, [])
     );
}
 
export default useFetch;