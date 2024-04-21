import { Backdrop, ModalWrapper, ScrollContainer, Title, GalleryImg, GalleryItem, GalleryWrapper, Description, ContentWrapper, ButtonEl, RatingEl, LocationEl, WrapperLoc, PriceEl, Tab, TabWrapper, SectionEl } from "./ModalCamper.styled";
import { useModal } from "../../context/ModalContext";
import { useState } from 'react';
import { useSelector } from "react-redux";

import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import FormModal from "../FormModal/FormModal";

import { ReactComponent as IconClose } from "../../assets/icons/close.svg";
import { ReactComponent as IconStar } from "../../assets/icons/star.svg";
import { ReactComponent as IconLocation } from "../../assets/icons/point_min.svg";


const ModalCamper = ({ itemId }) => {
    const { isModalOpen, closeModal } = useModal();

    const [activeTab, setActiveTab] = useState('Features');

    const campers = useSelector(state => state.campers.campers);
    const camper = campers.find(camper => camper._id === itemId);

    const { name, reviews, location, price, gallery, description
    } = camper;



    let calcRating = 0;
    reviews.map((review) => { return calcRating += review.reviewer_rating });
    const rating = (calcRating / reviews.length).toFixed(1);

    document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
            closeModal()
        }
    })
    return (
        <>
            {isModalOpen && (< Backdrop onClick={closeModal}  >
                <ModalWrapper >

                    <ButtonEl onClick={closeModal}><IconClose /></ButtonEl>
                    <Title>{name}</Title>
                    <WrapperLoc>
                        <RatingEl><IconStar /> {`${rating}(${reviews.length} Reviews)`}</RatingEl>
                        <LocationEl><IconLocation /> {location.split(",").reverse().join(", ")}</LocationEl>
                    </WrapperLoc>
                    <PriceEl>€{price}.00</PriceEl>
                    <ScrollContainer className="scroll">
                        <ContentWrapper>
                            <GalleryWrapper>
                                {gallery.map((el) => (<GalleryItem><GalleryImg key={el._id} src={el} alt={name} /></GalleryItem>))}
                            </GalleryWrapper>
                            <Description>{description}</Description>
                        </ContentWrapper>
                        <TabWrapper>
                            <Tab active={activeTab === 'Features'} onClick={() => setActiveTab('Features')}>Features</Tab>
                            <Tab active={activeTab === 'Reviews'} onClick={() => setActiveTab('Reviews')}>Reviews</Tab>
                        </TabWrapper>
                        <SectionEl>{activeTab === 'Features' ? <Features camper={camper} /> : <Reviews reviews={reviews} />}
                            <FormModal></FormModal>
                        </SectionEl>
                    </ScrollContainer>
                </ModalWrapper>

            </Backdrop >)
            }
        </>
    )
}
export default ModalCamper;