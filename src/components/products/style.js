import styled from "styled-components";

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  padding: 20px 0;
`;
const Product = styled.div`
  background: #ffffff;
  cursor: pointer;
  .img {
    width: 100%;
    min-width: var(--min-width-book);
    height: 300px;
    /* background-image: url(${({ url }) => url}); */
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px 16px 16px;

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #001869;
    opacity: 0.8;
    @media (max-width: 930px) {
      font-size: 30px;
      padding-top: 10px;
    }
    @media (max-width: 800px) {
      font-size: 24px;
    }
    @media (max-width: 530px) {
      font-size: 18px;
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.5);
    padding: 8px 0 4px;
    @media (max-width: 930px) {
      font-size: 18px;
    }
    @media (max-width: 800px) {
      font-size: 20px;
    }
    @media (max-width: 530px) {
      font-size: 16px;
    }
  }
`;

export { ProductsContainer, Product, CardText };
