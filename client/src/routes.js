import { HOME_ROUTE, ABOUT_ROUTE, RANKINGS_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE, USER_PANEL_ROUTE, DOWNLOAD_ROUTE, GUIDE_ROUTE, CHARACTER_CARD_ROUTE, REGISTRATION_SUCCESS, ACCOUNT_CHARACTERS_ROUTE, GUIDE_ROUTER, ACCOUNT_CHARACTERS_GR_ROUTE, REGAIN_PASSWORD_ROUTE, REGAIN_PASSWORD_SUCCESS_ROUTE, ACCOUNT_INFO_ROUTE, ACCOUNT_VIP_ROUTE } from "./utils/constants";
import Home from "./pages/Home";
import About from "./pages/About";
import Registration from "./pages/Registration";
import Rankings from "./pages/Rankings";
import Download from "./pages/Download";
import Guide from "./pages/Guide";
import CharacterCard from "./pages/pagesComponents/RankingsComp/CharacterCard";
import RegSuccess from "./pages/pagesComponents/RegistrationComp/RegSuccess";
import AccountCharacters from "./pages/pagesComponents/accountCharacters/AccountCharacters";
import GrandReset from "./pages/pagesComponents/GrandResetComponents/GrandReset";
import RegainPassword from "./components/RegainPassword";
import RegainPassSuccess from "./components/RegainPassSuccess";
import AccountInfo from "./pages/pagesComponents/AccountInfoComponent/AccountInfo";
import BuyVip from "./components/modals/userPanel/Vip/BuyVip";

export const authRoutes = [
    {
        path: ACCOUNT_CHARACTERS_ROUTE,
        Component: AccountCharacters
    },
    {
        path: ACCOUNT_CHARACTERS_GR_ROUTE,
        Component: GrandReset
    },
    {
        path: ACCOUNT_INFO_ROUTE,
        Component: AccountInfo
    },
    {
        path: ACCOUNT_VIP_ROUTE,
        Component: BuyVip
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: DOWNLOAD_ROUTE,
        Component: Download
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: REGISTRATION_SUCCESS,
        Component: RegSuccess
    },
    {
        path: GUIDE_ROUTE + '/*',
        Component: Guide
    },
    {
        path: RANKINGS_ROUTE,
        Component: Rankings
    },
    {
        path: REGAIN_PASSWORD_ROUTE,
        Component: RegainPassword
    },
    {
        path: REGAIN_PASSWORD_SUCCESS_ROUTE,
        Component: RegainPassSuccess
    },
    {
        path: CHARACTER_CARD_ROUTE + '/:id',
        Component: CharacterCard
    },
    
]