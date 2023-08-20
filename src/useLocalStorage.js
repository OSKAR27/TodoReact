import React from 'react';
function useLocalStorage(itemName, initialValue){
    const [items,setItems] = React.useState(initialValue);

    //estado de carga
    const [loading,setLoading] = React.useState(true);

    //estado de error
    const [error,setError] = React.useState(false);


    React.useEffect( () => {
      setTimeout( () => {
          try{
              const localStorageItems = localStorage.getItem(itemName);

              let parsedItem;

              if(!localStorageItems) {
                  localStorage.setItem(itemName,JSON.stringify(initialValue));
                  parsedItem= initialValue;
              }
              else {
                  parsedItem = JSON.parse(localStorageItems);
                  setItems(parsedItem);
              }

              setLoading(false);
          }catch (error){
              setLoading(false);
              setError(true);
          }
      },2000);
    },[]);

    const saveItems = (newItem) => {
        localStorage.setItem(itemName,JSON.stringify(newItem));
        setItems(newItem);
    };

    // cuando se manden mas de 2 propiedades mejor un objeto
    return {items,loading,error,saveItems};

}

export {useLocalStorage};