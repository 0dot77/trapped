import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import useWindowResize from '../hooks/useWindowResize';

const PushDataContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const PushDataBox = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    object-fit: contain;
    max-width: 10rem;
    min-width: 5rem;
    top: 10%;
  }
  p {
    max-width: 15rem;
    position: absolute;
  }
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
let randomPos = [];

export default function PushData({ dataImg, txts }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const windowSize = useWindowResize();
  // motion animation이 화면에 걸리도록 처리하는 부분
  const isInView = useInView(containerRef);
  // 랜덤한 위치 잡아주기
  useEffect(() => {
    for (let i = 0; i < txts.length; i++) {
      // width는 prop으로 내려주기
      randomPos.push(Math.floor(Math.random() * containerRef.current.clientWidth) / 3);
    }
  }, []);

  return (
    <PushDataContainer
      ref={containerRef}
      animate={{ opacity: isInView ? 1 : 0 }}
    >
      <PushDataBox>
        <img
          src={dataImg}
          alt="data image"
        />
        {txts.map((text, idx) => {
          return (
            <>
              {console.log(randomPos)}
              <p
                ref={textRef}
                key={idx}
                style={{
                  marginTop: `${idx * 8}rem`,
                  // left: `${randomPos[idx]}px`,
                  left: `${windowSize.width / 2}`,
                }}
              >
                {text}
              </p>
            </>
          );
        })}
      </PushDataBox>
    </PushDataContainer>
  );
}
