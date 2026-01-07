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

const SignInCard = () => {
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
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="e.g. user@example.com" />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button type="submit">Continue</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default SignInCard;
