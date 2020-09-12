import {useSelector} from "react-redux";
import {generalSelector} from "../redux/selectors/generalSelector";
import {Menu} from "../models/Menu";

const useGeneral = () => {

    const menu : Menu = useSelector(generalSelector.menu);

    return {
        menu
    };

};

export default useGeneral;