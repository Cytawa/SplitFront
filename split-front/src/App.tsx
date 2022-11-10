import React, {createContext, useState} from 'react';
import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {StartPage} from "./component/StartPage"
import {BillPage} from "./component/BillPage"
import {ExpensePage} from "./component/ExpensePage"
import { BasicData } from "./models/BasicData";
import {UserPage} from "./component/UserPage"

interface DataContext {
    basicData: BasicData;
    basicDataModifier: (value: BasicData) => void;
}


export const DataContext = createContext<DataContext>({
    basicData: {
        name: "",
        user: "",

    },
    basicDataModifier: (value: BasicData) => {},

});


function App() {
    const [basicData, setBasicData] = useState<BasicData>({

            name: "",
            user: "",

        },);
        const basicDataModifier = (value: BasicData) => {
            setBasicData(value);
        };



    return (<DataContext.Provider value={{basicData: basicData, basicDataModifier: basicDataModifier}}


        >


            <ChakraProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<StartPage/>}></Route>
                        <Route path="/bill" element={<BillPage/>}></Route>
                        <Route path="/expense" element={<ExpensePage/>}></Route>
                        <Route path="/user" element={<UserPage/>}></Route>
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
        </DataContext.Provider>

    );
}

export default App;
