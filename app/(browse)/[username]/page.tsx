import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";
import { isBlockedByUser } from "@/lib/block-service";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    return notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-y-4">
      <p>User ID: {user.id}</p>
      <p>User: {user.username}</p>
      <p>isFollowing: {`${isFollowing}`}</p>
      <p>isBlocked by this user: {`${isBlocked}`}</p>
      <Actions isFollowing={isFollowing} userId={user.id} />
    </div>
  );
};

export default UserPage;
