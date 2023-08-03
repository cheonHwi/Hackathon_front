import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  background-color: #f4f4f4;
  @media (min-width: 500px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: absolute;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Header = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > h1 {
    padding-bottom: 5px;
    color: #fff;
    font-size: 28px;
  }
  > h2 {
    color: #fff;
    font-size: 20px;
  }
`;

export const List = styled.div`
  margin: 30px 0 40px 0;
  padding: 15px 20px;
  width: 100%;
  height: 150px;
  background-color: #fff;
  border-radius: 4vh;

  > p {
    padding-bottom: 20px;
    font-size: 15px;
    font-weight: 600;

    @media (max-height: 750px) {
      padding-bottom: 8px;
    }
  }

  > ul {
    > li {
      list-style: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-bottom: 5px;
      @media (max-height: 750px) {
        font-size: 14px;
      }
    }
  }

  @media (max-height: 750px) {
    margin: 40px 0 15px 0;
    height: 120px;
  }
  @media (max-width: 280px) {
    margin: 20px 0 15px 0;
    height: 120px;
  }
`;

export const Site = styled.span`
  padding-right: 5px;
  font-weight: bold;
`;

export const Belong = styled.span`
  color: ${(props) =>
    props.color === "육군"
      ? "#258C4E"
      : props.color === "해군"
      ? "#CE1126"
      : props.color === "공군"
      ? "#3289B9"
      : "#000"};
`;

export const Map = styled.div`
  padding: 10px;
  width: 100%;
  background-color: #fff;
  border-radius: 4vh;

  > p {
    padding-left: 10px;
    padding-bottom: 10px;
    font-size: 15px;
    font-weight: 600;

    @media (max-height: 750px) {
      padding-bottom: 8px;
    }
  }

  > img {
    width: 100%;
    height: 250px;

    @media (max-height: 750px) {
      height: 200px;
    }
  }

  @media (max-height: 750px) {
    height: 250px;
  }
`;
