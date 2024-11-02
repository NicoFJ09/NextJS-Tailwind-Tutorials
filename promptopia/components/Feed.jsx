
'use client'

import { useState, useEffect } from 'react';
import PromptCard from './PromptCard'; // Asegúrate de que la ruta sea correcta

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}



const Feed = () => {

  const[searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState ([]);
  const handleSearchChange= (e) => {
  
    
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/prompt');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error al obtener los prompts:', error);
      }
    }
    console.log(posts);
    fetchPosts(); // Llamada correcta a fetchPosts
  }, []);

  return (
    <section className="feed">
    
      <form className="relative w-full flex-center">
        <input
        type= "text"
        placeholder = "Search for a tag or a username"
        value ={searchText}
        onChange = {e=> setSearchText(e.target.value)}
        className="search_input peer"
        />
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
      />

    </section>
  )
}

export default Feed