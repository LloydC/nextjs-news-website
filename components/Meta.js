import Head from 'next/head'

const Meta = ({title, description, keywords}) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width,initial-scale=1'/>
            <meta name='keywords' content={keywords}/>
            <meta name='description' content={description}/>
            <meta charSet='utf-8'/>
            <link rel='icon' href='/favicon.ico'/> 
            <title>{title}</title>  
        </Head>
    )
}

Meta.defaultProps = {
    title: 'WebDev News',
    description:'Get the latest news in web dev',
    keywords: 'web development, programming'
}

export default Meta;
