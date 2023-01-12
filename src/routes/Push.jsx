import { motion, useInView, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import pushes from '../data/pushs';
import PushData from '../components/PushData';

const PushContainer = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.black};
  font-family: 'Noto Sans KR';
`;

const PushSvgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  svg {
    width: 100%;
    height: 100%;
  }
  z-index: 0;
`;

// TODO :
// 1. 페이지 전체 높이를 받아와서 그 높이를 스크롤 하는 것에 반응하는 SVG 애니메이션 만들기 (0)
// 2. 해당 에니메이션 아래로, (혹은 위로) 데이터가 등장하는 것을 우선 구현해보고, 괜찮으면 랜덤한 위치에 배치되어 있다가 모여지는 것을 구현해보기.

export default function Push() {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 100 });

  return (
    <PushContainer>
      <PushSvgContainer>
        <svg
          viewBox="0 0 662 1084"
          fill="none"
          preserveAspectRatio="xMidYMin meet"
        >
          <motion.path
            d="M242.785 3C242.785 35.2732 237.003 36.3682 250.103 66.5885C261.673 93.2813 247.198 102.464 266.033 124.169C278.115 138.091 266.033 135.597 266.033 163.429C266.033 191.262 241.678 218.018 257.546 224.496C295.306 239.91 336.938 241.616 376.776 247.758C393.603 250.351 409.735 251.025 425.604 258.63C444.604 267.735 462.962 280.659 478.973 294.281C558.142 361.635 599.339 465.443 599.339 569.122C599.339 616.917 593.615 663.492 581.17 709.703C570.703 748.573 553.833 792.348 531.207 825.758C524.076 836.289 515.299 844.223 504.459 850.79C491.163 858.846 473.582 871.011 458.408 874.052C416.336 882.483 379.207 897.562 335.645 899.21C304.833 900.375 273.663 902.951 242.785 901.232C219.673 899.946 197.148 891.826 175.158 885.43C141.892 875.752 110.737 854.813 86.0826 830.815C53.0775 798.689 25.0321 762.49 12.2737 717.036C-1.17099 669.137 1.34932 627.507 11.2643 579.489C15.5511 558.728 26.5613 539.348 31.0729 518.553C36.2817 494.545 36.1197 471.941 36.1197 447.378C36.1197 405.846 35.9905 357.622 63.246 323.484C74.5949 309.27 84.1925 295.999 99.8351 285.811C106.37 281.555 113.233 275.874 120.148 272.41C127.603 268.675 137.205 268.821 145.13 266.468C170.547 258.922 198.38 266.099 224.112 261.411C254.462 255.882 288.86 257.543 316.72 271.019C367.031 295.356 416.317 320.138 464.212 349.401C507.512 375.856 556.561 399.507 589.75 439.413C622.13 478.347 644.459 525.563 653.844 575.19C662.506 621.002 662.546 672.161 635.802 712.358C626.513 726.319 620.61 742.609 608.928 755.215C598.884 766.053 590.343 778.135 579.909 788.59C558.347 810.195 531.146 826.783 503.45 837.642C474.066 849.163 442.054 849.679 412.608 859.892C391.713 867.14 367.869 868.549 346.117 871.902C325.03 875.153 301.589 880.878 280.257 880.878C271.983 880.878 253.847 891.995 250.103 899.083C239.185 919.746 233.8 943.642 228.654 966.845C226.136 978.196 220.074 991.3 220.074 1002.62C220.074 1011.74 220.375 1019.99 218.308 1028.79C212.958 1051.57 250.103 1057.58 250.103 1081"
            stroke="#FEFF67"
            strokeLinecap="round"
            strokeDasharray="0 1"
            style={{
              pathLength,
            }}
          />
        </svg>
      </PushSvgContainer>
      {Object.keys(pushes).map((push, idx) => {
        return (
          <PushData
            key={idx}
            dataImg={pushes[`${push}`]?.img}
            txts={pushes[`${push}`]?.text}
          />
        );
      })}
    </PushContainer>
  );
}
