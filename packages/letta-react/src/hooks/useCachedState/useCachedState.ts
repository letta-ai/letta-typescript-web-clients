import { useGlobalLettaConfig } from '../useGlobalLettaConfig/useGlobalLettaConfig';
import { useState } from 'react';

export function useCachedState<T>(key: string, defaultValue: T) {
  const { isProviderSet, cachedData, updateCache } = useGlobalLettaConfig();

  const [localState, setLocalState] = useState<T>(defaultValue);

  if (!isProviderSet) {
    return [localState, setLocalState];
  }

  return [
    cachedData?.[key] || defaultValue,
    (value: T) => {
      updateCache((prevState) => {
        return {
          ...prevState,
          [key]:
            typeof value === 'function'
              ? value(prevState?.[key] || defaultValue)
              : value,
        };
      });
    },
  ];
}
