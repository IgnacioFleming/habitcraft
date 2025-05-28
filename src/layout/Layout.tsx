import type { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-pink-50 min-h-dvh">
      <header>
        <h1 className="flex justify-center">HabitCraft</h1>
      </header>
      <main className="flex justify-center">{children}</main>
    </div>
  );
}

export default Layout;
