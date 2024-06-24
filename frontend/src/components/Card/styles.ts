import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 300px;
  margin-right: 10px;
  margin-bottom: 20px;
  background: #fff;
  color: #fff;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background-image: url("https://m.media-amazon.com/images/M/MV5BZTE0NDk1NzctNmIzMC00NjQ3LWFkMTItOTBhNGQyZmI3ZTIzXkEyXkFqcGc@._V1_QL75_UX760_CR0,0,760,428_.jpg");
  background-size: cover;
  &:nth-child(5n) {
    margin-right: 0;
  }

  div > p {
    background: rgba(0,0,0, 0.8);
    margin-bottom: 5px;
    font-size: 12px;
    color: #fff;
  }
  
  
  p {
    background: rgba(0,0,0, 0.8);
  }

  button {
  width: 100%;
    border: none;
    background: #024201;
    color: #fff;
    padding: 4px 0;
    cursor: pointer;
  }
`;
