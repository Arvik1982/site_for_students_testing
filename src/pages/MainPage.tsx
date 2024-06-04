import ContentBox from '../components/ContentBox/ContentBox'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from './mainPage.module.css'


export default function MainPage(){
    return(
        <div className={styles.main__container}>
        <Header/>
        <ContentBox/>
        <Footer/>                   
        </div>
    )
}