import HomeText from '../components/HomeText';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import HomePath from '../components/HomePath';

const HomeContainer = styled.main`
  font-family: 'Noto Sans KR';
  font-size: 3rem;
  font-weight: 700;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  line-height: 1.25;
  color: #000000;
  background-color: ${(props) => (props.changeBackground ? 'black' : 'white')};
`;

const HomeFakeContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const HomeSection = styled.section`
  width: 80vw;
  position: relative;
`;

const HomeEffect = styled.div`
  width: 100%;
  height: 10vw;
  bottom: 0;
  position: absolute;
  z-index: 100;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 52.22%, rgba(254, 255, 103, 0.44) 100%);
  backdrop-filter: blur(4px);
`;

export default function Home() {
  const [changeBackground, setChangeBackground] = useState(false);

  return (
    <HomeContainer changeBackground={changeBackground}>
      <HomeFakeContainer>
        <HomeSection>
          <HomePath changeBackground={changeBackground} />
          <HomeText
            setChangeBackground={setChangeBackground}
            changeBackground={changeBackground}
          />
        </HomeSection>
      </HomeFakeContainer>
      <HomeEffect />
    </HomeContainer>
  );
}
