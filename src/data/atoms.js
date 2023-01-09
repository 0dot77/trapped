import { atom } from 'recoil';

const homeBackgroundState = atom({
  key: 'homeBackground',
  default: false,
});

export { homeBackgroundState };
