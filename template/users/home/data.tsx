import FruitSalad from "../../../assets/svg/icons/carrossel/pana.svg"
import Solidarity from "../../../assets/svg/icons/carrossel/cuate.svg"
import Love from "../../../assets/svg/icons/carrossel/bro.svg"
import Pizza from "../../../assets/svg/icons/carrossel/pizza.svg"
import MaterialIcons from "node_modules/@react-native-vector-icons/material-icons/lib/typescript/module/src"

export const data = [
    {
        img: <FruitSalad/>,
        title:"Seu gesto alimenta mais que corpos, alimenta corações.",
        description: "Doe alimentos e espalhe solidariedade por onde passar."
    },
       {
        img: <Solidarity/>,
        title:"Leve esperança à mesa de quem precisa.",
        description: "Compartilhe o que você tem, cada refeição doada é um gesto de amor e empatia."
        
    },
       {
        img: <Pizza/>,
        title:"Transforme sobras em sorrisos.",
        description: "Doe alimentos e espalhe solidariedade por onde passar."
    },
       {
        img: <Love/>,
        title:"Doe alimentos e ajude quem precisa.",
        description: "Transforme o que sobra em solidariedade. Cada doação faz diferença."
    },
    
]

export const dataButtons = [
    {
        icon: <MaterialIcons name=""/>
    }
]