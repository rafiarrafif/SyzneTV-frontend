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
import React from "react";

const LogoutAlert = ({
  openState,
  setOpenState,
}: {
  openState: boolean;
  setOpenState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const continueLogout = async () => {
    setIsLoading(true);
    await logout().then((res) =>
      res.success ? window.location.reload() : setIsLoading(false),
    );
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
