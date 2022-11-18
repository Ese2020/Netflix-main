import styled from "styled-components";

export const WatchContain = styled.section`
  padding: 70px 45px;
  border-bottom: 8px solid #222;
  position: relative;
  background-color: #000000;
  @media screen and (max-width: 950px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const WatchHold = styled.div`
  width: 50%;
  padding-left: 3rem;
  @media screen and (max-width: 1200px) {
    padding-left: 0.5rem;
    width: 52%;
  }
  @media screen and (max-width: 950px) {
    width: 100%;
    padding-left: 0rem;
  }
`;
