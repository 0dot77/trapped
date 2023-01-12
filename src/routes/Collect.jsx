import { useState } from 'react';
import styled from 'styled-components';
import collectText from '../data/collectText';

const CollectContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background-color: ${(props) =>
    Object.keys(props.techs).find((key) => props.techs[key] === true)
      ? props.theme.colors.black
      : props.theme.colors.white};
`;

const CollectWrapperContainer = styled.div`
  width: 85%;
  height: 100%;
`;

const TechListContainer = styled.article`
  width: 80%;
  max-height: 25%;
  font-family: 'Nats';
  font-size: 1.25rem;
  user-select: none;
  position: fixed;

  .f {
    background-color: ${(props) => (props.techs.facebook ? props.theme.colors.mainColor : props.theme.colors.white)};
  }
  .i {
    background-color: ${(props) => (props.techs.instagram ? props.theme.colors.mainColor : props.theme.colors.white)};
  }
  .g {
    background-color: ${(props) => (props.techs.google ? props.theme.colors.mainColor : props.theme.colors.white)};
  }
  .p {
    background-color: ${(props) => (props.techs.pinterest ? props.theme.colors.mainColor : props.theme.colors.white)};
  }
  .t {
    background-color: ${(props) => (props.techs.twitter ? props.theme.colors.mainColor : props.theme.colors.white)};
  }
  .s {
    background-color: ${(props) => (props.techs.snapchat ? props.theme.colors.mainColor : props.theme.colors.white)};
  }
  .tk {
    background-color: ${(props) => (props.techs.tiktok ? props.theme.colors.mainColor : props.theme.colors.white)};
  }
  .b {
    background-color: ${(props) => (props.techs.bereal ? props.theme.colors.mainColor : props.theme.colors.white)};
  }
  .a {
    background-color: ${(props) => (props.techs.airbnb ? props.theme.colors.mainColor : props.theme.colors.white)};
  }
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
  margin-top: 15%;
  line-height: 50px;
  /* height: 100vh; */
  overflow-y: scroll;

  span {
    font-family: ${(props) =>
      Object.keys(props.techs).find((key) => props.techs[key] === true) ? 'Noto Sans KR' : 'Nats'};
    font-weight: ${(props) => (Object.keys(props.techs).find((key) => props.techs[key] === true) ? '900' : '400')};

    &.f {
      color: ${(props) => (props.techs.facebook ? props.theme.colors.mainColor : props.theme.colors.black)};
    }
    &.i {
      color: ${(props) => (props.techs.instagram ? props.theme.colors.mainColor : props.theme.colors.black)};
    }
    &.g {
      color: ${(props) => (props.techs.google ? props.theme.colors.mainColor : props.theme.colors.black)};
    }
    &.p {
      color: ${(props) => (props.techs.pinterest ? props.theme.colors.mainColor : props.theme.colors.black)};
    }
    &.t {
      color: ${(props) => (props.techs.twitter ? props.theme.colors.mainColor : props.theme.colors.black)};
    }
    &.s {
      color: ${(props) => (props.techs.snapchat ? props.theme.colors.mainColor : props.theme.colors.black)};
    }
    &.tk {
      color: ${(props) => (props.techs.tiktok ? props.theme.colors.mainColor : props.theme.colors.black)};
    }
    &.b {
      color: ${(props) => (props.techs.bereal ? props.theme.colors.mainColor : props.theme.colors.black)};
    }
    &.a {
      color: ${(props) => (props.techs.airbnb ? props.theme.colors.mainColor : props.theme.colors.black)};
    }
  }
`;

const Text = styled.span`
  font-size: 1.5rem;
