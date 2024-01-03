import client from '@/api/client';

const ROUTE = '/auth';

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export interface User {
  id: number;
  role: UserRole;
  nickName: string;
  createdAt: string;
}

interface LoginRequest {
  authCode: string;
}

interface LoginResponse {
  accessToken: string;
  user: User;
}

interface AuthService {
  getLoginUrl: () => Promise<{ url: string }>;
  login: (p: LoginRequest) => Promise<LoginResponse>;
}

const authService: AuthService = {
  getLoginUrl: () => client.get(`${ROUTE}/signin-url`),
  login: (p: LoginRequest) =>
    client.get(`${ROUTE}/signin/kakao`, {
      params: {
        ...p,
        provider: 'kakao',
      },
    }),
};

export default authService;
