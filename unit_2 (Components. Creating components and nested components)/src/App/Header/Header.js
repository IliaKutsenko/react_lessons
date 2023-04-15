import Nav from "./Nav";

function Header(props) {
    return (
        <header>
            <h1>{props.site_name}</h1>
            <h2>{props.site_title}</h2>
            <Nav nav={props.data.nav}></Nav>
        </header>
    )
}

export default Header;