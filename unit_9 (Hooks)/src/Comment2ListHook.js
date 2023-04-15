import React, { useState, useEffect } from "react";

function Comment2ListHook(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('effect');
        if (props.data.length > 0) setData(props.data);
    }, [props]);

    const onlyEven = () => {
        let a = data;
        let evenPost = a.filter((item, index) => {
            if (index % 2 == 0) {
                console.log(item)
                return item
            }
        })
        setData(evenPost);
    }

    return (
        <div>
            <div>
                <button onClick={onlyEven}>Only even comments</button>
            </div>
            {data.map((el, index) => (
                <section key={el.id}>
                    <p><b>{index + 1}. {el.email}</b></p>
                    <p>{el.body}</p>
                </section>
            ))}
        </div>
    );
}

export default Comment2ListHook;