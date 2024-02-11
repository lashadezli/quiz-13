import { Navbar } from "../components/navbar"
import classes from "../modules/person.module.scss"

export const Person = () =>
{
    return(
        <>
          <Navbar/>
          <div className={classes['Person']}>
              <h1>John Doe</h1>
              <h2>WED DESIGNER</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum esse ea magnam <br />
                 architecto iure magni, perspiciatis </p>
          </div>
        </>
    )
}