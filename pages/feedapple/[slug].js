import { useRouter } from 'next/router';
import styles from '../../styles/Feed.module.css';
import { Toolbar } from '../../components/toolbar';


// apple-headlines api key
export const FeedApple = ({ pageNumber, articles }) => {
    const router = useRouter();
return (

<div className='page-container'>
    <Toolbar />
<div className={styles.main}>
{articles.map((article, index) => (
<div key={index} className={styles.post}>
<h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
<p>{article.description}</p>
{!!article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
</div>
))}
</div>
  <div className={styles.paginator}>
    <div 
      onClick={() => {
if (pageNumber > 1) {
  router.push(`/feed/${pageNumber - 1}`);
}
      }}
      className={pageNumber === 1 ? styles.disabled : styles.active}>
          Previous Page</div>
      <div>Page {pageNumber}</div>
      
      <div 
      onClick={() => {
        if (pageNumber < 5) {
            router.push(`/feed/${pageNumber + 1}`);
}
}}
      className={pageNumber === 5 ? styles.disabled : styles.active}>
          Next Page
  </div>
</div>    
</div>   
    );
}
export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug;

    if (!pageNumber || pageNumber <1 ||  pageNumber > 5) {
        return {
            props: {
                pageNumber: 1,
                articles: []
            }
        }
    }
    const apiResponse = await fetch(
        `https://newsapi.org/v2/everything?q=apple&from=2021-11-16&to=2021-11-16&sortBy=popularity&apiKey=1af6d388e6a74cc68553be3943f1a6d7`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
          },
        },
      ).then(res => res.json());

  const { articles } = apiResponse;
  return {
    props: {
        articles,
        pageNumber: Number.parseInt(pageNumber)
  },
};
};  

export default FeedApple;