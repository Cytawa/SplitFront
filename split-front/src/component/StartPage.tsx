import {Wrapper} from "./Wrapper";
import {FormLabel, Input} from "@chakra-ui/react";
import {DataContext} from "../App";
import {useContext, useEffect, useState} from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom";
import { Box } from '@chakra-ui/react'
import axios from "axios";

export const StartPage = () => {
    const context = useContext(DataContext)
    const setContext = useState(DataContext);
    const navigate = useNavigate();

    const onBillNameChanged = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        context.basicDataModifier({
            ...context.basicData,
            name: event.currentTarget.value,
        });
    };

    function handleClick() {

        fetch('http://localhost:3010/split/bill/save', {

            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({"nameBill": context.basicData.name})

        })

    }

    return (
        <Wrapper  heading={"Stwórz swój rachunek"} >

            <FormLabel> Wpisz nazwe</FormLabel>
            <Input
                type="text"
                value={context.basicData.name}
                onChange={onBillNameChanged}
            />
            <Button onClick={() => [navigate("./user"),handleClick()] } colorScheme='blue'>NEXT</Button>

        </Wrapper>

    )
}