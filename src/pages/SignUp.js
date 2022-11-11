import Navbar from "../components/Navbar";
import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";

const SignUp = () => {
    
    const [selectedCity1, setSelectedCity1] = useState(null);
    
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const citySelectItems = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
 
    const onCityChange = (e) => {
        setSelectedCity1(e.value);
    }

    return ( 
        <div className="signup">
           <Navbar />
           <h5>Basic</h5>
                <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select a City" />
        </div>
     );
}
 
export default SignUp;