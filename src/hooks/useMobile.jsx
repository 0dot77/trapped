import { useMediaQuery } from 'react-responsive';
export default function useMobile() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile;
}
