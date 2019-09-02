import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
// import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    {/* <Nav /> */}

    <div className='hero'>
      <h1 className='title'>Yet Another Company LLC</h1>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
        text-align: center;
      }
    `}</style>
  </div>
)

export default Home
