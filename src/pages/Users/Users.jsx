import { useSelector, useDispatch } from "react-redux"
import { getData } from "../../features/users.js"

export default function Users() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    console.log(users);

    if(!users.data && !users.loading && !users.error){
        dispatch(getData())
    }
    return (
        <div>Users</div>
    )
}
