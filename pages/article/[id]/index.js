import {useRouter} from 'next/router'

const article = ({article}) => {
    return (
        <div>
           <h3>{article.title}</h3>
           <p>{article.body}</p>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()
  
    if (!article) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
          article
      }, // will be passed to the page component as props
    }
  }

export default article;
