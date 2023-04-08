import { Link, Outlet } from 'react-router-dom';
import '../styles.css/main.css'

function Nav_bar () {
    return(
        
        <div className="nav_Container">
            <ul className='list_Nav'>
                <Link className='axo' to="/">AXOLOTL</Link>
                <li>
                <Link className='link_1' to="/">Home</Link>
                </li>

                <li>
                    <Link className='link_2' to="/ejercicios">Ejercicios</Link>
                </li>

                <li>
                    <Link className='link_3' to="/blog">Blog</Link>
                </li>

                <li>
                    <Link className='link_3' to="/contacto">Contacto</Link>
                </li>

            </ul>

            <>
                <Outlet/>
            </>
        </div>

        
        )
        


}

export default Nav_bar;