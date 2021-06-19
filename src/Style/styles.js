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
`;

export const CartItemGrid = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  font-size: ${(props) => props.theme.fontSizes.small};
  border: 1px solid lightgrey;
  margin-top: 10px;

  img {
    width: 100px;
  }

  .productInfo {
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

  .trash {
    position: absolute;
    right: 0px;
    top: 0px;
    color: lightgrey;
  }
`;

export const CartGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  border: 1px solid black;
  background-color: white;
  width: 60px;
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
    background-color: orange;
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
  //color: grey;
  background-color: transparent;
  font-size: ${(props) => props.theme.fontSizes.small};

  color: ${(props) => (props.activated ? "black" : "grey")};
  border-color: ${(props) => (props.activated ? "black" : "grey")};
`;
export const ShopDiv = styled.div`
  .filterBar {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;

export const HomeBody = styled.div`
  margin-top: 2px;
  .goldSilver {
    display: flex;

    div {
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
      a {
        color: white;
      }

      i {
        padding: 5px;
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
