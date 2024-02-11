import { Navbar } from '../components/navbar'
import classes from '../modules/About.module.scss'
import person from '../assets/Img/flower.jpg'
import { Link } from 'react-router-dom'

export const About = () => {

    return(
        <>
        <Navbar/>
        <div className={classes['container']}>
            <img src={person} alt="" />
       
            <div className={classes['about-us']}>
                <h1>About us</h1>
                <h2>Front-end Developer & Designer</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum a sint beatae, <br />
                    aut vel reprehenderit non quam illo deserunt numquam, inventore porro adipisci<br />
                     incidunt quisquam assumenda iste mollitia sed natus?</p>
                <Link to ="/person">
                   <button>Hire Me</button>
                </Link>
            </div> 
          </div>
        </>
    )
}