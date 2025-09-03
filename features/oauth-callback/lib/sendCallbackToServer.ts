"use server";
import { api } from "@/shared/api/connector";

/**
 * @function SendCallbackToServer
 * @description Proxies OAuth callback requests from the frontend to the main backend system.
 *              Acts as an intermediary between the client Next.js application and the Elysia server.
 *              Handles the forwarding of OAuth provider callback data for authentication processing.
 *
 * @param {string} data - The OAuth callback data received from the provider, typically containing
 *                        query parameters such as authorization code, user consent, scopes, state,
 *                        and other OAuth-specific information. Usually obtained from
 *                        `window.location.search` in browser environments.
 * @param {string} provider - The name of the OAuth provider/service (e.g., "google", "github",
 *                           "facebook"). Used to construct the appropriate backend API endpoint.
 *
 * @returns {Promise<Object>} The response data from the backend server after processing the
 *                           OAuth callback. Typically contains authentication tokens, user
 *                           information, or session data.
 *
 * @throws {Error} If the network request fails or the backend returns an error response.
 * @throws {Error} If the required environment variable APP_DOMAIN is not defined.
 * @throws {Error} If the provided parameters are invalid or missing.
 *
 * @example
 * // Handling OAuth callback in a React component
 * useEffect(() => {
 *   const handleOAuthCallback = async () => {
 *     try {
 *       const result = await SendCallbackToServer(window.location.search, "google");
 *       // Handle successful authentication (e.g., store tokens, redirect user)
 *       console.log("Authentication successful:", result);
 *     } catch (error) {
 *       // Handle authentication errors
 *       console.error("Authentication failed:", error);
 *     }
 *   };
 *
 *   handleOAuthCallback();
 * }, []);
 *
 * @example
 * // Usage with different providers
 * await SendCallbackToServer(window.location.search, "github");
 * await SendCallbackToServer(window.location.search, "facebook");
 * await SendCallbackToServer(window.location.search, "microsoft");
 *
 * @remarks
 * - This function is specifically designed for OAuth callback handling in a Next.js frontend
 *   acting as a proxy to an Elysia backend.
 * - The `data` parameter should include the complete query string from the OAuth redirect.
 * - The callback URI is automatically constructed using the APP_DOMAIN environment variable.
 * - Ensure APP_DOMAIN is properly configured in your environment variables.
 */
export const SendCallbackToServer = async (data: string, provider: string) => {
  // Construct the backend and frontend handler URLs
  const backendHandlerUrl = `auth/${provider}/callback/`;
  const frontendHandlerUrl = `${process.env
    .APP_DOMAIN!}/auth/callback/${provider}`;

  try {
    // Forward the OAuth callback data to the backend for processing
    const response = await api.get(
      `${backendHandlerUrl}${data}&callbackURI=${frontendHandlerUrl}`
    );

    // Parse the JSON response from the backend and return the result
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
