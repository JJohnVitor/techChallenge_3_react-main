import { Link, useNavigate } from "react-router-dom"
import logoMenu from "../../img/Abstract.png"
import iconeUser from "../../img/User.png"
import styles from "./Menu.module.css"



const Menu = () =>{

    const isProfessorPage = window.location.pathname === "/post/professor";

    const navegador = useNavigate()

    return(

        <header>
            <div className={styles.nomeclasse}>
                <img 
                src={logoMenu}
                alt="logo LeanPlus"/>

                <h1>LearnPlus</h1>
            </div>
            <div>
                <ul>

                    <Link to={"/"}>
                        <li >
                            Home
                        </li>
                    </Link>
                    <li>
                    </li>
                    <Link to={"/post/formulario"}>
                        {isProfessorPage && <li >
                            +Adicionar Post
                        </li>}
                    </Link>

                </ul>

            </div>
        </header>

    )
}



export default Menu