export interface Post {
    id: string;
    title: string;
    contents: string;
    publicationDate: Date;
  }
  
  export interface User {
    username: string;
  }
  
  export interface Follower extends User {
    followingDate: Date;
  }
  