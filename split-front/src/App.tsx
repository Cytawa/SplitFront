import React, {createContext, useState} from 'react';
import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {StartPage} from "./component/StartPage"
import {BillPage} from "./component/BillPage"
import {ExpensePage} from "./component/ExpensePage"
import {Data} from "./models/Data";

 interface DataContext{
  basicData:Data;
     dataModifier: (value: Data) => void;
 }

 export const DataContext =createContext<DataContext>({

     basicData:{name:""},

     dataModifier: (value: Data) => {},}
 )


function App() {
  const [basicData, setData] = useState<DataContext>({

          basicData:{name: "",},
      dataModifier: (value:Data) =>{
              setData(basicData)
      }

      }

  )




return (
    <DataContext.Provider
        value={{
            basicData: basicData,
            dataModifier: setData

        }}
    >
      <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/bill" element={<BillPage />}></Route>
        <Route path="/expense" element={<ExpensePage />}></Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
        </DataContext.Provider>

  );
}

export default App;
