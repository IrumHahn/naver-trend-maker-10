export interface AuthUser {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
}

export interface AuthLoginInput {
  email: string;
  password: string;
}

export interface AuthRegisterInput extends AuthLoginInput {
  name?: string;
}

export interface AuthSessionState {
  authenticated: boolean;
  user?: AuthUser;
  expiresAt?: string;
}

export interface AuthTokenSession extends AuthSessionState {
  authenticated: true;
  token: string;
  user: AuthUser;
  expiresAt: string;
}
