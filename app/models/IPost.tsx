interface IPost {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  published: boolean;
  userId: string;
  user: {
    id: string;
    name: string;
    email?: string;
    emailVerified?: Date;
    image?: string;
  };
}

export default IPost;
