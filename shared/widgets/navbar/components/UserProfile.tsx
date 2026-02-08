import { useAuth } from "@/shared/contexts/AuthContext";
import { Avatar, AvatarImage } from "@/shared/libs/shadcn/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/libs/shadcn/ui/dropdown-menu";
import {
  Bookmark,
  CircleUserRound,
  ClockFading,
  LifeBuoy,
  LogOut,
  MessagesSquare,
  Settings,
  Webhook,
} from "lucide-react";

const UserProfile = () => {
  const { session } = useAuth();
  return (
    <div className="h-full flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar size="lg" className="cursor-pointer">
            <AvatarImage
              className="rounded-md"
              src={session?.user?.avatar}
              alt={session?.user?.name}
            />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuItem>
              <CircleUserRound />
              My Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ClockFading />
              Your Activity
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bookmark />
              Saved Bookmarks
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              Settings
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <MessagesSquare />
              Forum
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LifeBuoy />
              Help
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Webhook />
              API
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOut />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserProfile;
