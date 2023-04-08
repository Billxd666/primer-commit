import { Link } from "react-router-dom";
import '../styles.css/main.css'



function Footer () {
    return(
        <div className="footer_Main">
        <div className="footer_Container1">
            <Link className="footer_link1" to="/">Axolotl</Link>
        </div>

        <div className="footer_Container2">

            <ul className="list_footer">
                <li>
                    <Link className="footer_link1" to="/">Inicio</Link>
                </li>

                <li>
                    <Link className="footer_link2" to="/ejercicios">Ejercicios</Link>
                </li>

                <li>
                    <Link className="footer_link1" to="blog">Blog</Link>
                </li>

                <li>
                    <Link className="footer_link1" to="contacto" >Contacto</Link>
                </li>

            </ul>
        </div>
    </div>
    )
}

export default Footer;