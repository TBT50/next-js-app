import { ReactNode } from "react";
import { Sidebar } from "./layout/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-indigo-500">
      <div className="container mx-auto px-5 border-2 lg:max-w-7xl">
        <div className="grid grid-cols-4">
          <Sidebar />
          <div className="col-span-3 lg:col-span-2 border-x-[1]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
