import { ReactNode } from "react";
import { Sidebar } from "./layout/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-white h-full">
      <div className="container mx-auto px-5 lg:max-w-7xl">
        <div className="grid grid-cols-4">
          <Sidebar />
          <div className="col-span-3 lg:col-span-2 border-x-2">{children}</div>
        </div>
      </div>
    </div>
  );
};
