export interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken?: string;
}

export interface TokenPayload {
  exp: number;
  sub: string;
}
