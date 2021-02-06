import server from '../../../config'
import Link from 'next/link'

const article = ({article}) => {
    return (
        <div>
           <h3>{article.title}</h3>
           <p>{article.body}</p>
           <br/>
           <center><Link href="/">Go back</Link></center>
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()
  
    if (!article) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
          article// will be passed to the page component as props
      }, 
    }
  }

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()
    
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => (
        {params: {id: id.toString()}}
        ))

    return  {
          paths,
          fallback: false
      } // will be passed to the page component as props
  }


export default article;
