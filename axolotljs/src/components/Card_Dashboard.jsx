import { Link } from 'react-router-dom';
import '../styles.css/main.css'


function Card_Dashboard () {
    return(
        <div className="grid-containerr">
            <div className="item1">
                <h4 className='tittle-card'>Portafolio </h4>
                <br />
                <p className='p_card'>Lorem ipsum dolor sit amet  consectetur adipiscing elit. </p>
                <div>
                <Link to="/ejercicios">
                    <button className='button1'>Explora</button>
                </Link>
                </div>
            </div>
            <div className="item2">
                <h4 className='tittle-card'>Blog </h4>
                <br />
                <p className='p_card'>Lorem ipsum dolor sit amet consectetur adipiscing elit. </p>
            <div>
                <Link to="/blog">
                    <button className='button1'>Explora</button>
                </Link>
                 </div>
            </div>
            <div className="item3">
                <h4 className='tittle-card'>Contacto </h4>
                <br />
                <p className='p_card'>Lorem ipsum dolor sit amet consectetur adipiscing elit. </p>
                <Link to="/blog">
                    <button className='button1'>Explora</button>
                </Link>
            </div>

        </div>
    )
}

export default Card_Dashboard;