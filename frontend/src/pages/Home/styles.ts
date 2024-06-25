import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0;
  padding: 0 80px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  > p {
    font-size: 30px;
    color: #fff;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 10px;
  
`;