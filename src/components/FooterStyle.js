import styled from "styled-components";
import ThemeColor from "./css/Theme/Colors";

export const Box = styled.div`
  margin-top: 3rem;
  padding: 80px 50px 0px;
  background-color: ${ThemeColor.footerBackgroundColor};
  max-width: 100%;

  @media (max-width: 2000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  display: block;
  flex-direction: column;
  justyify-content: center;
  bottom: 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justyify-content: center;
  bottom: 0;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;
  justyify-content: center;

  @media (max-width: 2000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  margin-bottom: 10px;
  font-size: 14px;
  text-decoration: none;
  color: black;
`;

export const Heading = styled.p`
  font-size: 15px;
  font-weight: bold;
`;
