import { ModalContext } from '../../context/ModalContext';
import { useState, useContext } from "react";

import { Item, ImgWrapper, Properties, TitleWrapper, Title, PriceEl, RatingEl, LocationEl, LocationWrapper, DescriptionEl, DetailsList, DetailsItem, ImgEl, ButtonHeart } from "./CamperItem.styled";

import Button from "../Button/Button";
import ModalCamper from "../ModalCamper/ModalCamper";


import { ReactComponent as IconStar } from "../../assets/icons/star.svg";
import { ReactComponent as IconHeart } from "../../assets/icons/heart.svg";
import { ReactComponent as IconRedHeart } from "../../assets/icons/red_heart.svg";
import { ReactComponent as IconAdults } from "../../assets/icons/adults.svg";
import { ReactComponent as IconAutomatic } from '../../assets/icons/automatic_min.svg';
import { ReactComponent as IconPetrol } from "../../assets/icons/petrol.svg";
import { ReactComponent as IconKitchen } from "../../assets/icons/kitchen_min.svg";
import { ReactComponent as IconBeds } from "../../assets/icons/beds.svg";
import { ReactComponent as IconAC } from "../../assets/icons/ac_min.svg";

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
    id,
    key }) => {
    const [isLiked, setIsLiked] = useState(false);
    const { openModal } = useContext(ModalContext);


    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    let calcRating = 0;
    reviews.map((review) => { return calcRating += review.reviewer_rating })
    const rating = (calcRating / reviews.length).toFixed(1);

    const handleClickButton = () => {
        openModal(<ModalCamper />)
    }

    return (
        <Item>
            <ImgWrapper><ImgEl src={gallery[0]} alt={name} /></ImgWrapper>
            <Properties>
                <TitleWrapper>
                    <Title>{name}</Title>
                    <PriceEl>€{price}.00
                        <ButtonHeart onClick={handleLikeClick}>
                            {isLiked ? <IconRedHeart /> : <IconHeart />}
                        </ButtonHeart>
                    </PriceEl>
                </TitleWrapper>
                <LocationWrapper>
                    <RatingEl><IconStar />{`${rating}(${reviews.length} Reviews)`}</RatingEl>
                    <LocationEl>
                        {location.split(",").reverse().join(", ")}
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
                <Button onClick={handleClickButton}>Show more</Button>
            </Properties>
        </Item>
    )
}

export default CamperItem;