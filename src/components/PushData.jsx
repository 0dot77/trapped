import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const PushDataContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const PushDataBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    object-fit: contain;
    max-width: 20rem;
    min-width: 10rem;
    margin-bottom: 1rem;
  }
  p {
    max-width: 20rem;
    margin-bottom: 1rem;
    line-height: 1.25;
  }
`;

export default function PushData({ dataImg, txts }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  // motion animation이 화면에 걸리도록 처리하는 부분
  const isInView = useInView(containerRef);

  return (
    <PushDataContainer
      ref={containerRef}
      as={motion.div}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ delay: 0.5 }}
    >
      <PushDataBox>
        <img
          src={dataImg}
          alt="data image"
        />
        {txts.map((text, idx) => {
          return (
            <p
              ref={textRef}
              key={idx}
            >
              {text}
            </p>
          );
        })}
      </PushDataBox>
    </PushDataContainer>
  );
}
