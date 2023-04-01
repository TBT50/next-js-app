import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

export const SidebarLogo = () => {
  const router = useRouter();
  return (
    <a onClick={() => router.push("/")}>
      <div className="p-4 my-1">
        <BsTwitter size={24} color="black" />
      </div>
    </a>
  );
};
