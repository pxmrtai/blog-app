import Layout from '../components/layout'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className='mainContainer'>
        <div className='itemContainer'>

        <Component {...pageProps} />
        </div>
      </div>
    </Layout>
  )
}