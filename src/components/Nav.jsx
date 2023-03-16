import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { useStoreState, useStoreActions } from "easy-peasy";

const Nav = () => {
  const posts = useStoreState((state) => state.posts);
  const search = useStoreState((state) => state.search);
  const setSearch = useStoreActions((actions) => actions.setSearch);
  const setSearchResults = useStoreActions((actions) => actions.setSearchResults);

  //search
  useEffect(()=>{
    const filterResults = posts.filter(
      post=>((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase())
    );
    setSearchResults(filterResults.reverse());
  },[posts,search,setSearchResults]);
  
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e)=>e.preventDefault}>
        <label htmlFor="search">Search Posts</label>
        <input
          id='search'
          type='text'
          placeholder="Search Posts"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        ></input>
      </form>
      <ul>
        <li><NavLink to='/'  className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to='post' className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}>Post</NavLink></li>
        <li><NavLink to='about' className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}>About</NavLink></li>
      </ul>
    </nav>
  )
}
export default Nav;