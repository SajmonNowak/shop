import styled from "styled-components";

const device = {
  mobileS: `(min-width: 320px)`,
  mobileM: `(min-width: 375px)`,
  mobileL: `(min-width: 425px)`,
  tablet: `(min-width: 768px)`,
  laptop: `(min-width: 1024px)`,
  laptopL: `(min-width: 1440px})`,
  desktop: `(min-width: 2560px)`,
};

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: ${(props) => props.theme.fontSizes.medium};

  ul {
    display: flex;
    list-style-type: none;
  }

  ul li {
    color: black;
    margin: 10;
  }

  ul a {
    text-decoration: none;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(300px);
  grid-gap: 10px;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProductDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  img {
    width: 100%;
  }

  h4 {
    font-weight: normal;
  }

  .name {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  .brand {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  .price {
    padding-top: 5px;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.medium};

  img {
    width: 100%;
  }

  div {
    width: 90%;
    margin: auto;
  }

  .brand {
    font-weight: normal;
    margin-top: 20px;
  }

  .name {
  }

  .price {
    margin-top: 10px;
    font-weight: normal;
    font-size: ${(props) => props.theme.fontSizes.large};
  }

  button {
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin: 20px 0px;
    width: 100%;
    height: 40px;
    color: white;
    background-color: black;

  }
`;

export const ReturnPolicy = styled.div`
  border: 1px solid;
  width: 100% !important;
  
  div {
    padding: 20px;
    border-bottom: 1px solid;
  }

  .lastItem {
    border-bottom : none;
  }

  div p i {
    padding-right: 10px;
  }
`;

export const CartItemGrid = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  font-size: ${(props) => props.theme.fontSizes.small};

  img{
    width: 100px;
  }

  .productInfo{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    position: relative;
  }

  .brand {
    font-weight: normal;
  }

  .name {
    font-weight: normal;
    margin-bottom: 20px;
  }

  .price {
    margin-top: 10px;
    font-weight: normal;
  }

  .trash{
    position: absolute;
    right: 0px;
    top: 0px;
    color: lightgrey;
  }

`


export const CartGrid = styled.div`
display: flex;
flex-direction: column;
`

export const Select = styled.select`
  border: 1px solid black;
  background-color: white;
  width: 60px;
  height: 30px;
`