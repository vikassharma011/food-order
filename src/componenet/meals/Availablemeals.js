import classes from './Availablemeals.module.css';
import Card from '../UI/Card';
import Mealitem from './Mealitems/MealItem';
const DUMMY_MEALS = [
    {
        id:'m1',
        name: 'sushi',
        description: 'finest fist and veggies',
        price: 22.99,
    },{
        id:'m2',
        name: 'schnitzel',
        description: 'A german specialality!',
        price: 16.5,
    },{
        id:'m3',
        name: 'barbecuse burger',
        description: 'american,raw,meaty',
        price: 12.99,
    },
];
const Availablemeals=()=>{
    const mealslist = DUMMY_MEALS.map(meal=><Mealitem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
   return <section className={classes.meals}>
     <Card>
     <ul>
        {mealslist}
    </ul>
     </Card>
   </section>
};
export default Availablemeals;