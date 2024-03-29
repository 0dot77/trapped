import styled from 'styled-components';
const HomeTextContainer = styled.p`
  cursor: default;
  color: ${(props) => (props.changeBackground ? props.theme.colors.mainHoverColor : props.theme.colors.black)};
  z-index: 10;
  position: absolute;
  margin-top: 3vw;

  .word {
    color: ${(props) => props.theme.colors.mainColor};
    cursor: crosshair;
  }

  user-select: none;
`;

function InteractiveText({ text, setChangeBackground }) {
  return (
    <span
      className="word"
      onMouseEnter={() => setChangeBackground(true)}
      onMouseLeave={() => setChangeBackground(false)}
    >
      {text}
    </span>
  );
}

// 특정한 글자, 선택한 글자를 hover 했을 때 배경과 인터렉션이 일어나야 한다. -> useState
// -> 레이아웃 단에서 useState 사용해서 관리하기
// 동작하는 것 자체를 전역으로 관리 할 수 있어야 한다. -> useState

export default function HomeText({ setChangeBackground, changeBackground }) {
  return (
    <HomeTextContainer changeBackground={changeBackground}>
      본 페이지는 서비스 사용자들이 신뢰를 바탕으로{' '}
      <InteractiveText
        text={'정보'}
        setChangeBackground={setChangeBackground}
      />
      를 제공한다는 것을 알고 있습니다. 사용자의 신뢰에 대한 막중한 책임을 인지하여 최선을 다해{' '}
      <InteractiveText
        text={'개인정보'}
        setChangeBackground={setChangeBackground}
      />
      를 보호하고 사용자가 직접{' '}
      <InteractiveText
        text={'제어'}
        setChangeBackground={setChangeBackground}
      />
      할 수 있도록 노력하겠습니다. 본 페이지는 사람들을 더 가깝게{' '}
      <InteractiveText
        text={'연결'}
        setChangeBackground={setChangeBackground}
      />
      하기 위한 공간입니다. 사람들은 본 페이지에서 친구 및 가족과{' '}
      <InteractiveText
        text={'소통'}
        setChangeBackground={setChangeBackground}
      />
      하고, 지역 이벤트를 발견하고, 관심 있는 그룹을 찾아봅니다. 본 페이지는 자신의 데이터가 사용되는 방식을 직접 선택할
      수 있는 옵션을 제공하고 있으며,{' '}
      <InteractiveText
        text={'원칙'}
        setChangeBackground={setChangeBackground}
      />
      을 토대로 개인정보를 처리합니다. 또한, 본 페이지는 모두가 따뜻함을 느낄 수 있는 커뮤니티를 만들기 위해 최선을
      다하고 있습니다.{' '}
      <InteractiveText
        text={'자유'}
        setChangeBackground={setChangeBackground}
      />
      롭게 자신을 표현하고 관심사를 둘러볼 수 있도록 본 페이지를 안전하게 이용하는 방법을 알아보세요. 본 페이지는 가족을
      위한 긍정적인 온라인{' '}
      <InteractiveText
        text={'경험'}
        setChangeBackground={setChangeBackground}
      />
      을 만든다는 공동의 사명을 다하기 위해 주요 전문가, 신뢰할 수 있는 단체, 부모 및 청소년들과 협업하고 있습니다.
      누구도 여러분의 본 페이지 계정에 무단으로 액세스 할 수 없도록 계정{' '}
      <InteractiveText
        text={'보안'}
        setChangeBackground={setChangeBackground}
      />
      을 강화하세요. 사용자가 통제권을 가질 수 있는 본 페이지의 개인정보 기능을 살펴보세요. 본 페이지는 여러분이
      페이지를 이용하는 시간이{' '}
      <InteractiveText
        text={'의도'}
        setChangeBackground={setChangeBackground}
      />
      적이고{' '}
      <InteractiveText
        text={'영감'}
        setChangeBackground={setChangeBackground}
      />
      을 받는 시간이기를 바랍니다. 본 페이지의 사명은 모든 사람들이 즐거운 삶을 영위하도록 다양한 아이디어를 전하는
      것이기도 합니다. 이를 위해 본 페이지는 사용자와 타사로부터 수집한 정보를 토대로 사용자가 관심을 가질 만한 맞춤
      콘텐츠와 광고를 표시합니다. 본 페이지는 항상 적절한 법적 근거를 바탕으로 이러한 정보를 사용합니다. 본 페이지는
      창의성과{' '}
      <InteractiveText
        text={'표현'}
        setChangeBackground={setChangeBackground}
      />
      이 개인적인 것임을 알고 있습니다. 개인정보도 마찬가지입니다. 본 페이지는 온라인 계정을 관리하고 본인에게 적합한
      페이지 환경을 만들 수 있도록 커뮤니티에 다양한 제어 기능을 제공합니다. 또한 본 페이지는 새로 커뮤니티에 가입하는
      사용자들이 본 페이지를 신뢰하고 자신의 정보를 본 페이지에 맡긴다는 것을 알고 있습니다. 저희는 해당 정보를
      보호하고, 이용 가능한 개인 정보 보호 및 보안 도구를 사용자에게 알려 드리기 위해 많은 노력을 기울이고 있습니다.
    </HomeTextContainer>
  );
}
