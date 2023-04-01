import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

export const SidebarItem = ({
  label,
  href,
  icon: Icon,
  onClick,
}: SidebarItemProps) => {
  return (
    <div className="flex flex-row items-center">
      <div className="relative rounded-full flex items-center justify-center p-4 my-1 hover:bg-gray-500 hover:bg-opacity-10 cursor-pointer">
        <Icon size={24} color="black" />
        <p className="hidden lg:block text-black text-xl pl-3">{label}</p>
      </div>
    </div>
  );
};
