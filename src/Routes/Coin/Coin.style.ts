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

export const Loader = styled.span`
  text-align: center;
  display: block;
`;

export const OverviewWrap = styled.div`
  width: 60%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const OverviewBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.textColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

export const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-size: 40px;
  row-gap: 5px;
  margin: 0px auto;

  span:first-child {
    font-size: 20px;
  }
`;

export const OverviewDescription = styled.p`
  width: 100%;
  font-size: 30px;
`;

export const Tabs = styled.div`
  width: 100%;
  display: flex;

  div:first-child {
    margin-right: auto;
  }
`;

export const Tab = styled.div<{ isActive: boolean }>`
  width: 48%;
  height: 60px;
  background-color: ${(props) => props.theme.textColor};
  border-radius: 5px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  p {
    color: ${(props) => (props.isActive ? props.theme.accentColor : "black")};
    font-size: 20px;
  }
`;
