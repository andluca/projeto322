import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 0;
  padding: 0 80px;

  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;

  > p {
    font-size: 36px;
    color: #fff;
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  
`;