`;

function CollectInteractiveText({ techs, background }) {
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  const mixedDataArray = shuffle(collectText);

  return (
    <TextContainer
      background={background}
      techs={techs}
    >
      {mixedDataArray.map((collect, idx) => {
        return (
          <Text
            key={idx}
            className={collect[1]}
          >
            {collect[0]}
            {', '}
          </Text>
        );
      })}
    </TextContainer>
  );
}

export default function Collect() {
  const [techs, setTechs] = useState({
    facebook: false,
    instagram: false,
    google: false,
    pinterest: false,
    twitter: false,
    snapchat: false,
    tiktok: false,
    bereal: false,
    airbnb: false,
  });

  const [background, setBackground] = useState(false);

  function handleOnClick(tech) {
    setTechs((prev) => {
      if (tech === 'facebook') {
        return {
          instagram: false,
          google: false,
          pinterest: false,
          twitter: false,
          snapchat: false,
          tiktok: false,
          bereal: false,
          airbnb: false,
          facebook: !prev.facebook,
        };
      } else if (tech === 'instagram') {
        return {
          instagram: !prev.instagram,
          google: false,
          pinterest: false,
          twitter: false,
          snapchat: false,
          tiktok: false,
          bereal: false,
          airbnb: false,
          facebook: false,
        };
      } else if (tech === 'google') {
        return {
          instagram: false,
          google: !prev.google,
          pinterest: false,
          twitter: false,
          snapchat: false,
          tiktok: false,
          bereal: false,
          airbnb: false,
          facebook: false,
        };
      } else if (tech === 'pinterest') {
        return {
          instagram: false,
          google: false,
          pinterest: !prev.pinterest,
          twitter: false,
          snapchat: false,
          tiktok: false,
          bereal: false,
          airbnb: false,
          facebook: false,
        };
      } else if (tech === 'twitter') {
        return {
          instagram: false,
          google: false,
          pinterest: false,
          twitter: !prev.twitter,
          snapchat: false,
          tiktok: false,
          bereal: false,
          airbnb: false,
          facebook: false,
        };
      } else if (tech === 'snapchat') {
        return {
          instagram: false,
          google: false,
          pinterest: false,
          twitter: false,
          snapchat: !prev.snapchat,
          tiktok: false,
          bereal: false,
          airbnb: false,
          facebook: false,
        };
      } else if (tech === 'tiktok') {
        return {
          instagram: false,
          google: false,
          pinterest: false,
          twitter: false,
          snapchat: false,
          tiktok: !prev.tiktok,
          bereal: false,
          airbnb: false,
          facebook: false,
        };
      } else if (tech === 'bereal') {
        return {
          instagram: false,
          google: false,
          pinterest: false,
          twitter: false,
          snapchat: false,
          tiktok: false,
          bereal: !prev.bereal,
          airbnb: false,
          facebook: false,
        };
      } else if (tech === 'airbnb') {
        return {
          instagram: false,
          google: false,
          pinterest: false,
          twitter: false,
          snapchat: false,
          tiktok: false,
          bereal: false,
          airbnb: !prev.airbnb,
          facebook: false,
        };
      }
    });
    setBackground((prev) => !prev);
  }
  return (
    <CollectContainer techs={techs}>
      <CollectWrapperContainer>
        <TechListContainer
          techs={techs}
          background={background}
        >
          <TechList>
            <li
              className="f"
              onClick={() => handleOnClick('facebook')}
            >
              Facebook
            </li>
            <li
              className="i"
              onClick={() => handleOnClick('instagram')}
            >
              Instagram
            </li>
            <li
              className="g"
              onClick={() => handleOnClick('google')}
            >
              Google
            </li>
            <li
              className="p"
              onClick={() => handleOnClick('pinterest')}
            >
              Pinterest
            </li>
          </TechList>
          <TechList>
            <li
              className="t"
              onClick={() => handleOnClick('twitter')}
            >
              Twitter
            </li>
            <li
              className="s"
              onClick={() => handleOnClick('snapchat')}
            >
              SnapChat
            </li>
            <li
              className="tk"
              onClick={() => handleOnClick('tiktok')}
            >
              TikTok
            </li>
            <li
              className="b"
              onClick={() => handleOnClick('bereal')}
            >
              BEREAL
            </li>
            <li
              className="a"
              onClick={() => handleOnClick('airbnb')}
            >
              Airbnb
            </li>
          </TechList>
        </TechListContainer>
        <CollectInteractiveText
          background={background}
          techs={techs}
        />
      </CollectWrapperContainer>
    </CollectContainer>
  );
}
