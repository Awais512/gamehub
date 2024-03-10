import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <div>
        Dashboard
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
}
