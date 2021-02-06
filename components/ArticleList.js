import articlesListStyles from '../styles/ArticleList.module.css';
import ArticleItem from '../components/ArticleItem'

  export default function ArticleList({articles}) {
    return (
        <div className={articlesListStyles.grid}>
            {articles.map(article => (
                <ArticleItem article={article} key={article.id}/>
            ))}
        </div>
    )
}


