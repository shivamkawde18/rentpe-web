import React from 'react';
// import './App.css';
import {CustomButton,SearchInput} from 'rentpe-ui-component-library'
function App() {

    // const itemsData = ['Design', 'Software', 'Hardware', 'Apple', 'Banana', 'Mango'];
    // const [data, setData] = useState(itemsData);

    return (
        <div className="App">
            <CustomButton shape="circle" onClick={()=>{
                alert("hii")
            }}></CustomButton>
            <SearchInput></SearchInput>
           
            </div>
            
    );
}

export default App;
