import React from "react";
import styled, { keyframes } from "styled-components/macro";
import PropTypes from "prop-types";
import Rating from "@material-ui/lab/Rating";

Review.propTypes = {
  reviews: PropTypes.array
};

export default function Review({ reviews }) {
  return (
    <ReviewPageStyled>
      <StarRatingStyled>
        <Bar value={String(calcRating(5) + "%")} />
        <RatingPerStyled>
          <RatingBarStyled name="rating" value={5} readOnly />
          <p style={{ padding: "1px 5px", margin: 0 }}>
            <strong>{calcRating(5)}%</strong>
          </p>
        </RatingPerStyled>
        <Bar value={String(calcRating(4) + "%")} />
        <RatingPerStyled>
          <RatingBarStyled name="rating" value={4} readOnly />
          <p style={{ padding: "1px 5px", margin: 0 }}>
            <strong>{calcRating(4)}%</strong>
          </p>
        </RatingPerStyled>
        <Bar value={String(calcRating(3) + "%")} />
        <RatingPerStyled>
          <RatingBarStyled name="rating" value={3} readOnly />
          <p style={{ padding: "1px 5px", margin: 0 }}>
            <strong>{calcRating(3)}%</strong>
          </p>
        </RatingPerStyled>
        <Bar value={String(calcRating(2) + "%")} />
        <RatingPerStyled>
          <RatingBarStyled name="rating" value={2} readOnly />
          <p style={{ padding: "1px 5px", margin: 0 }}>
            <strong>{calcRating(2)}%</strong>
          </p>
        </RatingPerStyled>
        <Bar value={String(calcRating(1) + "%")} />
        <RatingPerStyled>
          <RatingBarStyled name="rating" value={1} readOnly />
          <p style={{ padding: "1px 5px", margin: 0 }}>
            <strong>{calcRating(1)}%</strong>
          </p>
        </RatingPerStyled>
      </StarRatingStyled>

      {reviews.map(review => (
        <ShowReviews key={review._id} {...review} />
      ))}
    </ReviewPageStyled>
  );

  function calcRating(rating) {
    return Math.ceil(
      (reviews.filter(item => item.rating === rating).length / reviews.length) *
        100
    );
  }
}

function ShowReviews({ review, rating }) {
  return (
    <WrapperReview>
      <ReviewStyled>
        <ImgStyled src="https://source.unsplash.com/random" alt="face" />
        <RatingStyled name="rating" value={rating} readOnly />
        <p>{review}</p>
      </ReviewStyled>
    </WrapperReview>
  );
}

function Bar({ value }) {
  const barStyle = {
    width: value,
    height: "20px",
    backgroundColor: "gold",
    borderRadius: "0.5rem",
    textAlign: "center"
  };
  return <div style={barStyle} />;
}

const ReviewStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.theme.mode === "dark" ? "#F9F6F2" : "")};
  padding: 20px;
  margin: 50px 20px 5px 40px;
  border-radius: 0.8rem;
  box-shadow: 0 5px 10px gray;
  color: black;
`;

const RatingStyled = styled(Rating)`
  display: flex;
  justify-content: flex-end;
`;

const RatingBarStyled = styled(Rating)`
  display: flex;
  justify-content: flex-end;
  top: -3px;
`;

const ImgStyled = styled.img`
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  top: -40px;
  left: -35px;
  border: 1px solid
    ${props => (props.theme.mode === "dark" ? "#ffb930" : "#721313")};
`;

const WrapperReview = styled.div`
  /* margin: 15px; */
`;

const StarRatingStyled = styled.section`
  display: grid;
  grid-template-columns: 6fr 1fr;
  grid-column-gap: 5px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 10px;
`;

const RatingPerStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

const PageTransitionIn = keyframes`
from {
    opacity: 0;
    transform: translateY(100px);
}
to{
    opacity: 1,
    transform: translateY(0px)
}
`;

const ReviewPageStyled = styled.div`
  animation: ${PageTransitionIn} 0.75s ease-in;
`;
