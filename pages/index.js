import Head from 'next/head'
import styled from 'styled-components'
const Separator = styled.div`
width: 100%;
height: 1px;
background-color: #708189;
`;
const Home = () => (
  <div>
    <Head>
      <title>Penggengam Cahaya</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/font-awesome/css/font-awesome.min.css" />
    </Head>

    <ul>
      <li className="float-left"><a href=""><span><i class="fa fa-facebook fa-lg"></i></span></a></li>
      <li className="float-left"><a href=""><span><i class="fa fa-twitter fa-lg"></i></span></a></li>
      <li className="float-left"><a href=""><span><i class="fa fa-instagram fa-lg"></i></span></a></li>
      <li className="float-left"><a href=""><span><i class="fa fa-whatsapp fa-lg"></i></span></a></li>
      <li className="float-right"><a href=""><span><i class="fa fa-shopping-bag fa-lg"></i></span> Keranjang (0)</a></li>
      <li className="float-right"><a href=""><span><i class="fa fa-user-o fa-lg"></i></span> Login / Daftar</a></li>
      <li className="float-right"><a href=""><span><i class="fa fa-search fa-lg"></i></span></a></li>
    </ul>
    <div className="sub-nav">
      <ul class="sub-nav-ul">
        <li> <a href="/">Home</a></li>
        <li><a href="/about/">New Arrival <span><i class="fa fa-angle-down fa-lg"></i></span></a></li>
        <li><a href="/work/">Tas Besar</a></li>
        <li><a href="/clients/">Tas Kecil</a></li>
        <li><a href="/contact/">Tas Punggung</a></li>
        <li><a href="/contact/">Promo</a></li>
        <li><a href="/contact/">Blog</a></li>
      </ul>
    </div>
    <div className="content">
    <img src="https://ditzbrand.co.id/wp-content/uploads/2019/11/style-casual-pria-keren.jpg" />
    </div>
    <footer>

    </footer>

    <style jsx>{`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 50px 200px 50px 200px;
        overflow: hidden;
        background-color: #fff;
      }

      .float-left {
        float: left;
        color: #708189;
      }

      li a {
        display: block;
        color: black;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }

      li a:hover:not(.active) {
        color: #0277BD  ;
      }

      .active {
        background-color: #4CAF50;
      }
      .sub-nav-ul { text-align: center; }
      li { display: inline-block; }
      .float-right {
        float: right;
      }
      .float-center {
        float: center;
      }
      footer {
        width: 100%;
        height: 100px;
        background-color: #F5F6F8;  
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .sub-nav {
        margin-left: 200px;
        margin-right: 200px;
        text-align: center;
        border-top: 1px solid #E2E2E2;
        border-bottom: 1px solid #E2E2E2;
      }
      .content {
        margin-left: 200px;
        margin-right: 200px;
        text-align: center;
        border-top: 1px solid #E2E2E2;
        border-bottom: 1px solid #E2E2E2;
        padding: 50px 200px 0px 200px;
      }
      img {
        width : 100%;
        height: 100%;
      }

      hr {
        background-color: #E2E2E2;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
