import Link from 'next/link'
import styles from '../styles/Home.module.css'
import PageLayout from '../components/PageLayout.jsx'
import Image from 'next/image'
// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'

export default function Home({ articles }) {
  // Navegar de forma programatica, usarlo solo a una accion del usuario (forms)
  // const router = useRouter()
  // <button onClick={() => router.push('/about')}>
  //       Ir a About
  // </button>

  // Fetch API, traditional way
  // const [articles,setArticles] = useState([])
  // useEffect(() => {
  //   fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-01-27&sortBy=publishedAt&apiKey=14a94e1529b74d7fa3d68ad02b04a83c')
  //   .then(res => res.json())
  //   .then(data => {
  //     setArticles(data.articles)
  //   })
  // },[])

  return (
    <PageLayout title='NewsApp - Home'>
      <div className={styles.container}>

        {articles.length === 0 && <h1>Cargando...</h1>}
        {articles.length > 0 && articles.slice(0,5).map((article, index) => (
          <div key={index}>
            <Image

              alt={`Image for the article ${article.title}`}
              src={article.urlToImage}
              width={450}
              height={300}
              quality={50}
              layout='responsive'
              priority={(index < 2)} // true or false: Renderiza la imagen antes que el resto, destina recursos para que se renderice antes

            />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}

      </div>
    </PageLayout>
  )
}

// N requests -> Se ejecuta 1 vez en build time (o para refrescar la pagina)
export async function getStaticProps() {
  const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-01-28&sortBy=publishedAt&apiKey=29c8fc2d96ab4c449a28ff6f1c2457bb')
  const { articles } = await response.json()
  console.log('articles',articles)
  return { props: { articles } }
}

// N requests -> Se ejecuta N veces
// para datos que necesitan que sean muy LIVE
// tiene demasiados datos dinamicos
// Static Site Generation
// export async function getServerSideProps(context) {
//   const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-01-27&sortBy=publishedAt&apiKey=14a94e1529b74d7fa3d68ad02b04a83c')
//   const { articles } = await response.json()
//   return {
//     props: {
//       articles
//     }
//   }
// }
