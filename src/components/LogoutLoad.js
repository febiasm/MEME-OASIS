import {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function LogoutLoad() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main>
    <div class="preloader">
      <div class="preloader__square"></div>
      <div class="preloader__square"></div>
      <div class="preloader__square"></div>
      <div class="preloader__square"></div>
    </div>
    <div class="status">Loging out<span class="status__dot">.</span><span class="status__dot">.</span><span class="status__dot">.</span></div>
  </main>
  );
}

export default LogoutLoad;
