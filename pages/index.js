import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

// what renders on client side
export default function Home({results}) {
  // console.log(props);
  return (
    <div >
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      <Nav/>
      <Results results={results}/>
    </div>
  )
}

// Renders on server side. Will render before client renders
export async function getServerSideProps(context){
  // where we make a request to data api
  const genre = context.query.genre

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
                        .then(res => res.json());

  return {
    props: {
      results:request.results
    }
  }
}