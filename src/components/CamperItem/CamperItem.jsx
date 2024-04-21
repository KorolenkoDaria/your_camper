
import { useState } from "react";

import { Item, ImgWrapper, Properties, TitleWrapper, Title, PriceEl, RatingEl, LocationEl, LocationWrapper, DescriptionEl, DetailsList, DetailsItem, ImgEl, ButtonHeart } from "./CamperItem.styled";

import Button from "../Button/Button";
import { useModal } from "../../context/ModalContext";


import { ReactComponent as IconStar } from "../../assets/icons/star.svg";
import { ReactComponent as IconHeart } from "../../assets/icons/heart.svg";
import { ReactComponent as IconRedHeart } from "../../assets/icons/red_heart.svg";
import { ReactComponent as IconAdults } from "../../assets/icons/adults.svg";
import { ReactComponent as IconAutomatic } from '../../assets/icons/transmission.svg';
import { ReactComponent as IconPetrol } from "../../assets/icons/engine.svg";
import { ReactComponent as IconKitchen } from "../../assets/icons/kitchen_min.svg";
import { ReactComponent as IconBeds } from "../../assets/icons/beds.svg";
import { ReactComponent as IconAC } from "../../assets/icons/ac_min.svg";
import { ReactComponent as IconLocation } from "../../assets/icons/point_min.svg";

const CamperItem = ({
    adults,
    transmission,
    engine,
    gallery,
    details,
    description,
    reviews,
    location,
    price,
    name,
    itemId,
    isFavorite }) => {
    const [IsLiked, setIsLiked] = useState(isFavorite);
    const { openModal } = useModal();


    const handleLikeClick = (id) => {
        const storedItems = JSON.parse(localStorage.getItem('storedItems')) || [];
        const index = storedItems.indexOf(id);
        if (index !== -1) {
            storedItems.splice(index, 1);
            setIsLiked(false);
        } else {
            storedItems.push(id);
            setIsLiked(true);
        }
        localStorage.setItem('storedItems', JSON.stringify(storedItems));
    };

    let calcRating = 0;
    reviews.map((review) => { return calcRating += review.reviewer_rating })
    const rating = (calcRating / reviews.length).toFixed(1);

    const handleOpenModal = (id) => {
        openModal(id)
    }

    return (
        <Item>
            <ImgWrapper><ImgEl src={gallery[0]} alt={name} /></ImgWrapper>
            <Properties>
                <TitleWrapper>
                    <Title>{name}</Title>
                    <PriceEl>€{price}.00
                        <ButtonHeart onClick={() => handleLikeClick(itemId)}>
                            {IsLiked ? <IconRedHeart /> : <IconHeart />}
                        </ButtonHeart>
                    </PriceEl>
                </TitleWrapper>
                <LocationWrapper>
                    <RatingEl><IconStar />{`${rating}(${reviews.length} Reviews)`}</RatingEl>
                    <LocationEl>
                        <IconLocation /> {location.split(",").reverse().join(", ")}
                    </LocationEl>
                </LocationWrapper>
                <DescriptionEl>{description}</DescriptionEl>
                <DetailsList>
                    <DetailsItem><IconAdults />{`${adults} adults`}</DetailsItem>
                    <DetailsItem><IconAutomatic />Automatic</DetailsItem>
                    <DetailsItem><IconPetrol />Petrol</DetailsItem>
                    <DetailsItem><IconKitchen />Kitchen</DetailsItem>
                    <DetailsItem><IconBeds />{`${details.beds} beds`}</DetailsItem>
                    <DetailsItem><IconAC />AC</DetailsItem>
                </DetailsList>
                <Button onClick={() => handleOpenModal(itemId)}>Show more</Button>
            </Properties>
        </Item>
    )
}

export default CamperItem;