import Head from 'next/head'
import server from '../config/index'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) { 
  return (
    <div>
      <Head>
        <title>NextJS Practice Homepage</title>
        <meta name="keywords" content="web development, programming"/>
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
        articles
    }, // will be passed to the page component as props
  }
}