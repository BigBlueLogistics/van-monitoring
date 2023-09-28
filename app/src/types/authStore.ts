export type AuthStoreType = {
  successfulRequests: Record<string, any>;
  failedRequests: Record<string, any>;
  request: Record<string, any>;
  authenticated: boolean;
  apiToken: string;
};
