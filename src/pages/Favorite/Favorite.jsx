import Container from "../../components/Container/Container";
import FavoriteCamperlist from "../../components/FavoriteCamperlist/FavoriteCamperlist"

import { FavoriteWrapper } from "./Favorite.styled";

/* 
import { useState, useEffect } from "react"; */

const Favorite = () => {

    return (
        <Container>
            <FavoriteWrapper>
                <FavoriteCamperlist />
            </FavoriteWrapper>

        </Container>
    )
}
export default Favorite;
