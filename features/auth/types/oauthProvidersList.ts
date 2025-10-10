export interface OauthProviders {
  name: string;
  icon: string;
  req_endpoint: string;
  client_id: string | undefined;
  client_secret: string | undefined;
  client_callback: string;
}
