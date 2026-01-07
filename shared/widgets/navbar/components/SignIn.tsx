import { Button } from "@/shared/libs/shadcn/ui/button";
import { Dialog, DialogTrigger } from "@/shared/libs/shadcn/ui/dialog";
import { LogIn } from "lucide-react";
import PopupWrapper from "../../signin/components/PopupWrapper";

const SignIn = () => {
  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button className="cursor-pointer">
              <LogIn />
              Sign In
            </Button>
          </DialogTrigger>
          <PopupWrapper />
        </form>
      </Dialog>
    </div>
  );
};

export default SignIn;
