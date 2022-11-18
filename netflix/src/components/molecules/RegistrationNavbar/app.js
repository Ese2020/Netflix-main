import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid #e6e6e6;
  padding: 15px 2rem 10px 2rem;
  @media screen and (max-width: 850px) {
    padding: 15px 1rem 10px 1rem;
  }
  @media screen and (max-width: 770px) {
    padding: 10px 1rem 10px 1rem;
  }

  @media screen and (max-width: 500px) {
    padding: 10px 0.6rem 0rem 0.6rem;
  }
`;

export const NavLeft = styled.div`
  width: 11rem;

  @media screen and (max-width: 500px) {
    width: 5rem;
  }
`;

export const NavRight = styled.div``;
