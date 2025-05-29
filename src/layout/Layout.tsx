import type { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-pink-50 min-h-dvh">
      <header className="p-10">
        <h1 className="flex justify-center text-5xl">HabitCraft</h1>
      </header>
      <main className="flex justify-center">{children}</main>
    </div>
  );
}

export default Layout;
