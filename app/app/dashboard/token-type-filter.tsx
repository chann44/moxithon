import { Button } from "-/components/ui/button";

const filters = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Users",
    value: "users",
  },
  {
    label: "Channels",
    value: "channels",
  },
  {
    label: "Network",
    value: "network",
  },
];

export function FansTokenFilterType() {
  return (
    <div className="flex gap-2">
      {filters.map(({ label, value }, index) => {
        return (
          <Button
            variant={"secondary"}
            size={"sm"}
            className="rounded-none"
            key={`${value}__${index}`}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
}
