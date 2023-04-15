function Category(props) {
    let data = props.dataC;
    const itemList = data.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>);
    return (

        <>
            <h1>Category</h1>
            <ul>
                {itemList}
            </ul>

        </>
    );
}

export default Category;