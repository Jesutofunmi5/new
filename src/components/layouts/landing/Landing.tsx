import { useLocation } from "react-router-dom";

import { Footer, Navbar } from "components/modules";

import type { ReactNode } from "react";

interface Props {
  footer?: boolean;
  children: ReactNode;
}

const Landing = ({ children, footer = true }: Props) => {
  const { pathname } = useLocation();
  return (
    <div className="relative w-full min-h-screen">
      {pathname === "/" ? (
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar transparent />
        </div>
      ) : (
        <Navbar />
      )}

      {children}
      <div>{footer && <Footer />}</div>
    </div>
  );
};

export default Landing;
