import { ENDPOINTS } from '../endpoints';
import { TokenRefreshBodyType, TokenRefreshResponsesType } from './types';
import mem from 'mem';

export const fetchRefreshToken = async (
  refreshToken: string,
  email: string
): Promise<TokenRefreshResponsesType> => {
  const requestBody: TokenRefreshBodyType = {
    refresh_token: refreshToken,
    email,
  };

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${ENDPOINTS.auth.refreshToken}`,
    {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response.json();
};

export const memFetchRefreshToken = mem(fetchRefreshToken, {
  cacheKey: JSON.stringify,
});
