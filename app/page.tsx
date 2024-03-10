import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <p>Only authenticated users can see this</p>
      <UserButton afterSignOutUrl="/" />
    </>
  );
}
