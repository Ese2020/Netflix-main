import styled from "styled-components";

export const KidsContain = styled.main`
  padding: 70px 45px;
  border-bottom: 8px solid #222;
  position: relative;
  background-color: #000000;
`;

export const KidsSection = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1100px;
  @media screen and (max-width: 950px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

export const KidsLeft = styled.div`
  width: 50%;
  @media screen and (max-width: 1200px) {
    padding-left: 0.5rem;
  }
  @media screen and (max-width: 950px) {
    width: 100%;
    display: flex;
    padding-top: 1rem;
    justify-content: center;
  }
`;

export const KidsRight = styled.div`
  width: 52%;
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;
