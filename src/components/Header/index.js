import './style.css';   
import Logo from '../../components/Logo';
import HeaderOptions from '../../components/HeaderOptions';
import HeaderIcons from '../../components/HeaderIcons';

function Header() {
    return (
        <header className="App-header">
            <Logo/><HeaderOptions/><HeaderIcons/>
       </header> 
    )
}

export default Header;