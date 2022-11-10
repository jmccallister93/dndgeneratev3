import Navbar from '../components/Navbar';
import style from '../stylesheets/Home.module.scss'

const Home = () => {
    return ( 
        <div className={style.homeWrapper}>
           <Navbar />
           <div className={style.homeHeader}>
            DnD Generate Logo
           </div>
           <div className="cards">
           
           </div>
        </div>
     );
}
 
export default Home;