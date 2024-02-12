import React, { useState, useEffect, createContext } from "react";
import featureFlagsDataServiceCall from "./data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const resp = await featureFlagsDataServiceCall();
      console.log("resp: ", resp);
      setEnabledFlags(resp);
      setLoading(false);
    } catch (error) {
      consol.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
