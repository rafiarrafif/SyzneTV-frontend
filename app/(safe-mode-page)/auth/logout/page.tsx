import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const page = async () => {
  (await cookies()).delete("auth_token");
  redirect("/");
};

export default page;
