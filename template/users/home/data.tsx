import FruitSalad from "../../../assets/svg/icons/carrossel/pana.svg"
import Solidarity from "../../../assets/svg/icons/carrossel/cuate.svg"
import Love from "../../../assets/svg/icons/carrossel/bro.svg"
import Pizza from "../../../assets/svg/icons/carrossel/pizza.svg"
import Box from "../../../assets/svg/icons/button/box-broken.svg"
import Handshake from "../../../assets/svg/icons/button/hand.svg"
import History from "../../../assets/svg/icons/button/history.svg"
import Heart from "../../../assets/svg/icons/button/heart-broken.svg"
import About from "../../../assets/svg/icons/button/about.svg"
import  PDF from "../../../assets/svg/icons/button/PDF.svg"
import User from "../../../assets/svg/icons/button/user.svg"
import Request from "../../../assets/svg/icons/button/request.svg"

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
        icon: Box,
        title: "Entrada",
        path:"/screens/users/merchant/home"
    },
    {
        icon: Handshake,
        title: "Doações",
        path: "/screens/users/merchant/donation"
    },
    {
        icon: History,
        title: "Carrinho",
        path:"/screens/users/merchant/donationCart"
    },
    {
        icon: Heart,
        title: "Impacto social",
        path:"/screens/users/merchant/dashboard"
    },
    {
        icon: About,
        title: "Sobre nós",
        path:"https://www.foodbridge.com.br/"
    },
]

export const dataNGOButtons = [
    {
        icon: PDF,
        title: "Comprov.",
        path:"/screens/users/ngo/home"
    },
    {
        icon: User,
        title: "Perfil",
        path:"/screens/users/ngo/profileNgo"
    },
    {
        icon: Request,
        title: "Solicit.",
        path:"/screens/users/ngo/request"
    },
    {
        icon: Heart,
        title: "Impacto social",
        path:"/screens/users/ngo/dashboard"
    },
        {
        icon: About,
        title: "Sobre nós",
        path:"https://www.foodbridge.com.br/"
    },
    
]