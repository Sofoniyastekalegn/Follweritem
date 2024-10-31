import { Post } from "./types";
import "./PostItem.css";

export function PostItem({ post }: { post: Post }) {
  return (
    <div className="post-item">
      <div>{post.title}</div>
      <em>{post.publicationDate.toDateString()}</em>
    </div>
  );
}
