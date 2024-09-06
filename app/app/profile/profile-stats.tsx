import React from "react";
import { Users, UserPlus, Star, Trophy, Wallet, Coins } from "lucide-react";

const profileStatsData = [
  {
    label: "Followers",
    value: 10,
    Icon: <Users size={24} />,
  },
  {
    label: "Following",
    value: 10,
    Icon: <UserPlus size={24} />,
  },
  {
    label: "Far Score",
    value: 10,
    Icon: <Star size={24} />,
  },
  {
    label: "Far Rank",
    value: 10,
    Icon: <Trophy size={24} />,
  },
  {
    label: "Total Value Locked (TVL)",
    value: 10,
    Icon: <Wallet size={24} />,
  },
  {
    label: "Total Moxies Earned",
    value: 10,
    Icon: <Coins size={24} />,
  },
];

export function ProfileStats() {
  return (
    <div className="grid p-4 gap-4 grid-cols-2">
      {profileStatsData.map(({ Icon, label, value }, index) => {
        return (
          <div
            className="flex border bg-card gap-2 items-center p-8"
            key={`stats__${index}`}
          >
            {Icon}
            <div>
              <p className="text-sm">{label}</p>
              <p className="text-2xl font-bold">{value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
