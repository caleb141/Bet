import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  selectUser,
  selectToken,
  selectTempAuth,
} from '../reducers/auth.reducer';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
    const tempAuth = useSelector(selectTempAuth);


  return useMemo(() => ({ user, token ,tempAuth}), [user, token, tempAuth]);
};
