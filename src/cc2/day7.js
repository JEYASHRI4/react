import React from "react";
import axios from "axios";



const baseURL = "https://642a6f8700dfa3b54745ac1d.mockapi.io/books";

export default function AXIOS() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  console.log(post);

  if (!post) return null;

  function handleItems(item) {
    return (
      <li key={item.id}>
      {item.Author} - {item.Book}
      </li>
       

    );
  }

  return (
    <div>
   
    {post.map(handleItems)}
 

    </div>
  );
}