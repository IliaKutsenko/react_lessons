function Nav(props) {
    let data = props.nav;
    const itemList = data.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>);
    return (
        <nav>
            <ul className="main-navigation">
                {itemList}
            </ul>
        </nav>
    )
}

export default Nav;