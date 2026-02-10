import StatusIndex from "@/features/status";
import { backendFetch } from "@/shared/helpers/backendFetch";
import { redirect } from "next/navigation";

const page = async () => {
  // Check service status with API call
  let isDown = false;
  try {
    const data = await backendFetch("status");
    console.log(data);
  } catch {
    isDown = true;
  }
  if (!isDown) redirect("/");

  return (
    <div>
      <StatusIndex />
    </div>
  );
};

export default page;
