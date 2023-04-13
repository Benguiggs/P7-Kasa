import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo_b&w.png";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <Link to="/">
                <img src={logo} alt="Kasa" className="footer__logo" />
            </Link>
            <div className="footer__text">
            © {currentYear} Kasa. All rights reserved
            </div>
        </footer>
    );
}