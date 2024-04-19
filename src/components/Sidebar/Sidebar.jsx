import Location from "../Location/Location";
import Filters from "../Filters/Filters";
import Button from "../Button/Button"

import { Wrapper } from "./Sidebar.styled"

const Sidebar = () => {
    return (
        <Wrapper>
            <Location />
            <Filters />
            <Button>Search</Button>
        </Wrapper>
    )
}

export default Sidebar