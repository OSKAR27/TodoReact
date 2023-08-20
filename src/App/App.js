import React from 'react';
import {AppUI} from "./AppUI";
import {TodoProvider} from "../TodoContext";

/*const defaultTodos = [
    { text: "Cortar Cebolla",completed: false},
    { text: "Tomar curso de React",completed: false},
    { text: "Jugar Nintendo",completed: false},
    { text: "dfjghkjghkdfhk",completed: false},
];*/
//consola
// Const stringfiedTodos = JSON.stringify(defaultTodos);
//localStorage.setItem('TODO_V1',stringfiedTodos);

//local storage
// localStorage.setItem('TODO_V1',JSON.stringify(defaultTodos));
// localStorage.removeItem('TODO_V1');

//custom hooks

function App() {
    //localStorage.setItem('TODO_V1',JSON.stringify(defaultTodos));
    //let parsedTodos = JSON.parse(localStorageTodos);
    //const [todos,setTodos] = React.useState(JSON.parse(parsedTodos));

    //local hooks
    //const [todos,setTodos] = React.useState(parsedTodos);
    //custom hooks
    //renombrar propiedades


  return (

      <TodoProvider >
          <AppUI
              /*  loading={loading}
                error={error}
                completedTodos={completedTodos}
              totalTodos={totalTodos}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
                searchedTodos={searchedTodos}
              completeTodo={completeTodo}
                deleteTodo={deleteTodo}*/
          />
      </TodoProvider>



  );
}


export default App;
