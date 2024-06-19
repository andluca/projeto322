import styled from "styled-components";

export const Container = styled.div`
  width: calc((100% - 80px - 60px) / 5);
  height: 180px;
  margin-right: 10px;
  margin-bottom: 20px;
  background: #fff;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:nth-child(5n) {
    margin-right: 0;
  }

  div > p {
    margin-top: 8px;
    font-size: 12px;
  }

  button {
    border: none;
    background: #008000;
    color: #fff;
    padding: 4px 0;
    cursor: pointer;
  }
`;
