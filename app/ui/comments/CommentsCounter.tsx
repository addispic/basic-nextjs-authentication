import axios from "axios";
export default async function CommentsCounter({ blogId }: { blogId: string }) {
    const response = await axios.get(
      `http://localhost:3000/api/comments?blogId=${blogId}`
    );
  return <>{response?.data?.comments?.length}</>;
}