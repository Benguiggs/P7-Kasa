
import { Link } from "react-router-dom";

export  default function ErrorPage() {
  return (
   <section className="error_page">
    <h2 className="error_title">404</h2>
    <p> Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/" className="error_homepage">
      Retourner sur la page d'accueil
    </Link>
   </section>
  );
}

