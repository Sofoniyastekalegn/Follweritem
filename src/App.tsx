import "./App.css";
import { List } from "./components/List";
import { Follower, Post } from "./components/types";
import { FollowerItem } from "./components/FollowerItem";
import { PostItem } from "./components/PostItem";

const followers: Follower[] = [
  { username: "ndeyefatoudiop", followingDate: new Date("2023/01/01") },
  { username: "nfdiop", followingDate: new Date("2024/01/01") },
];

const posts: Post[] = [
  {
    id: "1",
    title: "37 Tips from a Senior Frontend Developer",
    contents: "1. Master the fundamentals…",
    publicationDate: new Date("2024/05/07"),
  },
  {
    id: "2",
    title:
      "Struggling to Learn React Or Any JavaScript Framework? Here are 7 Mistakes Holding You Back (And What To Do Instead) 💪🎉",
    contents: "Struggling to learn React or any other JS framework?…",
    publicationDate: new Date("2024/02/07"),
  },
];

export function App() {
  return (
    <div>
      <List
        title="Followers"
        items={followers}
        renderItem={(follower) => <FollowerItem follower={follower} />}
        compareFn={(a, b) =>
          a.followingDate.getTime() - b.followingDate.getTime()
        }
        getItemKey={(follower) => follower.username}
        vertical={false}
      />
      <List
        title="Posts"
        items={posts}
        getItemKey={(post) => post.id}
        renderItem={(post) => <PostItem post={post} />}
        compareFn={(a, b) =>
          a.publicationDate.getTime() - b.publicationDate.getTime()
        }
        ascending={false}
      />
    </div>
  );
}
