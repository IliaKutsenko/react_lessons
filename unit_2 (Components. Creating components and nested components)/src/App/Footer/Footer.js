import Nav from "../Header/Nav";

function Footer(props) {
    return (
        <footer>
            <h3>{props.site_name}</h3>
            <Nav nav={props.data.nav}></Nav>
        </footer>
    )
}

export default Footer;