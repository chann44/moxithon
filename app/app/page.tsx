import { redirect } from "next/navigation";

export default function AppHomePage() {
  return redirect("/dashboard");
}
