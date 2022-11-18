import styled from "styled-components";

export const FrequentContain = styled.main`
  padding: 70px 0rem;
  border-bottom: 8px solid #222;
  position: relative;
  background-color: #000000;
`;

export const FrequentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 45px;
`;

export const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const BottomSection = styled.div`
  padding: 0 45px;
  @media screen and (max-width: 850px) {
    padding: 0 2rem;
  }
`;
