import { CatalogWrapper, ListStyle, ButtonEl } from "./CampersList.styled";

import CamperItem from "../CamperItem/CamperItem";

import { fetchCampers } from "../../redux/operations";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CampersList = () => {
    const dispatch = useDispatch();
    const campers = useSelector(state => state.campers.campers);
    const [visibleItems, setVisibleItems] = useState(4);
    const [allItemsShown, setAllItemsShown] = useState(false);

    const storedItems = JSON.parse(localStorage.getItem('storedItems')) || [];

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    const handleLoadMore = () => {
        setVisibleItems(prev => prev + 4);
    };

    useEffect(() => {
        if (visibleItems >= campers.length) {
            setAllItemsShown(true);
        }
    }, [visibleItems, campers.length]);

    return (
        <CatalogWrapper>
            <ListStyle>
                {campers.slice(0, visibleItems).map((camper) =>
                    <CamperItem
                        key={camper._id}
                        itemId={camper._id}
                        name={camper.name}
                        price={camper.price}
                        location={camper.location}
                        reviews={camper.reviews}
                        description={camper.description}
                        details={camper.details}
                        gallery={camper.gallery}
                        engine={camper.engine}
                        transmission={camper.transmission}
                        adults={camper.adults}
                        isFavorite={storedItems.includes(camper._id)} // Проверяем, является ли элемент избранным
                    />
                )}
            </ListStyle>
            {allItemsShown && <ButtonEl onClick={handleLoadMore}>Load more</ButtonEl>}
        </CatalogWrapper>
    )
}

export default CampersList