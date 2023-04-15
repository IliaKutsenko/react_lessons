import { useDispatch } from "react-redux";
import addNewUsers from "../action";

const AddUser = () => {
    const dispatch = useDispatch();

    const fromHandler = (event) => {
        event.preventDefault();
        let data = event.target.elements;
        dispatch(addNewUsers(data.passport.value, data.name.value, data.age.value));
    }

    return (
        <div>
            <form onSubmit={fromHandler}>
                <div>
                    <input type="text" name="passport" defaultValue="123456"></input>
                </div>
                <div>
                    <input type="text" name="name" defaultValue="III"></input>
                </div>
                <div>
                    <input type="text" name="age" defaultValue="255"></input>
                </div>
                <button type="submit">Add User</button>
            </form>
        </div >
    )
}

export default AddUser;