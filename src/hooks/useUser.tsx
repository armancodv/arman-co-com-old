import {useSelector} from "react-redux";
import {userSelector} from "../redux/selectors/userSelector";
import {User} from "../models/User";

const useUser = () => {

    const user : User = useSelector(userSelector.user);

    return {
        user
    };

};

export default useUser;