import styled from "styled-components";

export const EnjoySection = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1150px;

  @media screen and (max-width: 950px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const EnjoyContain = styled.main`
  border-bottom: 8px solid #222;
  padding: 70px 45px;
  background-color: #000000;
  @media screen and (max-width: 1200px) {
    padding: 70px 45px;
  }
`;

export const EnjoyLeft = styled.div`
  width: 53%;
  padding: 4rem 0rem 0rem 3rem;

  @media screen and (max-width: 1200px) {
    padding-left: 0.5rem;
  }

  @media screen and (max-width: 950px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-item: center;
    z-index: 100;
    position: relative;
    padding-top: 0rem;
  }
`;

export const EnjoyRight = styled.div`
  width: 46%;

  @media screen and (max-width: 1200px) {
    padding-right: 0.5rem;
  }

  @media screen and (max-width: 950px) {
    margin-top: 1rem;
    max-width: 600px;
    width: 100%;
  }
`;
