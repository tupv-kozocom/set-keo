import { ReactNode } from 'react';

type AuthenticationLayoutProps = {
  children: ReactNode;
};

function AuthenticationLayout({ children }: AuthenticationLayoutProps) {
  return (
    <div className="min-h-screen relative">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gray-100" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-orange-100" />

        <div className="relative flex justify-center items-center h-screen">
            {children}
        </div>
    </div>
  )
}

export default AuthenticationLayout;
