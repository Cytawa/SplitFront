import {Wrapper} from "./Wrapper";
import React, {useContext, useState,} from "react";
import {DataContext} from "../App";
import {Box, Button, color, FormLabel, Input} from "@chakra-ui/react";
import {Center} from '@chakra-ui/react'
import {useNavigate} from "react-router-dom";
import {UserData} from "../models/UserData";

export const UserPage = () => {
    const context = useContext(DataContext)
    const billName = context.basicData.name
    const [imie, setImie] = useState("")
    const navigate=useNavigate()
    const zmianaImie = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImie(event.currentTarget.value)

    }


   // context.basicData.users.push(imie)


    //const m=imie
    //  function createList (){
    //    fetch(`http://localhost:3010/split/user/bill/`+billName, {
    //       method: 'GET'}).then(response => users())
    //   }
    //  users.push(response)
    async function handleClick() {
        await fetch(`http://localhost:3011/split/user/signup`, {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({
                "username": imie
            })
        })

        await singUserToBill()
        context.basicData.users.push(imie)
        await czysc()
    }
    async function singUserToBill() {
        await fetch(`http://localhost:3011/split/user/setbill`

            , {
                method: 'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({"username": imie, "bill": {"nameBill": context.basicData.name,}})
            })
    }

    async function czysc() {
        setImie("")
    }



    return (
        <div>

            <Box borderRadius='md' bg='#D2691E' color='black' px={4} h="100vh" fontSize={"xxx-large"} float={"left"} w="50vh"
            ><Center>
                <b>Nazwa rachunku:<br/>{billName}</b></Center>
            </Box><Box bg='#D2691E' float={"right" } w="50vh" borderRadius='md' fontSize={"xx-large"} h="100vh"><div>
            <b>Lista użytkowników: </b>
            {context.basicData.users.map((a)=>{
                return (<li>{a}</li>)
            })}

        </div></Box>
            <Wrapper heading={"Dodaj Użytkownika"}>
                <FormLabel> Wpisz imię</FormLabel>
                <Input
                    type="text" value={imie} onChange={zmianaImie}

                />
                <Button onClick={() => handleClick()} colorScheme='green' bg='#D2691E'>Dodaj użytkownika </Button>
                <Button onClick={()=>navigate("../expense")} colorScheme='green' bg='#D2691E'>Dodaj Wydatek</Button>

            </Wrapper>

        </div>
    )
}