import {Wrapper} from "./Wrapper";
import {FormLabel, Input} from "@chakra-ui/react";
import {DataContext} from "../App";
import {useContext, useState} from "react";

export const StartPage = () => {
    const context=useContext(DataContext)
    const setContext=useState(DataContext);


setContext.values(name)=>name;


    return(

            <Wrapper heading={"Stwórz swój rachunek"}>

            <FormLabel>{context.Data.name} Wpisz nazwe</FormLabel>
            <Input
                type="text"
                value=n
                //onChange={onNameChanged}

            />




            </Wrapper>





    )
}