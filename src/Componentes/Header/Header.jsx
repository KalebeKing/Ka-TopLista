
import LogoImage from '../../assets/logo.svg.png'
import './Header.styles.css'

const Header = () => {
    return(
        <header className='header'>
            <div>
                <img className='div-imagelogo' src={LogoImage} alt='Logotipo minha lista' />         
                </div>
        </header>
)
}



export default Header