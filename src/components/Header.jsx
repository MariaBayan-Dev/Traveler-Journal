import { FaGlobeEurope } from "react-icons/fa";

export default function Header(){
    return(
        <header>
            <FaGlobeEurope className="header__icon"/>
            <h1 className="header__title">my travel journal.</h1>
        </header>
    )
}