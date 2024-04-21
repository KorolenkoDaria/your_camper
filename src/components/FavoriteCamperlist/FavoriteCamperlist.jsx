import { ListEl, Title } from "./FavoriteCamperlist.styled"

import { useEffect, useState } from "react";
import FavoriteCamperItem from "../FavoriteCamperItem/FavoriteCamperItem";
import { useSelector } from "react-redux";


const FavoriteCamperlist = () => {
    const campers = useSelector(state => state.campers.campers);
    const [stored, setStored] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('storedItems')) || [];
        setStored(storedItems);
    }, []);

    useEffect(() => {
        const handleStorageChange = () => {
            const storedItems = JSON.parse(localStorage.getItem('storedItems')) || [];
            setStored(storedItems);
        };
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleDeleteFavorite = (id) => {
        const updatedItems = stored.filter(itemId => itemId !== id);
        setStored(updatedItems);
        localStorage.setItem('storedItems', JSON.stringify(updatedItems));
    };
    const favoriteCampers = campers.filter(camper => stored.includes(camper._id));

    return (
        <>
            {favoriteCampers.length > 0 ? (
                <ListEl>
                    {favoriteCampers.map((camper) =>
                        <FavoriteCamperItem
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
                            isFavorite={stored.includes(camper._id)}
                            onDeleteFavorite={handleDeleteFavorite}
                        />
                    )}
                </ListEl>
            ) : (
                <Title>Favorite list is empty</Title>
            )}
        </>
    )
}

export default FavoriteCamperlist