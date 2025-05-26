import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ProtectValueContext = createContext();
ProtectValueContext.displayName = 'ProtectValue';

export default function ProtectValueProvider({ children }) {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <ProtectValueContext.Provider value={{ isHidden, toggleHidden }}>
      {children}
    </ProtectValueContext.Provider>
  );
}
