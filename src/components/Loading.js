import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000);

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

export default Loading;
