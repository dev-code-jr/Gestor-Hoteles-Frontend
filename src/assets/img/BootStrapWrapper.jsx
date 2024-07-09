import { useEffect } from 'react';
export const BootstrapWrapper = ({ children }) => {
    useEffect(() => {
      import('bootstrap/dist/css/bootstrap.min.css');
    }, []);
  
    return <>{children}</>;
  };
  