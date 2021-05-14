
import React, {useState} from 'react';

import CardList from './CardList';

const Courses = ({courses, sortCourses, addToCart}) =>  {

    const [value, setValue] = useState('Select');

    const setList = (e) => {
        setValue(e.target.value);
        sortCourses(e.target.value);
    }
    
    return (
        <div className="courses">

            <div className="courses-nav">
                <h3>courses</h3>
                <div className="sort-list">
                    Sort by&nbsp;: &nbsp;
                    <select value={value} onChange={setList}>
                        <option value="Select">Select</option>
                        <option value="Highest to Lowest">Highest to Lowest</option>
                        <option value="Lowest to Highest">Lowest to Highest</option>
                        <option value="Latest">Latest</option>
                        <option value="Oldest">Oldest</option>
                    
                    </select>
                </div>
             
            </div>

            <CardList courses={courses} addToCart={addToCart} />
            
        </div>
    )
}

export default Courses;
