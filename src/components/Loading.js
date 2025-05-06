import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div class="loader">
    <span></span>
    <span></span>
    <span></span>
  </div>
  );
}

export default Loading;
