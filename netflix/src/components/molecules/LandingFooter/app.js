import styled from "styled-components";

export const FooterContain = styled.main`
  padding: 70px 45px 20px 45px;
  position: relative;
  background-color: #000000;
  @media screen and (max-width: 850px) {
    padding: 70px 2rem 20px 2rem;
  }
`;

export const FooterSection = styled.section`
  min-width: 190px;
  padding-bottom: 20px;
  position: relative;
  width: 100%;
  max-width: 1000px;
`;

export const TopFooter = styled.div`
  margin-bottom: 1.5rem;
`;

export const CenterFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: ;
  @media screen and (max-width: 770px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const BottomFooter = styled.div``;
