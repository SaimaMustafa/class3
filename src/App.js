
import './App.css';
import Dinner from './Dinner.js';

function App() {
  return (
    <div className="App">
    {/*<  Dinner></Dinner> */}
    < hr/>
      <Dinner dishName= "Kofta Pulao"   sweetDishName= "Ghulab Jamun" />
      < hr/>
      <Dinner dishName= "Biryani"   sweetDishName= "Kheer" />
      < hr/>
      <Dinner dishName= " Haleem"   sweetDishName= "Barfii" />
    < hr/>
    
    Author: SaimaMustafa
    
      </div>

  );
}

export default App;
