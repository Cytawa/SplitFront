import React, {createContext, useState} from 'react';
import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {StartPage} from "./component/StartPage"
import {BillPage} from "./component/BillPage"
import {ExpensePage} from "./component/ExpensePage"
import { BasicData } from "./models/BasicData";
import {UserPage} from "./component/UserPage"
import {BccccasicExpens} from "./models/BccccasicExpens";


interface DataContext {
    basicData: BasicData;
    basicDataModifier: (value: BasicData) => void;
}
interface ExpenseContext {
    basicExpense: BccccasicExpens
    bacisExpenseModifier: (value:BccccasicExpens)=>void;
}
export interface User{
    user:""
}




/*export const ExpanseContext=createContext<ExpenseContext>(
    {
        basicExpense:{

        }
    }

)*/

export const DataContext = createContext<DataContext>({
    basicData: {
        name: "",
        sum:0,
        users: [""],

    },
    basicDataModifier: (value: BasicData) => {},

});


function App() {
    const [basicData, setBasicData] = useState<BasicData>({

        name: "",
        sum:0,
        users:  [""],

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
