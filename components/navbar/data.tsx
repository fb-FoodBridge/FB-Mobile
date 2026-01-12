import User from "../../assets/svg/icons/button/user.svg"
import UserActive from "../../assets/svg/icons/button/active/user.svg"
import Handshake from "../../assets/svg/icons/button/hand.svg"
import HandshakeActive from "../../assets/svg/icons/button/active/hand.svg"
import History from "../../assets/svg/icons/button/history.svg"
import HistoryActive from "../../assets/svg/icons/button/active/history.svg"
import Home from "../../assets/svg/icons/button/home.svg"
import HomeActive from "../../assets/svg/icons/button/active/home.svg"
import Request from "../../assets/svg/icons/button/request.svg"
import RequestActive from "../../assets/svg/icons/button/active/request.svg"
import PDF from "../../assets/svg/icons/button/PDF.svg"
import PDFActive from "../../assets/svg/icons/button/active/PDF.svg"

 
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

export const iconsNavbarNGO = [
    {
        icon: Home,
        active: HomeActive,
        path: "/screens/users/merchant/home"
        
    },
     {
        icon: User,
        active: UserActive
        
    },
    {
        icon: Request,
        active: RequestActive,
        path: "/screens/users/ngo/request"
        
    },
    
    {
        icon: PDF,
        active: PDFActive
        
    },
    

]