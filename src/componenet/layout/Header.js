
import classes from './Header.module.css'
import Cartbutton from './Cartbutton.js'


function Header(props) {
  
  return (
    <>
      <header className={classes.header}>
        <h1>Reactmeals</h1>
        <Cartbutton onClick={props.onShowCart}/>
         </header>
         

      <div className={classes['main-image']}>
        <img src="https://wallpaperaccess.com/full/271679.jpg" />
      </div>
      
    </>
  )
}
export default Header
