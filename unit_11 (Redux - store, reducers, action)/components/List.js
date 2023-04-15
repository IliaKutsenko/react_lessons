const List = (data) => {
    return (
        <div>
            <ul>
                {data.user.map(item => <li key={item.name}>{item.name} {item.passport} {item.age}</li>)}
            </ul>
        </div>
    )
}

export default List;