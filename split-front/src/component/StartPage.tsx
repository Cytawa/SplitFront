import {Wrapper} from "./Wrapper";
import {FormLabel, Input} from "@chakra-ui/react";
import {DataContext} from "../App";
import {useContext} from "react";

export const StartPage = () => {
    const context = useContext(DataContext);
    const onNameChanged = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        context.dataModifier({
            ...context.basicData,
            name: event.currentTarget.value,
        });
    };

    return(
        <Wrapper heading={"Stwórz swój rachunek"}>

            <FormLabel>Wpisz nazwe</FormLabel>
            <Input
                type="text"
               value={context.basicData.name}
                onChange={onNameChanged}

            />




        </Wrapper>



    )
}