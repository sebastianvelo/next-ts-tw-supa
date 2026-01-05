"use client";
import React, { PropsWithChildren, useState } from "react";
import NavigationErrorContext from "./NavigationErrorContext";

const NavigationErrorProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [redirectError, setRedirectError] = useState<string | undefined>();

  const clearRedirectError = () => setRedirectError(undefined);
  //TODO Hacer un parser de APIServiceError a APIClientError para visualizarlo.
  
  return (
    <NavigationErrorContext.Provider value={{ redirectError, setRedirectError, clearRedirectError }}>
      {children}
    </NavigationErrorContext.Provider>
  );
};

export default NavigationErrorProvider