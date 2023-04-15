import { Link } from "react-router-dom";

function Category(props) {
    let data = props.dataC;
    const itemList = data.map(item => <li key={item.link}><Link to={item.link}>{item.text}</Link></li>);
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