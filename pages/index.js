import Head from 'next/head'

import { test } from '../services'

const title = 'benwk\'s coding'
const author = 'benwk'
const domain = 'https://benwk.com'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{ title }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <br />
          <br />
          <a className="text-blue-600" href={ domain }>
            { title }
          </a>
        </h1>
      </main>

      <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
        <div>
          Designed and built{' '}with ❤️ by{' '}
          <a className="text-blue-600 font-semibold" href="mailto:z@benwk.com">
            { author }
          </a>
        </div>
        
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const testResult = await test() || 'error'
  return {
    props: {
      testResult
    }
  }
}
