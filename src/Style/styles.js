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
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);

  .logo {
    height: 75px;
  }

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
  }

  ul li {
    color: black;

    img {
      height: 25px;
    }
  }

  ul a {
    padding: 10px;
    text-decoration: none;
  }

  .cartContainer {
    position: relative;
  }

  .itemNumber {
    position: absolute;
    color: red;
    border: 1px solid;
    width: 25px;
    text-align: center;
    border-radius: 50%;
    padding: 2px;
    bottom: -5px;
    right: -18px;
    font-size: ${(props) => props.theme.fontSizes.small};
    color: white;
    background-color: red;
    font-weight: bold;
  }
`;

export const CartPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cartInfo {
    width: 100%;
    margin-top: 10px;
  }

  .cartTitle {
    margin-top: 20px;
  }

  @media ${device.laptop} {
    .cartInfo {
      width: 100%;
      max-width: 1500px;
      display: flex;

      * {
        width: 100%;
      }

      .sideDiv {
        max-width: 500px;
        padding: 0 20px;
      }
    }
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

export const ProductDivShop = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  a {
    text-decoration: none;
    color: black;
  }

  img {
    width: 100%;
  }

  h4 {
    font-weight: normal;
  }

  .name {
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: bold;
  }

  .price {
    padding-top: 10px;
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
    border: none;
    text-transform: uppercase;

    &:hover {
      color: black;
      border: 1px solid black;
      background-color: white;
    }
  }

  .addedConfirmation {
    color: green;
    animation: fadeIn 1s;

    i {
      padding-right: 5px;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media ${device.laptop} {
    display: flex;

    .imgDiv {
      width: 500px;
    }

    .sideDiv {
      align-self: flex-start;
      max-width: 500px;
      margin-top: 0px;
      margin-left: 0px;
    }

    .price {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    img {
      width: 500px;
    }
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
    border-bottom: none;
  }

  div p i {
    padding-right: 10px;
  }

  @media ${device.laptop} {
    margin-top: 50px !important;
  }
`;

export const CartItemGrid = styled.div`
  display: flex;
  padding: 20px;
  font-size: ${(props) => props.theme.fontSizes.small};
  border: 1px solid lightgrey;
  margin-top: 5px;

  .productImg {
    width: auto;
  }

  img {
    width: 100px;
    margin-right: 10px;
  }

  .productInfo {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    position: relative;
    flex-grow: 1;
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

  .trash {
    position: absolute;
    width: 15px;
    top: 0px;
    right: 0px;
    color: lightgrey;
  }

  @media ${device.laptop} {
    height: 250px;
    width: 100% !important;
    img {
      width: auto;
      height: 100%;
      width: auto !important;
    }
  }
`;

export const CartGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TotalDiv = styled.div`
  border: 1px solid lightgrey;
  padding: 10px;
  margin-top: 20px;
  max-width: 100%;

  h2 {
    font-size: ${(props) => props.theme.fontSizes.big};
    margin-bottom: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 2px;
  }

  .shipping {
    border-bottom: 1px solid lightgrey;
    margin-bottom: 2px;
    padding-bottom: 4px;
  }

  button {
    margin-top: 10px;
    padding: 5px;
    width: 100%;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    background-color: black;

    &:hover {
      color: black;
      background-color: white;
    }
  }

  @media ${device.laptop} {
    margin-top: 5px;

    h2 {
      font-size: ${(props) => props.theme.fontSizes.large};
    }

    h4 {
      font-size: 18px;
    }

    button {
      font-size: ${(props) => props.theme.fontSizes.medium};
    }
  }
`;

export const Voucher = styled.div`
  border: 1px solid lightgrey;
  padding: 10px;
  margin-top: 10px;
  max-width: 500px;

  .addCoupon {
    display: flex;
    justify-content: space-between;
  }

  i {
    width: 30px !important;
    text-align: center;
    transition: transform 1s linear;
    transform: ${(props) => (props.open ? "rotateX(180deg)" : "")};
  }
  }

  .couponInput {
    display: flex;
    flex-direction: column;

    input {
      margin-top: 20px;
      height: 30px;
      margin-bottom: 5px;
    }
    button {
      align-self: flex-end;
      height: 30px;
      width: 100px;
      color: black;
      font-weight: bold;
      background-color: white;

      &:hover {
        color: white;
        background-color: black;
      }
    }
  }

  @media ${device.laptop} {
    font-size: 18px;
  }

`;

