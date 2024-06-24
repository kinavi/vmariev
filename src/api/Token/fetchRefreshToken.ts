import { ENDPOINTS } from '../endpoints';
import { TokenRefreshBodyType, TokenRefreshResponsesType } from './types';
import mem from 'mem';

export const fetchRefreshToken = async (
  refreshToken: string,
  email: string
): Promise<TokenRefreshResponsesType | null> => {
  const requestBody: TokenRefreshBodyType = {
    refresh_token: refreshToken,
    email,
  };
  try {
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
    if (response.status === 403) {
      return null;
    }
    if (response.status === 200) {
      return response.json();
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const memFetchRefreshToken = mem(fetchRefreshToken, {
  cacheKey: JSON.stringify,
});
