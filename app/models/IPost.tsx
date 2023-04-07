interface IPost {
  id: string;
  user: {
    id: string;
    name: string;
    image: string;
  };
  title: string;
  createdAt: Date;
}

export default IPost;
