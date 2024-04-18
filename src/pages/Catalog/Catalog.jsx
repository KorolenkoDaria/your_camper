import Container from "../../components/Container/Container";
import CampersList from "../../components/CampersList/CampersList";
import Sidebar from "../../components/Sidebar/Sidebar"
import { CatalogWrapper } from "./Catalog.styled";
const Catalog = () => {
    return (
        <Container>
            <CatalogWrapper>
                <Sidebar />
                <CampersList />
            </CatalogWrapper>
        </Container>
    )
}

export default Catalog;
