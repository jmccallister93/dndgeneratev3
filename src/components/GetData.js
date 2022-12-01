import { useState } from "react";
import supabase from "../config/supabaseClient";

const GetData = (props) => {
    const [fetchError, setFetchError] = useState(null)
      //Get Data function
  
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from(props.tableName)
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        props.setSingular(null);
      }
      if (dataName) {
        props.setPlural(dataName);
        setFetchError(null);
        props.setOptions(dataName.map((r) => ({ name: r.name, value: r.value})));
      }
    };

    return ( fetchData() );
}
 
export default GetData;