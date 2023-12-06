import { useState, useEffect } from 'react';
import assets from '../../assets';

const LoadingComponent = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador((prevContador) => {
        if (prevContador < 20) {
          return prevContador + 1;
        } else {
          clearInterval(intervalo);
          return prevContador;
        }
      });
    }, 1000);

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <div className="loading-container flex justify-center mb-3">
        <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
          <svg className="h-20 w-20 animate-spin stroke-blue-500 p-2 ms:p-0" viewBox="0 0 256 256">
            <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
            <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
              strokeWidth="24"></line>
            <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
            </line>
            <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
              strokeWidth="24"></line>
            <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
            </line>
            <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
              strokeWidth="24"></line>
            <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
            <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
            </line>
          </svg>
          <span className=" text-2xl sm:text-4xl font-medium text-blue-500">Loading...</span>
          <span className="bg-blue-500 text-white inline-block text-center px-2 sm:px-2 py-1 rounded text-xl sm:text-3xl font-semibold">
            {contador} Seconds
          </span>
        </div>
      </div>

      <div className="mb-10 sm:m-0 m-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md shadow-blue-500/30 overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img className="sm:h-48 w-full object-cover md:h-full md:w-48" src={assets.imgLoading} />
            </div>
            <div className="p-8">
              <p className="mt-2 font-medium text-blue-900/70">
                Remember to take care of your <strong>voice</strong> and recharge your <strong>batteries</strong>!
                <br />
                <br />
                Take <strong>20 seconds</strong> to drink <strong>water</strong> before continuing to practice your <strong>speaking</strong>. 🌟💬💧
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingComponent;
