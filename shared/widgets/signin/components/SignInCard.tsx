import { Button } from "@/shared/libs/shadcn/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/libs/shadcn/ui/dialog";
import { Input } from "@/shared/libs/shadcn/ui/input";
import { Label } from "@/shared/libs/shadcn/ui/label";
import { Separator } from "@/shared/libs/shadcn/ui/separator";
import { useCallback, useEffect, useState } from "react";
import {
  getAllThirdPartyAuth,
  GetALlThirdPartyAuthCallback,
} from "../actions/getAllThirdPartyAuth";
import { Icon } from "@iconify/react";
import { Spinner } from "@/shared/libs/shadcn/ui/spinner";
import { getOauthEndpoint } from "../actions/getOauthEndpoint";
import { toast } from "sonner";

const SignInCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [oAuthProviders, setOAuthProviders] =
    useState<GetALlThirdPartyAuthCallback | null>(null);

  // Fetch available third-party auth providers on component mount
  useEffect(() => {
    (async () => {
      const res = await getAllThirdPartyAuth();
      setOAuthProviders(res);
    })();
  }, []);

  // Open OAuth endpoint in a new popup window
  const getOauthEndpointUrl = async (
    providerReqEndpoint: string,
    providerName: string,
  ) => {
    const res = await getOauthEndpoint({
      endpointUrl: providerReqEndpoint,
      providerName: providerName,
    });

    setIsLoading(true);
    window.open(res.data?.endpointUrl, "oauthPopup", "width=500,height=600");
  };

  // Handle the feedback from popup window for OAuth
  const handleMessage = useCallback((event: MessageEvent) => {
    if (event.origin !== window.location.origin) return;
    if (event.data.type === "oauth-success") {
      toast.success("Authentication successful! Redirecting...", {
        description: event.data.message,
        richColors: true,
      });
      window.location.reload();
    }
    if (event.data.type === "oauth-failed") {
      toast.error("Authentication failed.", {
        description: event.data.message || "Please try again.",
        duration: 5000,
        richColors: true,
      });
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [handleMessage]);

  return (
    <DialogContent showCloseButton={false}>
      <DialogHeader>
        <DialogTitle>Get Started</DialogTitle>
        <DialogDescription>
          Sign in to access personalized features and stay updated with the
          latest content.
        </DialogDescription>
      </DialogHeader>
      <div className="py-1">
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="e.g. user@example.com" />
        </div>
        <div className="my-4 flex items-center gap-2 ">
          <Separator className="flex-1 bg-neutral-700" />
          <p className="text-neutral-500 text-sm">or continue with</p>
          <Separator className="flex-1 bg-neutral-700" />
        </div>
        <div>
          {oAuthProviders ? (
            <div className="flex flex-col gap-2">
              {oAuthProviders.data?.map((provider, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-neutral-300 text-xs font-normal"
                  disabled={isLoading}
                  onClick={() =>
                    getOauthEndpointUrl(provider.req_endpoint, provider.name)
                  }
                >
                  {isLoading && <Spinner />}
                  <Icon icon={provider.icon} />
                  Continue with {provider.name}
                </Button>
              ))}
            </div>
          ) : (
            <Button size="sm" className="w-full" variant="outline" disabled>
              There are no third-party auth providers available.
            </Button>
          )}
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline" disabled={isLoading}>
            Cancel
          </Button>
        </DialogClose>
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Spinner />}
          Continue
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default SignInCard;
