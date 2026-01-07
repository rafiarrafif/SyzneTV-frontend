import { Button } from "@/shared/libs/shadcn/ui/button";
import { LogIn } from "lucide-react";

const SignIn = () => {
  return (
    <div>
      <Button className="cursor-pointer">
        <LogIn />
        Sign In
      </Button>
    </div>
  );
};

export default SignIn;
