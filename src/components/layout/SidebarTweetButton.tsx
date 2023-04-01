import { FaFeather } from "react-icons/fa";

export const SidebarTweetButton = () => {
  return (
    <div>
      <div className="mt-5 rounded-full h-14 w-14 lg:w-[230px] p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <FaFeather size={24} color="white" className="lg:hidden" />
        <p className="hidden lg:block text-white font-semibold text-[17px]">
          Tweet
        </p>
      </div>
    </div>
  );
};
