import { Item, ImgWrapper, Properties, TitleWrapper, Title, PriceEl, RatingEl, LocationEl, LocationWrapper, DescriptionEl, DetailsList, DetailsItem, ImgEl, ButtonHeart } from "./FavoriteCamperItem.styled";


import { ReactComponent as IconStar } from "../../assets/icons/star.svg";
import { ReactComponent as IconRedHeart } from "../../assets/icons/red_heart.svg";
import { ReactComponent as IconAdults } from "../../assets/icons/adults.svg";
import { ReactComponent as IconAutomatic } from '../../assets/icons/transmission.svg';
import { ReactComponent as IconPetrol } from "../../assets/icons/engine.svg";
import { ReactComponent as IconKitchen } from "../../assets/icons/kitchen_min.svg";
import { ReactComponent as IconBeds } from "../../assets/icons/beds.svg";
import { ReactComponent as IconAC } from "../../assets/icons/ac_min.svg";
import { ReactComponent as IconLocation } from "../../assets/icons/point_min.svg";

const FavoriteCamperItem = ({
    adults,
    gallery,
    details,
    description,
    reviews,
    location,
    price,
    name,
    itemId,
    onDeleteFavorite }) => {

    const handleLikeClick = (id) => {
        onDeleteFavorite(id);
    };

    let calcRating = 0;
    reviews.map((review) => { return calcRating += review.reviewer_rating })
    const rating = (calcRating / reviews.length).toFixed(1);

    return (
        <Item>
            <ImgWrapper><ImgEl src={gallery[0]} alt={name} /></ImgWrapper>
            <Properties>
                <TitleWrapper>
                    <Title>{name}</Title>
                    <PriceEl>€{price}.00
                        <ButtonHeart onClick={() => handleLikeClick(itemId)}>
                            <IconRedHeart />
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
            </Properties>
        </Item>
    );
};
export default FavoriteCamperItem