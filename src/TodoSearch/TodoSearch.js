import "./TodoSearch.css";
import React from "react";
import {TodoContext} from "../TodoContext";
function TodoSearch(){

    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);

    /*const [searchValue,setSearchValue] = React.useState('');*/

/*    console.log("Los usuarios buscan todo"+searchValue);*/

    return (
       <input placeholder="Cortar cebolla"
              className="TodoSearch"
              value={searchValue}
              onChange={(event)=>{
                  setSearchValue(event.target.value);
              }}
       />
    );
}

export {TodoSearch};