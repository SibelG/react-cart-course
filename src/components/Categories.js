import React, {useState} from 'react'
import CardList from './CardList'

const Categories = ({selectedCategories, setCategory}) =>  {

    const categories = [  'Web Development',
  'Mobile Software Development',
  'Game Development',
  'Business Analitytics and Intelligence',
  'Other Graphic Design and Illustration'];

     const [value, setValue] = useState('Select');

    const setList = (e) => {
        setValue(e.target.value);
        setCategory(e.target.value);
        
    }
    
    return (
        <div className='categories'>
            <h3>Categories</h3>
            <div className='category-list'>
                {
                   //categories.map((category, index) => {
                     
                            <div className="courses-nav2">
                                <div className="sort-list2">
                              
                                <select className="category" value={value} onChange={setList}>
                                    <option value="Select">Select</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Game Development">Game Development</option>
                                    <option value="Other Graphics Design and Illustration">Other Graphics Design and Illustration</option>
                                    <option value="Business Analitytics and Intelligence">Business Analitytics and Intelligence</option>
                                   
                    
                                </select>
                                </div>
             
                        </div>
                      
                            /*<button 
                                className={ 'category' + (selectedCategories.includes(category) ? ' selected-category' : '')}
                                key={index}
                                onClick={() => setCategory(category)}
                            >
                                {category}
                            </button>*/
                        
                   // })
                }
            </div>
            
        </div>
        
    )
     
}

export default Categories;
