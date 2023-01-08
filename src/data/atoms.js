import { atom } from 'recoil';

const homeBackgroundState = atom({
  key: 'homeBackground',
  default: 'white',
});

export { homeBackgroundState };
