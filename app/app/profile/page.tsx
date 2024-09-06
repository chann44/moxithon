import { ProfileStats } from "./profile-stats";
import { Avatar, AvatarFallback, AvatarImage } from "-/components/ui/avatar";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center gap-6">
        <Avatar className="h-24 w-24">
          <AvatarImage src="/path-to-your-image.jpg" alt="User avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-y-4">
          <div>
            <h1 className="text-xl font-medium">Vikash Manda</h1>
            <p className="text-xs font-light">@chansw</p>
          </div>
          <p>Fuck Anime</p>
        </div>
      </div>
      <ProfileStats />
    </div>
  );
}
