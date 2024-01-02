import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectMode } from '../reducers/preference.reducer';

export const usePreference = () => {
  const darkMode = useSelector(selectMode);


  return useMemo(() => ({ darkMode }), [darkMode]);
};
