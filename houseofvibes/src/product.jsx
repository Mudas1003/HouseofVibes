import React, { useState } from 'react';
import styled from 'styled-components';

import p1 from './assets/season7.jpeg';
import p2 from './assets/sea2.jpeg';
import p3 from './assets/sea3.jpeg';
import p4 from './assets/sea6.jpeg';
import p5 from './assets/sea5.jpeg';
import { addToBag } from './bagUtils'; // ✅ adjust the path if needed


const productData = [
  { id: 1, name: 'Moonlit Silver Drape', price: 8999, image: p1, rating: 4.7 },
  { id: 2, name: 'Bronze Twilight Dress', price: 7499, image: p2, rating: 4.4 },
  { id: 3, name: 'Crimson Metallic Couture', price: 8299, image: p3, rating: 4.9 },
  { id: 4, name: 'Golden Hour Gown', price: 9999, image: p4, rating: 5.0 },
  { id: 5, name: 'Spring Aura Croset Dress', price: 7799, image: p5, rating: 4.2 },
];

const SeasonHighlight = () => {
  const [selectedProduct, setSelectedProduct] = useState(productData[0]);
  const [likes, setLikes] = useState({});
  const [selectedSize, setSelectedSize] = useState('M');

  const toggleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <Wrapper>
      <Title>Season's Spotlight</Title>

      <MainCard>
        <MainImage src={selectedProduct.image} />

        <Details>
          <ProductName>{selectedProduct.name}</ProductName>
          <ProductPrice>₹{selectedProduct.price}</ProductPrice>

          <SizeLabel>Select Size</SizeLabel>
          <SizeGroup>
            {sizes.map((size) => (
              <SizeBox
                key={size}
                selected={selectedSize === size}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </SizeBox>
            ))}
          </SizeGroup>

          <ActionRow>
            <AddToCartBtn onClick={() => addToBag({
              name: "Season's Collection",
              price: 52999,
              discount: 33,
              image: p2
            })} >Add to Cart</AddToCartBtn>
            <LikeBtn onClick={() => toggleLike(selectedProduct.id)}>
              {likes[selectedProduct.id] ? '❤️' : '🤍'}
            </LikeBtn>
          </ActionRow>

          <Divider />

          <SubTitle>Description & Fit</SubTitle>
          <Description>
Shimmering metallic dress crafted in a luxe fabric blend for a statement-making look. Features a flattering body-skimming silhouette, subtle stretch for comfort, and a soft inner lining.    
     </Description>

          <Divider />

          <SubTitle>Shipping</SubTitle>
          <ShippingDetails>
            <p><strong>Discount:</strong> Flat 50%</p>
            <p><strong>Delivery Time:</strong> 3–4 working days</p>
            <p><strong>Estimated Arrival:</strong> 10–12 July 2025</p>
          </ShippingDetails>

          <Divider />

          <SubTitle>Rating & Reviews</SubTitle>
          <RatingRow>
            <BigRating>{selectedProduct.rating}</BigRating>
            <Stars>
              {'★'.repeat(Math.floor(selectedProduct.rating)) + '☆'.repeat(5 - Math.floor(selectedProduct.rating))}
            </Stars>
            <ReviewCount>50+ reviews</ReviewCount>
          </RatingRow>

          <UserReview>
            <strong>Alex Mathio</strong><br />
            “Love the comfort and color — perfect for this season!”
          </UserReview>
        </Details>
      </MainCard>

      <Grid>
        {productData.map((product) => (
          <GridCard key={product.id} onClick={() => setSelectedProduct(product)}>
            <GridImage src={product.image} />
            <CardActions>
              <LikeBtn onClick={(e) => { e.stopPropagation(); toggleLike(product.id); }}>
                {likes[product.id] ? '❤️' : '🤍'}
              </LikeBtn>
              <BuyBtn>Buy</BuyBtn>
            </CardActions>
          </GridCard>
        ))}
      </Grid>

      <Quote>
        <em>"Fashion is what you’re offered four times a year. Style is what you pick out of that fashion."</em><br />
        — <strong>Lauren Hutton</strong>
      </Quote>
    </Wrapper>
  );
};

export default SeasonHighlight;

// Styled Components
const Wrapper = styled.div`
  background: #041e22;
  color: white;
  padding: 4rem 2rem;
  font-family: 'Montaga', serif;
  width: 1350px;
  margin-left: -100px;
  margin-bottom: -100px;
  margin-top: -50px;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 3rem;
  text-align: center;
  margin-left: 100px;
`;

const MainCard = styled.div`
  display: flex;
  background: #0a2f33;
  border-radius: 1rem;
  overflow: hidden;
  margin-left: 210px;
  max-width: 1000px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
`;

const MainImage = styled.img`
  width: 50%;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 2rem;
  flex: 1;
`;

const ProductName = styled.h2`
  font-size: 1.8rem;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const SizeLabel = styled.p`
  margin-top: 1.2rem;
`;

const SizeGroup = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.5rem;
  margin-left: 60px;
`;

const SizeBox = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  background: ${({ selected }) => (selected ? '#f2545b' : '#fff')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  cursor: pointer;
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const AddToCartBtn = styled.button`
  padding: 0.7rem 1.5rem;
  background: #f2545b;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 110px;
`;

const LikeBtn = styled.button`
  font-size: 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Divider = styled.hr`
  margin: 1.5rem 0;
  border: 0.5px solid #35585a;
`;

const SubTitle = styled.h4`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #ccc;
`;

const ShippingDetails = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 80px;
`;

const BigRating = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
`;

const Stars = styled.span`
  font-size: 1.5rem;
`;

const ReviewCount = styled.p`
  font-size: 0.9rem;
`;

const UserReview = styled.p`
  font-size: 0.9rem;
  margin-top: 1rem;
  background: #0f3b3e;
  padding: 1rem;
  border-radius: 8px;
`;

const Grid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 2rem;
  margin-left: 170px;
  width: 1100px;
`;

const GridCard = styled.div`
  background: #0f3b3e;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.03);
  }
`;

const GridImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.7rem;
`;

const BuyBtn = styled.button`
  padding: 0.2rem 0.6rem;
  font-size: 0.9rem;
  background: #f2545b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  height: 32px;
`;

const Quote = styled.div`
  margin-top: 4.5rem;
  text-align: center;
  font-size: 1.7rem;
  color: #ccc;
  font-style: italic;
  margin-left: 100px
`;
