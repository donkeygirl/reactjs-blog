import Feed from './Feed';
import { useStoreState } from "easy-peasy";

const Home = ({ fetchError, isLoading }) => {
  const searchResults = useStoreState((state) => state.searchResults);
  
  return (
    <main className="Home">
      {isLoading && <p className='statusMsg'>Loading posts...</p>}
      {fetchError && <p className='statusMsg' style={{color:'red'}}>{fetchError}</p>}
      {!isLoading && !fetchError && searchResults.length?(<Feed posts={searchResults} />):(
        <p className='statusMsg' style={{marginTop:'2rem'}}>No posts to desplay</p>
      )}
    </main>
  )
}
export default Home;