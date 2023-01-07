import home_text from '../data/home_text';
import styled from 'styled-components';

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
`;

const HomeSection = styled.section`
  width: 80vw;
  margin-top: 3vw;
`;

const HomeEffect = styled.div`
  width: 100%;
  bottom: 0;
  height: 10vw;
  position: absolute;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 52.22%, rgba(254, 255, 103, 0.44) 100%);
  backdrop-filter: blur(4px);
`;

export default function Home() {
  return (
    <HomeContainer>
      <HomeSection>{home_text}</HomeSection>
      <HomeEffect />
    </HomeContainer>
  );
}
