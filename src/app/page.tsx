import { auth } from "../auth";

export default async function UserAvatar() {
  const session = await auth();

  return <div>{JSON.stringify(session)}</div>;
}
