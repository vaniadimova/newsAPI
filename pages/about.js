import Head from 'next/head';
import Link from 'next/link';
import { Toolbar } from '../components/toolbar'
import styles from  '../styles/About.module.css'


export const About = () => {
    return (
<>
<Head>
    <title>About</title>
    <meta property="og:title" content="About Page " key="about" />
</Head>
        <div >
            <Toolbar />
            <div className={styles.main} >
             
                
                <div className={styles.img} >
                
<img src="https://images.unsplash.com/reserve/YEc7WB6ASDydBTw6GDlF_antalya-beach-lulu.jpg?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxwb3J0cmFpdCUyMHdvcmtpbmclMjByZWQlMjBoYWlyJTIwJTIwd29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="me looking at the sunset"/ >
                </div>
                <div className={styles.paragraph}>
                    <p>  Sunsets are a great reminder to rest and reset our hearts and minds at the end of each and every day</p>
                </div>

                <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Vania. I'm a  self-thought web developer, writer, and follower  of&nbsp;
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
                Next.js
            </a>
            &nbsp;and&nbsp;
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              React .
            </a>
            &nbsp;I like ▲Vercel as top choice of deployment but also use Hostinger and Netlify.
          </p>
          <p > 
            I’ve travelled to few countries around the world. This is a direct news stream for all of you that loves to read &nbsp; 
            <Link href="/feed/1" >
              <a >NEWS FEED.</a>
            </Link>
          </p>
          <p>
           I spend my free time listening and playing  music, creating videos, and enjoying time with friends
            and family in Toronto, ON.
          </p>
        </div>
        </div>
        </div>
       <div className={styles.main}  >
       <Link href='https://www.deventweb.com'><a>www.deventweb.com</a></Link>
         </div> 
     </div>
        </>
    )
    };

    export default About;