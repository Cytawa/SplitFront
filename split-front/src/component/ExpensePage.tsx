import {Box, Button, Center, Checkbox, FormLabel, Input, Select, Stack} from "@chakra-ui/react";
import React, {useContext, useEffect, useState} from "react";
import {DataContext} from "../App";
import {useNavigate} from "react-router-dom";


export const ExpensePage = () => {
    const context = useContext(DataContext)
    const billName = context.basicData.name
    const billSum = context.basicData.sum
    const [wydatek, setWydatek] = useState({
        nameExpense: "",
        sum: 0,
        whoPay: '',
        whoUse: [{username: ''}]
    })
    const navigate = useNavigate()
    const zmianaNazwy = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setWydatek({...wydatek, nameExpense: event.currentTarget.value})
    }
    const zmianaCeny = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setWydatek({...wydatek, sum: event.currentTarget.valueAsNumber})
    }
    const zmianaWhoPay = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setWydatek({
            ...wydatek,
            whoPay: event.currentTarget.value,
        });
    };

    async function addToContext(a: string) {
        wydatek.whoUse.push({username: a})

    }


    async function handleClick() {

        await fetch(`http://localhost:3011/split/expense`

            , {
                method: 'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({
                    "nameExpanse": wydatek.nameExpense,
                    "sumExpense": wydatek.sum,
                    "whoPay": wydatek.whoPay,
                    "users": wydatek.whoUse
                })
            })
        await setExptoBill();
        await setExptoUser()
    }

    async function setExptoBill() {
        await fetch(`http://localhost:3011/split/expense/setbill/${wydatek.nameExpense}/${context.basicData.name}`

            , {
                method: 'PATCH',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'}
            })

    }
    async function setExptoUser(){
        await fetch(`http://localhost:3011/split/user/setexp/${wydatek.whoUse}/{expname})
        
    }


    return (
        <div>

            <Box borderRadius='md' bg='#D2691E' color='black' px={4} h="100vh" fontSize={"xxx-large"} float={"left"}
                 w="50vh"
            ><Center>
                <b>Nazwa rachunku:<br/>{billName}<br/>Suma: {billSum}</b> </Center>
            </Box>

            <Box bg='#D2691E' float={"right"} w="50vh" borderRadius='md' fontSize={"xx-large"} h="100vh">
                <div>
                    <b>Kto Skorzystał: </b>
                    {context.basicData.users.map((aa) => {
                        return (<li><Checkbox onSelect={() => addToContext(aa)}>{aa}</Checkbox></li>)
                    })}

                </div>
            </Box>
            <Stack borderRadius='md' bg='#F2BA39'>
                <Box h="20vh" borderRadius='md'><Center bg='#D2691E' display={"flex"}>
                    <FormLabel margin={2}> Nazwa</FormLabel><Input type="text" value={wydatek.nameExpense}
                                                                   onChange={zmianaNazwy}/>
                    <FormLabel margin={2}> Suma</FormLabel><Input type="number" value={wydatek.sum}
                                                                  onChange={zmianaCeny}/>
                    <FormLabel margin={2}> Kto Płaci</FormLabel>
                    <Select placeholder="Wybierz kto płaci" onChange={zmianaWhoPay}>
                        {context.basicData.users.map((a) => (
                            <option value={a}>{a}</option>


                        ))}
                    </Select>
                </Center>
                    <Center margin={2} bg='#F2BA39'><Button onClick={() => handleClick()} colorScheme='green'
                                                            bg='#D2691E'>Dodaj wydatek </Button></Center>
                </Box>
                <Box h="70vh" borderRadius='md'>
                    <Center>
                        <p>Lista wydatków:<br/>
                            {wydatek.nameExpense}<br/>
                            {wydatek.sum}<br/>
                            {wydatek.whoPay}
                            {wydatek.whoUse.map((b) => (<li>{b.username}</li>))}
                            {wydatek.whoUse.map((b) => (<li>{b.username}</li>))}
                            {wydatek.whoUse.map((b) => (<li>{b.username}</li>))}
                        </p>
                    </Center>
                </Box>
                <Box h="10vh" borderRadius='md'><Center>
                    <Button colorScheme='green' bg='#D2691E'>Podsumowanie</Button>
                </Center>
                </Box>
            </Stack>

        </div>

    )
}