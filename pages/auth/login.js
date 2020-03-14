import Head from 'next/head'
import styled from 'styled-components'

const Container = styled.div`
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`;
const Title = styled.h2`
    color: red;
`;
const Login = () => (
    <div>
        <ul>
  <li><a href="/">Home</a></li>
  <li><a href="/about/">About</a></li>
  <li><a href="/work/">Work</a></li>
  <li><a href="/clients/">Clients</a></li>
  <li><a href="/contact/">Contact</a></li>
</ul>


        <style jsx>
            {`
        ul { text-align: center; }
        li { display: inline-block; }
        
        `}
        </style>
    </div>
)

export default Login