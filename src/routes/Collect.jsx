import styled from 'styled-components';

const CollectContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
`;

const CollectWrappterContainer = styled.div`
  width: 85%;
  height: 100%;
`;

const TechListContainer = styled.article`
  width: 100%;
  max-height: 25%;
  border: 1px solid red;
`;

const TechList = styled.ul`
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 15%;
    height: 3rem;
    border-radius: 26px;
    cursor: pointer;
    margin: 1rem;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  margin-top: 5%;
  height: 100%;
  border: 1px solid red;
`;

const Text = styled.span`
  color: black;
  .f {
  }
  .i {
  }
  .g {
  }
  .p {
  }
  .t {
  }
  .s {
  }
  .tk {
  }
  .b {
  }
  .a {
  }
`;

function CollectInteractiveText() {
  return (
    <TextContainer>
      <Text className="f i g p t s tk b a">비밀번호</Text>,
    </TextContainer>
  );
}

export default function Collect() {
  return (
    <CollectContainer>
      <CollectWrappterContainer>
        <TechListContainer>
          <TechList>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Google</li>
            <li>Pinterest</li>
          </TechList>
          <TechList>
            <li>Twitter</li>
            <li>SnapChat</li>
            <li>TikTok</li>
            <li>BEREAL</li>
            <li>Airbnb</li>
          </TechList>
        </TechListContainer>
        <CollectInteractiveText />
      </CollectWrappterContainer>
    </CollectContainer>
  );
}
