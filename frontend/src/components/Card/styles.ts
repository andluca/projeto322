
import styled from "styled-components";
interface ContainerProps {
  posterUrl: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 300px;
  margin-right: 10px;
  margin-bottom: 20px;
  background: url(${props => props.posterUrl}) center/cover;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  color: #fff;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:nth-child(5n) {
    margin-right: 0;
  }

  div > p {
    margin-bottom: 5px;
    font-size: 12px;
    color: #fff;
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 180px;
  }
  
  p {
    background: rgba(0,0,0, 0.7);
    font-size: 24px;
    color:#fff;
    font-weight: 700;
  }

  button {
    width: 100%;
    border: none;
    background: #001c04;
    color: #fff;
    padding: 4px 0;
    cursor: pointer;
  }
};`
