import { LoginDotGovButton } from "./LoginDotGovButton";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  if (session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full items-center justify-between font-bold lg:flex">
          <p>Hello {session?.user?.email}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-bold lg:flex">
        <LoginDotGovButton />
      </div>
    </main>
  );
}
