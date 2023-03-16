import { useStoreState } from "easy-peasy";
const Footer = ({length}) => {
    const now = new Date().getFullYear();
    const postCount = useStoreState((state) => state.postCount);    
  return (    
      <footer className="Footer">
        {/* <p>{postCount} Blog Posts</p> */}
        <p>Copyright@{now} 💗 by Kun</p>
      </footer>   
  )
}
export default Footer;
