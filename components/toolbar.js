import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';
import Image from 'next/image'
import Link from 'next/link';
import { FaGithub, FaLinkedin,  FaTwitterSquare, FaCodepen, FaFacebookSquare} from "react-icons/fa";

export const Toolbar = () => {
    const router = useRouter();
    return (
        <div className={styles.main}>
           
            <div className={styles.logo}>   <Image src="/bluelogo.png" width={70} height={70} />
            </div>
          
        <div onClick={() => router.push('/')}>Home</div>
        <div onClick={() => router.push('/feed/1')}>News</div>
        <div onClick={() => router.push('/about')}>About</div>
       
    
        <div className={styles.icons}><Link href={'https://www.linkedin.com/in/vaniadimo/'}><a target="_blank"><FaLinkedin size="1.5em"/></a></Link></div>
        <div className={styles.icons}><Link href={'https://github.com/vaniadimova'}><a target="_blank"><FaGithub size="1.5em"/></a></Link></div>
       <div className={styles.icons}><Link  href={'https://twitter.com/12Dimov'}><a target="_blank"> <FaTwitterSquare size="1.5em" /></a></Link></div> 
       <div className={styles.icons}><Link  href={'https://codepen.io/your-work'}><a target="_blank"> < FaCodepen size="1.5em" /></a></Link></div> 
       <div className={styles.icons} ><Link  href={'https://www.facebook.com/IvanaDimo'}><a target="_blank"> <FaFacebookSquare size="1.5em" /></a></Link></div> 
     
      </div>
    )
}

