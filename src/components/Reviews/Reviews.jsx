import { Wrapper, ReviewsList, ReviewsItem, ReviewsWrapper, TitleWrapper, Avatar, Reviewer, ReviewerName, Rating, Comment } from "./Reviews.styled"
import { ReactComponent as IconStar } from "../../assets/icons/star.svg";
const Reviews = ({ reviews }) => {
    return (
        <Wrapper>
            <ReviewsList>{reviews.map((review) =>
                <ReviewsItem>
                    <ReviewsWrapper>
                        <TitleWrapper>
                            <Avatar>{review.reviewer_name[0]}</Avatar>
                            <Reviewer>
                                <ReviewerName>{review.reviewer_name}</ReviewerName>
                                <Rating>{Array.from({ length: review.reviewer_rating }, (_, index) => (
                                    <IconStar key={index} />
                                ))}</Rating>
                            </Reviewer>
                        </TitleWrapper>
                        <Comment>{review.comment}</Comment>
                    </ReviewsWrapper>
                </ReviewsItem>
            )}
            </ReviewsList>
        </Wrapper>
    )
}
export default Reviews;
