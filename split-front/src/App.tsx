import React, {createContext, useState} from 'react';
import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {StartPage} from "./component/StartPage"
import {BillPage} from "./component/BillPage"
import {ExpensePage} from "./component/ExpensePage"



export const DataContext = createContext({name: ""});


function App() {
    const [dataContext, setDataContext] = useState()
    const dataModifier = (value) => {
        setDataContext(value)
    }


    return (<DataContext.Provider value={{dataContext: dataContext, dataModifier: dataModifier}}


        >


            <ChakraProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<StartPage/>}></Route>
                        <Route path="/bill" element={<BillPage/>}></Route>
                        <Route path="/expense" element={<ExpensePage/>}></Route>
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
        </DataContext.Provider>

    );
}

export default App;
