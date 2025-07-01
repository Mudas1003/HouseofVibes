import React, { useState } from 'react';
import styled from 'styled-components';

const fashionReviews = [
  {
    id: 1,
    brand: "Aisha K.",
    rating: "★★★★★",
    collection: "Summer 2024 Linen Set",
    review: "The linen fabric is perfect for summer! I've gotten so many compliments. The cut is flattering and the quality exceeds the price point.",
    reviewer: "Aisha K.",
    origin: "Dubai",
    styleRating: 9.2,
    piecesOwned: 5,
    reviewerLevel: "Fashion Influencer (320+ reviews)"
  },
  {
    id: 2,
    brand: "Marcus T.",
    rating: "★★★★☆",
    collection: "Distressed Denim Jacket",
    review: "This jacket instantly elevated my streetwear game. The distressing looks authentic, not manufactured. Fits true to size with the perfect oversized look.",
    reviewer: "Marcus T.",
    origin: "New York",
    styleRating: 8.7,
    piecesOwned: 3,
    reviewerLevel: "Style Expert (180+ reviews)"
  },
  {
    id: 3,
    brand: "Priya M.",
    rating: "★★★★★",
    collection: "Hand-Embroidered Saree",
    review: "Wore this to my sister's wedding and felt like a queen. The embroidery is exquisite and the fabric drapes beautifully. Worth every penny!",
    reviewer: "Priya M.",
    origin: "Mumbai",
    styleRating: 9.8,
    piecesOwned: 7,
    reviewerLevel: "Luxury Collector (420+ reviews)"
  }
];

const FashionReviewStacked = () => {
  const [index, setIndex] = useState(0);
  const review = fashionReviews[index];

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % fashionReviews.length);
  };

  return (
    <Container onClick={nextReview}>
      <Title>What Vibe Lovers Say</Title>
      <Description>Hear from our community who loves to Vibe in our outfits</Description>

      <Card>
        <InfoSection>
          <Brand>{review.brand}</Brand>
          <Collection>{review.collection}</Collection>
          <Rating>{review.rating}</Rating>
          <Review>"{review.review}"</Review>

          <ReviewerMeta>
            <ReviewerName>{review.reviewer}</ReviewerName>
            <ReviewerOrigin>{review.origin}</ReviewerOrigin>
          </ReviewerMeta>

          <ReviewerLevel>{review.reviewerLevel}</ReviewerLevel>

          <Stats>
            <Stat>
              <Label>STYLE RATING</Label>
              <Value>{review.styleRating}/10</Value>
            </Stat>
            <Stat>
              <Label>PIECES OWNED</Label>
              <Value>{review.piecesOwned}</Value>
            </Stat>
          </Stats>
        </InfoSection>
      </Card>
    </Container>
  );
};

// Styled Components

const Container = styled.div`
  background-color: rgb(4, 24, 53);
  padding: 80px 20px;
  width: 1320px;
  margin-left: -35px;
  font-family: 'Montaga', sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 4rem;
  margin-bottom: 10px;
  color: #ffe082;
  margin-top: -20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #d1d5db;
  margin-bottom: 50px;
`;

const Card = styled.div`
  width: 900px;
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  color: #222;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Brand = styled.h3`
  font-size: 1.6rem;
  color: #031e3e;
  margin: 0;
`;

const Collection = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 4px;
`;

const Rating = styled.div`
  color: #FFD700;
  font-size: 1.8rem;
  margin-top: -5px;
`;

const Review = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin: 20px 0;
  font-style: italic;
`;

const ReviewerMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ReviewerName = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: #222;
`;

const ReviewerOrigin = styled.div`
  font-size: 0.9rem;
  color: #888;
  position: relative;
  padding-left: 12px;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
  }
`;

const ReviewerLevel = styled.div`
  font-size: 0.9rem;
  color: #999;
  font-style: italic;
  margin-top: -20px;
  margin-left: 620px;
  margin-bottom: 10px
`;

const Stats = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 20px;
`;

const Stat = styled.div`
  text-align: left;
`;

const Label = styled.div`
  font-size: 0.75rem;
  color: #777;
  text-transform: uppercase;
`;

const Value = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #111;
`;

export default FashionReviewStacked;
