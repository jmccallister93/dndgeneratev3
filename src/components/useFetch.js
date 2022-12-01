import { useEffect } from "react";
import supabase from "../config/supabaseClient";

const useFetch = (name, setFetchError, setSingular, setPlural, setOptions) => {
    return ( 
        useEffect(() => {
            const fetchData = async () => {
              const { data, error } = await supabase
                .from(name)
                .select()
                   
                if (error) {
                  setFetchError("Could not fetch the data");
                  console.log(error);
                  setSingular(null);
                }
                if (data) {
                  setPlural(data);
                  setFetchError(null);
                  setOptions(data.map((r) => ({ name: r.name, value: r.value})));
                }
            }
          
            fetchData()
          }, [])
     );
}
 
export default useFetch;