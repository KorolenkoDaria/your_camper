import Location from "../Location/Location";
import Filters from "../Filters/Filters";

import { Wrapper } from "./Sidebar.styled"

const Sidebar = () => {
    return (
        <Wrapper>
            <Location />
            <Filters />
        </Wrapper>
    )
}

export default Sidebar