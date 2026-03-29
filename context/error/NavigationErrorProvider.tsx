"use client"
import React, { PropsWithChildren, useMemo, useState } from "react";
import NavigationErrorContext from "./NavigationErrorContext";

const NavigationErrorProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [redirectError, setRedirectError] = useState<string | undefined>();
  const clearRedirectError = () => setRedirectError(undefined);
  const error = useMemo(() => ({ redirectError, setRedirectError, clearRedirectError }), [redirectError]);

  return (
    <NavigationErrorContext.Provider value={error}>
      {children}
    </NavigationErrorContext.Provider>
  );
};

export default NavigationErrorProvider