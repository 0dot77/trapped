import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import styled from 'styled-components';

const PullContainer = styled.main`
  width: 100%;
  height: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  user-select: none;
`;
const PullSvgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const PullContentsContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PullContents = styled.div`
  width: 50%;
  height: 100%;
  h1 {
    margin-top: 5rem;
    font-family: 'Nats';
    font-size: 5rem;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.mainColor};
    margin-bottom: 1rem;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 4rem;
    img {
      width: 25rem;
      box-shadow: rgba(255, 255, 255, 0.15) 0px 5px 15px 15px;
    }
  }
  p {
    font-family: 'Noto Sans KR';
    font-size: 1.25rem;
    line-height: 1.5;
    ol {
      color: white;
    }
    margin-bottom: 1rem;
  }

  .purpose {
    font-style: italic;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .strong {
    color: ${(props) => props.theme.colors.mainColor};
  }
`;

const Footer = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 1rem;
  color: white;
  text-align: center;
`;

export default function Pull() {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 100 });
  return (
    <PullContainer>
      <PullSvgContainer>
        <svg
          viewBox="0 0 84 1086"
          fill="none"
          preserveAspectRatio="xMidYMin meet"
        >
          <motion.path
            d="M7.10478 3C7.10478 71.6932 3 140.122 3 208.85C3 254.31 12.2261 296.601 27.1726 339.047C70.85 463.085 80.9909 595.454 80.9909 726.557C80.9909 773.913 81.5553 821.643 73.8075 868.375C70.6488 887.428 70.6203 906.973 67.6503 926.122C65.1287 942.381 66.3762 961.057 62.0633 976.755C57.6836 992.696 64.6394 1083 50.205 1083"
            stroke="#FEFF67"
            stroke-width="5"
            strokeDasharray="0 1"
            stroke-linecap="round"
            style={{
              pathLength,
            }}
          />
        </svg>
      </PullSvgContainer>

      <PullContentsContainer>
        <PullContents>
          <h1>Pre-Trapped</h1>
          <p className="purpose">창작지원 2022에 지원하면서 가졌던 생각</p>
          <p>
            구글의 'Youtube', 그 중에서도 짧게 미디어를 소비하는 방식을 갖고 있는 'Youtube Shorts'를 관람하던 도중
            떠오른 생각을 기점으로 본 프로젝트 기획을 진행했다.
          </p>
          <p>
            본 리서치 프로젝트 / 프로토타입은 손가락으로 스크롤을 오르락, 내리락 하는 도중에 일어나는 웹 그리고 앱과의
            상호작용을 통해 발생하는 정보의 순환에 대한 고찰이자 연구다.
          </p>
          <p>
            <ol className="strong">
              <li>비물질의 물질화</li>
              <li>비물질의 비물질화</li>
              <li>비물질의 가상화</li>
            </ol>
          </p>
          <p>세 가지 형태의 방식을 염두한 웹과 현실을 잇는 기획을 진행했다.</p>
          <p>
            '스크롤'이라는 행위를 기반으로 데이터를 전송하는 것을, 매일 매일 우리가 생산해내는 비물질이라고 생각했다.
          </p>
          <p>실질적으로 웹 공간 안에서 해당하는 감각들을 시각화해보고, 인터렉션을 진행해보면서 실험했다.</p>
        </PullContents>
      </PullContentsContainer>
      <PullContentsContainer>
        <PullContents>
          <h1>Post-Trapped</h1>
          <p className="purpose">리서치 프로젝트 시작 이후 멘토링을 통해 방향을 잡아나아가게 된 것</p>
          <p>'작업으로 이어질 수 있는 리서치란 무엇인가?'에 대해 많은 고민을 진행했다.</p>
          <p>
            단순히 고민한 내용들을 정리하는 하나의 페이퍼 혹은 페이지가 아닌, 시도해보고자 하는 기능들을{' '}
            <span className="strong">실험</span>해보는 기회로서 본 리서치 프로젝트를 활용했다.
          </p>
          <p>멘토링을 진행하면서, 작업을 기획하며 빠뜨린 한 가지를 발견하게 됐다.</p>
          <p>
            지금까지 작품 제작을 위해 기술을 사용해오면서, 보는 사람으로 하여금 별다른 설명없이 자신만의 길을 발견하고,
            우회해 나의 작업에 이를 수 있도록 기술을 활용하지 못했었다.
          </p>
          <p>
            <ol className="strong">
              <li>고의적 길 잃기</li>
              <li>아리아드네의 실</li>
            </ol>
          </p>
          <p>
            스크롤을 기반으로 떠올릴 수 있는 감각과 그 감각과 기술을 연결시켜줄 수 있는 신화적 배경을 찾을 수 있었다.
          </p>
          <p>
            본 리서치 프로젝트, 프로토 타입에서는 <span className="strong">'실'</span>이라는 명시적인 물질을 웹 위에서
            시각화 해, 스크롤에서 느껴지는 감각들 그리고 그것을 웹으로 구현하는 데에 실험을 진행했다.
          </p>
          <div>
            <img
              src="./assets/images/screenshot.png"
              alt="screenshot"
            />
          </div>
        </PullContents>
      </PullContentsContainer>
      <PullContentsContainer>
        <PullContents>
          <h1>Trapped</h1>
          <p className="purpose">친절함, 무결점, 보안, 안정성, 공감, 소통...</p>
          <p>
            이번 리서치는 기본적으로 웹이나 앱을 사용할 때의 '스크롤' 기능을 통해 기업들에게 전달되는 다양한 정보들을
            살피는 데에 중점을 두었다.
          </p>
          <p>개인정보의 수집은 IT 기업에겐 필수적이 되었다.</p>
          <p>기업들은 개개인의 정보를 빅데이터화하여 그들만의 데이터베이스를 구축한다.</p>
          <p>
            그것을 바탕으로 아주 교묘하고, 정확하게, 나도 모르는 사이에 웹이나 앱에 접속하게끔 우리를 유도하는 광고나
            정보를 제공한다.
          </p>
          <p>
            흔하디 흔한 말이지만, 정보는 기업에게 완벽하게 돈으로 <span className="strong">치환</span>되었다.
          </p>
          <p>우리는 그들에게 어떻게 정보를 제공할까? 그들은 어떤 말로 우리가 정보를 제공하도록 할까?</p>
          <p>
            실제로 본 프로젝트 페이지에서 데이터를 수집하는 것은 아니지만, 기업들이 데이터 수집을 위해 우리에게 친절히
            말을 걸고 있는 문장들을 취합 및 가공해 활용했다.
          </p>
        </PullContents>
      </PullContentsContainer>
      <PullContentsContainer>
        <PullContents>
          <h1>Collect</h1>
          <p>
            우리의 생활은 완벽하게 웹, 그리고 앱을 기반으로 이루어지고 있다. 아주 단순한 것들도 디지털을 사용하지 않는
            것이 없게 됐다.
          </p>
          <p>그 사이에는 무엇이 존재할까? 어떤 간극이 존재하는 것일까?</p>
          <p>우리와 디지털을 더욱 더 견고하게 연결하기 위한 IT 기업들의 아주 다양한 데이터 수집이 있다고 보았다.</p>
          <p>
            Collect에서는 웹 또는 앱에서 사용자가 서비스를 사용할 때, 기업에게 제공하게 되는 다양한 정보를 나열하고
            그것을 시각화 하는데 집중했다.
          </p>
          <p>
            우리가 요즘 흔하게 사용하는 앱들의 이름을 클릭할 때마다 그들이 수집하는 정보들이 나열되고, 하이라이팅 된다.
            나열되는 정보는 계속해서 위치를 바꾸며 혼란을 유발한다.
          </p>
        </PullContents>
      </PullContentsContainer>
      <PullContentsContainer>
        <PullContents>
          <h1>Push</h1>
          <p>페이지를 스크롤 할 때마다 꼬여진 실이 화면에 조금씩 등장한다.</p>
          <p>그 사이로 무작위의 데이터 뭉치가 등장한다.</p>
          <p>사진과 글은 매치되지 않고, 그 간극을 계속해서 보인다.</p>
          <p>무의식중에 스크롤을 하면서 보내는 나의 정보를 나타내고자 했다.</p>
          <p>
            그 정보들은 내가 '지금' 바라보고 있는 것과는 아무런 상관이 없지만, 상관이 없음에도 유의미한 정보로서
            활용되어 서비스가 진행된다.
          </p>
          <p>
            Push에서는 우리는 스크롤 할 때마다, 우리가 이 페이지에 어디에 존재하는지 그리고 어디까지 왔는지를 확인할 수
            있다.
          </p>
        </PullContents>
      </PullContentsContainer>
      <PullContentsContainer>
        <PullContents>
          <h1>Pull</h1>
          <p>Pull에서는 스크롤에 의해서 실이 결국엔 사라지는 것을 표현했다.</p>
          <p>
            우리가 다양한 디지털 서비스를 사용할 때, 사실은 항상 한 가지의 실을 항상 쥐고 있는 것일지도 모르겠다고
            생각했다.
          </p>
          <p>그것은 우리의 의지로 시작되지만, 이내 망각되는 속성을 가졌다고 느꼈다.</p>
          <p>어느새 길을 알려주던 실은 사라지고 광활한 인터넷 어딘가를 떠도는 우리들이 존재한다.</p>
        </PullContents>
      </PullContentsContainer>
      <Footer>본 리서치 프로젝트 사이트는 한국예술종합학교 아트콜라이더랩의 지원을 받아 제작했습니다.</Footer>
    </PullContainer>
  );
}
