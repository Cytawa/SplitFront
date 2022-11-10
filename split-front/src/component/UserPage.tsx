import {Wrapper} from "./Wrapper";
import {useContext} from "react";
import {DataContext} from "../App";
import {Box, Button, color, FormLabel, Input} from "@chakra-ui/react";
import { Center, Square, Circle } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom";

export const UserPage = () => {
    const context = useContext(DataContext)
    const billName = context.basicData.name
    const userName = context.basicData.user
    const navigate = useNavigate();

    const onUserNameChanged = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        context.basicDataModifier({
            ...context.basicData,
            user: event.currentTarget.value,
        });
    };

    function handleClick() {

        fetch(`http://localhost:3010/split/user/signup`, {

            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({
                "username": context.basicData.user,

            })

        })

    }

    function singUserToBill() {
        fetch(`http://localhost:3010/split/user/setbill/`

    , {

            method: 'PATCH',
            mode: 'cors',
                body: JSON.stringify({
                    "username": context.basicData.user,
                    "bill": {
                        "nameBill": context.basicData.name,
                    }
                })


        })


    }

    return (
        <div>
            <Box borderRadius='md' bg='#D2691E' color='black' px={4} h={20} fontSize={"xxx-large"}
            ><Center>
                <b>Nazwa rachunku:{billName}</b></Center>
            </Box>
            <Wrapper heading={"Dodaj Użytkownika"}>
                <FormLabel> Wpisz imię</FormLabel>
                <Input
                    type="text"
                    value={context.basicData.user}
                    onChange={onUserNameChanged}
                />
                <Button onClick={() => handleClick()} colorScheme='blue'>Dodaj użytkownika</Button>
                <Button onClick={() => [navigate("/expense"), singUserToBill]} colorScheme='blue'>Dalej</Button>
            </Wrapper>
        </div>
    )
}