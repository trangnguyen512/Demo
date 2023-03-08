import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../apis/auth';
import { useShallowEqualSelector } from '../hooks/useShallowEqualSelector';
import { getToken } from '../../helpers/local-storage';
import {
  selectIsAuthenticated,
  setAuthenticated,
  setCurrentUser,
} from '../../store/slices/authSlice';
import Router from 'next/router';

const useCheckLogin = (): boolean => {
  const [renderRoute, setRenderRoute] = useState(false);
  const dispatch = useDispatch();

  const isAuthenticated = useShallowEqualSelector(selectIsAuthenticated);

  const fetchCurrentUser = useCallback(async () => {
    try {
      const response = await getCurrentUser();
      if (response && response.data) {
        dispatch(setAuthenticated(true));
        dispatch(setCurrentUser(response.data.data));
      }
    } catch (error) {
      Router.push('auth/sign-in');
      console.log(error);
    }
    setRenderRoute(true);
  }, [dispatch]);

  useEffect(() => {
    // set a clean up flag
    if (!isAuthenticated) {
      if (!getToken()) {
        setRenderRoute(true);
        Router.push('auth/sign-in');
      } else {
        fetchCurrentUser();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return renderRoute;
};

export default useCheckLogin;
