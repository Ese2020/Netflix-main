import styled from "styled-components";

export const DownloadContain = styled.main`
  padding: 70px 45px;
  border-bottom: 8px solid #222;
  position: relative;
  background-color: #000000;
`;

export const DownloadSection = styled.section`
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

export const DownloadLeft = styled.div`
  margin: -8% 0 -4% -15%;
  min-height: 100px;
  width: 50%;
  overflow: hidden;
  position: relative;
  padding-top: 2rem;
  padding-left: 3.5rem;
  @media screen and (max-width: 1200px) {
    padding-left: 0.5rem;
    width:52%;
  }
  @media screen and (max-width: 950px) {
    display: flex;
    justify-content: center;
    margin: 0rem;
    margin-top: 1em;
    max-width: 600px;
    padding:0rem;
    width: 100%;
}
  }
`;

export const DownloadRight = styled.div`
  padding: 0 0 0 3rem;
  flex: 0 1 auto;
  height: 100%;
  width: 54%;
  z-index: 3;
  @media screen and (max-width: 950px) {
    width: 100%;
    padding: 0rem;
  }
`;