export const Select = styled.select`
  border: 1px solid black;
  background-color: white;
  width: 60px;
  max-width: 100px;
  height: 30px;
`;

// Home

export const Header = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;

  .imgTitleContainer {
    width: 100%;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .titleText {
    color: white;
    background: rgba(0, 0, 0, 0.4);
    top: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      margin-bottom: 25px;
    }
  }

  @media ${device.tablet} {
    .imgTitleContainer {
      height: 800px;
      overflow: hidden;
    }

    video {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translateX(-50%) translateY(-50%);
      transform: translateX(-50%) translateY(-50%);
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: -1000;
      overflow: hidden;
    }
  }
`;

export const Button = styled.button`
  border: 1px solid;
  width: 125px;
  height: 40px;
  cursor: pointer;
  color: white;
  font-size: ${(props) => props.theme.fontSizes.small};
  background-color: transparent;
`;

export const FilterBtn = styled.button`
  width: stretch;
  height: 50px;
  border: 2px solid;
  margin: 5px;
  background-color: transparent;
  font-size: ${(props) => props.theme.fontSizes.small};

  color: ${(props) => (props.activated ? "black" : "grey")};
  border-color: ${(props) => (props.activated ? "black" : "grey")};
`;
export const ShopDiv = styled.div`
  max-width: 1500px;
  .filterBar {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .productsContainer {
    margin-top: 20px;
  }

  .shopHeading {
    text-align: center;
    text-transform: uppercase;
    margin-top: 50px;
  }

  @media ${device.tablet} {
    margin: 0 auto;
  }
`;

export const HomeBody = styled.div`
  margin-top: 2px;
  .goldSilver {
    display: flex;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: auto;
      position: relative;
      z-index: 2;
      margin: 2px;

      .imgText {
        color: white;
        font-size: ${(props) => props.theme.fontSizes.large};
        position: absolute;
      }

      img {
        max-width: 100%;
        z-index: -1;
        filter: brightness(70%);
      }
    }
  }

  .comingSoon {
    width: 100%;
    background-color: orchid;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;

    img {
      height: 200px;
      width: 100%;
      object-fit: cover;
      filter: brightness(70%);
    }

    .imgText {
      color: white;
      font-size: ${(props) => props.theme.fontSizes.large};
      position: absolute;
    }
  }

  @media ${device.laptop} {
    .comingSoon {
      height: 400px;

      img {
        height: 400px;
      }
    }

    .goldSilver {
      height: 500px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export const FooterBar = styled.footer`
  width: 100%;
  height: 110px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0px;

  .topFooter {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    div {
      padding: 5px;
    }

    input {
      background-color: grey;
      width: 175px;

      &:focus {
        background-color: white;
      }
    }

    span {
      margin-top: 5px;
      display: flex;
      align-items: center;

      i {
        color: grey;
        font-weight: bold;
        text-align: center;
        margin-left: 1px;
        width: 20px;
        font-size: 20px;
        border: 1px solid;

        &:hover {
          color: white;
        }
      }
    }

    .sM {
      font-size: 25px;
      margin-right: 10px;
      a {
        color: white;
      }

      i {
        padding: 5px;
        padding-right: 10px;

        &:hover {
          color: lightgrey;
        }
      }
    }
  }

  .botFooter {
    display: flex;
    justify-content: center;
    position: absolute;
    padding: 5px;
    width: 100%;
    bottom: 0px;
    font-size: ${(props) => props.theme.fontSizes.verySmall};
    color: grey;
  }
`;

export const ProductDivCarousel = styled.div`
  width: 100%;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSizes.small};
  text-align: center;

  a {
    text-decoration: none;
    color: black;
  }

  img {
    height: 150px;
  }

  h4 {
    font-weight: normal;
  }

  .name {
    font-size: ${(props) => props.theme.fontSizes.small};
    font-weight: bold;
  }

  .brand {
    display: none;
  }

  .price {
    padding-top: 0px;
  }

  @media ${device.tablet} {
    img {
      height: 300px;
    }
  }
`;
export const Recommendation = styled.div`
  margin-top: 40px;

  .like {
    padding: 0px 0px 5px 20px;
  }
`;
