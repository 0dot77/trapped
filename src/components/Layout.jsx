import useMobile from '../hooks/useMobile';
import { useLocation, useNavigate } from 'react-router-dom';

// location에 따라서 색깔 바뀌도록 설정
function locationCheck(currentPath, selectPath) {
  if (currentPath === selectPath) {
    return `bg-main border-main`;
  } else {
    return null;
  }
}

export default function Layout({ children }) {
  const mobile = useMobile();
  const loc = useLocation();
  const nav = useNavigate();

  if (mobile) {
    return <main className="max-w-full h-screen m-5">{children}</main>;
  }

  return (
    <main className="max-w-full h-screen m-12 flex">
      <nav className="w-full ">
        <div className="flex flex-col w-4 mr-8 h-full justify-center items-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              nav('/');
            }}
            className={`w-8 h-8 rounded-full border-2 border-black my-2 ${locationCheck(loc.pathname, '/')}`}
          ></button>
          <button
            onClick={(e) => {
              e.preventDefault();
              nav('/collect');
            }}
            className={`w-8 h-8 rounded-full border-2 border-black my-2 ${locationCheck(loc.pathname, '/collect')}`}
          ></button>
          <button
            onClick={(e) => {
              e.preventDefault();
              nav('/push');
            }}
            className={`w-8 h-8 rounded-full border-2 border-black my-2 ${locationCheck(loc.pathname, '/push')}`}
          ></button>
          <button
            onClick={(e) => {
              e.preventDefault();
              nav('/pull');
            }}
            className={`w-8 h-8 rounded-full border-2 border-black my-2 ${locationCheck(loc.pathname, '/pull')}`}
          ></button>
        </div>
      </nav>
      {children}
    </main>
  );
}
