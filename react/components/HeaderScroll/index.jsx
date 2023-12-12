import React, {useEffect,useState} from 'react'
import styles from './sass/styles.css'

export const HeaderScroll = ({Header}) => {
    const [scrolledDown, setScrolledDown] = useState(true);
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
              {console.log("not scrolled")} 
                <Header/>
            </div>
        )
    }
    return (
        <div className={styles.headerScrolled}>           
                <Header/>
                {console.log("scrolled")}
        </div>
    )
    
 }