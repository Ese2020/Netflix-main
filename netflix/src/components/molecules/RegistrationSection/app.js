import styled from "styled-components";

export const RegisterSection = styled.main`
  display: flex;
  justify-content: center;
  background-color: white;
`;

export const RegisterHold = styled.section`
  padding: 32px;
`;

export const RegisterContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 500px) {
    display: block;
  }
`;
