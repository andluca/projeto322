import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 0;
  padding: 0 80px;
  color: #fff;

  .picture{
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .picture img{
    max-width: 300px;
  }
  p {
    font-size: 18px;
    color: #fff;
  }
`;

export const Reviews = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  div {
    cursor: pointer;
    padding: 10px;
    box-shadow: 5px 5px 5px rgba(255, 255, 255, 0.5);
  }
`;