import PostGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';
//jest specyficzny dla home page i dlatego jest w folderze /home-page a nie /posts

function FeaturedPosts(props){
    return <section className={classes.latest}>
        <h2>Featured Posts</h2>
        {/* A list of posts jako grid wykorzstany weile razy - róznica że na róznych stronach bedzie ich rózna liczba*/}
        <PostGrid posts={props.posts}/>
    </section>
}

export default FeaturedPosts;