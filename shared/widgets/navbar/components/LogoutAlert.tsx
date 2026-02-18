import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/libs/shadcn/ui/alert-dialog";
import { Spinner } from "@/shared/libs/shadcn/ui/spinner";
import { logout } from "@/shared/models/auth/logout";
import { Button } from "@base-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const LogoutAlert = ({
  openState,
  setOpenState,
}: {
  openState: boolean;
  setOpenState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const continueLogout = async () => {
    setIsLoading(true);
    const res = await logout();
    if (!res.success) {
      setIsLoading(false);
      toast.error(res.message || "Logout failed", {
        position: "bottom-right",
        description:
          "An error occurred while logging out. Please try again later.",
        richColors: true,
      });
    } else {
      toast.success(res.message || "Logout successful", {
        position: "bottom-right",
        description: "You have been logged out successfully.",
        richColors: true,
      });
      router.push("/auth/logout");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <AlertDialog open={openState}>
      <AlertDialogContent size="sm" onEscapeKeyDown={() => setOpenState(false)}>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will log you out of your account. You can log back in at
            any time. Do you want to proceed?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={isLoading}
            className="hover:cursor-pointer"
            variant="outline"
            onClick={() => setOpenState(false)}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction variant="destructive" asChild>
            <Button
              disabled={isLoading}
              className="w-full hover:cursor-pointer"
              onClick={continueLogout}
            >
              {isLoading && <Spinner />}
              Logout
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutAlert;
