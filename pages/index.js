import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
// import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,300" rel="stylesheet" type="text/css"></link>
    </Head>

    {/* <Nav /> */}

    <div className='hero'>
      <h1 className='title'>Yet Another Company LLC</h1>

      <div className='resume'>
      Check out my 
        <Link href="https://jonaylor.xyz/resume">
          <a> Resume</a>
        </Link>
      </div>
      <div className='email'>
        And contact me at
        <Link href="mailto:yetanothercompanyllc@gmail.com">
          <a> yetanothercompanyllc@gmail.com </a>
        </Link>
      </div>
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
        font-family: 'Open Sans', sans-serif;
        text-align: center;
      }
      .resume {
        display: inline-block;
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 32px;
        font-family: 'Open Sans', sans-serif;
        text-align: center;
      }
      
      a {
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default Home
