import styled from 'styled-components';

const SvgContainer = styled.svg`
  width: 100%;
  height: 100vh;
  position: absolute;
  svg {
    width: 100%;
  }
`;

export default function HomePath({ changeBackground }) {
  return (
    <SvgContainer changeBackground={changeBackground}>
      <svg
        viewBox="0 0 1772 1080"
        fill="none"
        preserveAspectRatio="xMidYMin meet"
      >
        <path
          d="M1011 134.832C951.148 138.174 820 102.5 816.5 -0.5"
          stroke="#FEFF67"
          strokeWidth="2.5"
        />
        <path
          d="M1104.5 135C1157.17 132.5 1262.9 134.1 1264.5 160.5C1266.5 193.5 1133.5 166.5 1133.5 192C1133.5 210.927 1300.5 214 1344 214"
          stroke="#FEFF67"
          strokeWidth="2.5"
        />
        <path
          d="M1531 214C1610.67 212 1770.1 232.9 1770.5 332.5C1770.9 432.1 1653.33 454.333 1594.5 453"
          stroke="#FEFF67"
          strokeWidth="2.5"
        />
        <path
          d="M1302.5 453.5C1002 458 350.5 423 261.5 268.5C200.578 162.742 359 147.5 324 255.5C274.114 409.434 2 436.5 2 537C2 594.5 37.5 612 62.5 612"
          stroke="#FEFF67"
          strokeWidth="2.5"
        />
        <path
          d="M153.5 612C216.833 610 344.5 618.499 340.5 668.499C335.5 730.999 101.5 676.5 94.4998 725C88.8998 763.8 203.166 771.666 261 771"
          stroke="#FEFF67"
          strokeWidth="2.5"
        />
        <path
          d="M552.5 771C705 771 1036.9 670.6 1092.5 543C1162 383.5 1017.45 345.5 973 399C887 502.5 989.5 691 1180.5 691"
          stroke="#FEFF67"
          strokeWidth="2.5"
        />
        <path
          d="M1320.5 691.5C1369.83 691.833 1493.81 705.224 1468.5 803C1428.5 957.5 826 833 772 1081.5"
          stroke="#FEFF67"
          strokeWidth="2.5"
        />
      </svg>
    </SvgContainer>
  );
}
