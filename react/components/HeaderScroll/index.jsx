import React, {useEffect,useState} from 'react'
import styles from './sass/styles.css'

export const HeaderScroll = ({Header}) => {
    const [scrolledDown, setScrolledDown] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        window.scrollY ? setScrolledDown(true) : setScrolledDown(false);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    if(!scrolledDown){
        return (
            <div>           
                <Header/>
            </div>
        )
    }
    return (
        <div className={styles.headerScrolled}>           
                <Header/>
        </div>
    )
    
 }