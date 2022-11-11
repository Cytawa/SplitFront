import {Wrapper} from "./Wrapper";
import React, {useContext, useState} from "react";
import {DataContext} from "../App";
import {Box, Button, color, FormLabel, Input} from "@chakra-ui/react";
import { Center, Square, Circle } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom";

export const UserPage = () => {
    const context = useContext(DataContext)
    const billName = context.basicData.name
    //const userName = context.basicData.users
    const navigate = useNavigate();

    const [imie,setImie]=useState("")

    const zmianaImie = (event: React.ChangeEvent<HTMLInputElement>)=>{

        setImie(event.currentTarget.value)
    }
    const m=imie
    function createList (){
        fetch(`http://localhost:3010/split/user/bill/`+billName, {
            method: 'GET'}).then(response => users())
        }

const users=[]
    users.push(res)


    const listItems = users.map((user) =>
        <li>{user}</li>
    );
    async function handleClick(){

        await fetch(`http://localhost:3010/split/user/signup`, {

            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({
                "username":m

            })


        })

        singUserToBill()

    }


    async function singUserToBill() {
        await fetch(`http://localhost:3010/split/user/setbill`

    , {method: 'POST',
            mode: 'cors',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({"username":imie,"bill": {"nameBill": context.basicData.name,}})
        })


    }
async function czysc (){
       await setImie("")
}



    return (
        <div>

            <Box borderRadius='md' bg='#D2691E' color='black' px={4} h={20} fontSize={"xxx-large"}
            ><Center>
                <b>Nazwa rachunku:<br/><Center>{billName}</Center></b></Center>
            </Box>
            <Wrapper heading={"Dodaj Użytkownika"}>
                <FormLabel> Wpisz imię</FormLabel>
                <Input
                    type="text" value={imie} onChange={zmianaImie}

                />
                <Button onClick={() => handleClick()/* czysc()*/} colorScheme='blue'>Dodaj użytkownika</Button>
            </Wrapper>
            <div>
<p>Lista użytkowników</p>
                    <ul>{listItems}</ul>

            </div>
        </div>
    )
}