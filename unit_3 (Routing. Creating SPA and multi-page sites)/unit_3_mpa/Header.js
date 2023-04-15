
function Header(props) {
    let data = props.dataH;
    const itemList = data.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>);
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