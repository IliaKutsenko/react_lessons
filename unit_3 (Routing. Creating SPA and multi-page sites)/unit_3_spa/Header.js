import { Link } from "react-router-dom";

function Header(props) {
    let data = props.dataH;
    const itemList = data.map(item => <li key={item.link}><Link to={item.link}>{item.text}</Link></li>);
    return (
        <>
            <nav>
                <ul>
                    {itemList}
                </ul>
            </nav>
        </>
    );
}

export default Header;