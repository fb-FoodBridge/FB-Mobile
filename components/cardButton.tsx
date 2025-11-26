import { propsCardButton } from "interface/interfaces";
import { ButtonStyle } from "ui/button";

export function CardButton({...props}:propsCardButton) {
    return(
        <ButtonStyle children={props.children} bg="bg-yellowOrange" rouded="rounded-[24px]" size=" w-full h-[154px]" onPress={props.onPress} />
    )

}