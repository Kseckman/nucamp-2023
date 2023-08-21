import { Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
          <NavbarBrand>
            <NavbarBrand href='/'>
              <img src={NucampLogo} alt='nucamp logo' />
            </NavbarBrand>
          </NavbarBrand>
       </Navbar>
    )
}

export default Header