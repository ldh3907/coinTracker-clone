import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
`;

export const CoinsList = styled.ul`
  width: 60%;
  margin: 0px auto;
`;

export const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  a {
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
    column-gap: 20px;
    font-size: 20px;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export const CoinImg = styled.img`
  width: 35px;
`;

export const Loader = styled.span`
  text-align: center;
  display: block;
`;
