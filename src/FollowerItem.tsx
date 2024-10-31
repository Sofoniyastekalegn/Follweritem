import { Follower } from "./types";
import "./FollowerItem.css";

export function FollowerItem({ follower }: { follower: Follower }) {
  return (
    <div className="item">
      {follower.username} -{" "}
      <em>since {follower.followingDate.toLocaleDateString()}</em>
    </div>
  );
}
