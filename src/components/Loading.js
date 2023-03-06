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
    <body>
		<div class="loader">
			<span>V</span>
			<span>A</span>
			<span>L</span>
			<span>I</span>
			<span>D</span>
			<span>A</span>
			<span>T</span>
            <span>N</span>
			<span>G</span>
			 


		</div>
	</body>
  );
}

export default Loading;
