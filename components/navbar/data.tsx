import User from "../../assets/svg/icons/button/user.svg"
import UserActive from "../../assets/svg/icons/button/active/user.svg"
import Handshake from "../../assets/svg/icons/button/hand.svg"
import HandshakeActive from "../../assets/svg/icons/button/active/hand.svg"
import History from "../../assets/svg/icons/button/history.svg"
import HistoryActive from "../../assets/svg/icons/button/active/history.svg"
import Home from "../../assets/svg/icons/button/home.svg"
import HomeActive from "../../assets/svg/icons/button/active/home.svg"

export const iconsNavbar = [
    {
        icon: Home,
        active: HomeActive,
        path: "/screens/users/merchant/home"
        
    },
    {
        icon: Handshake,
        active: HandshakeActive,
        path: "/screens/users/merchant/donation"
        
    },
     {
        icon: User,
        active: UserActive
        
    },
    {
        icon: History,
        active: HistoryActive
        
    },
    

]