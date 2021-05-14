import React, {useState, useEffect} from 'react';

import './App.css';
import Categories from './components/Categories';
import Languages from './components/Languages';
import Courses from './components/Courses';
import Cart from './components/Cart';
import filterList from './components/filterList'
import filterListLanguage from './components/filterListLanguage'

const App = () => {

  const [courses, setCourses] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLanguages, setSelectedLanguage] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCourses(filterList([], null));
    setCourses(filterListLanguage([], null));
    if(JSON.parse(localStorage.getItem("cart"))) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, [])

  const setCategory= (category) => {
    const selectCategories = [...selectedCategories];
    
    if(selectCategories.includes(category)) {
      const index = selectCategories.indexOf(category);
      selectCategories.splice(index, 1);
    }
    else {
      selectCategories.push(category);
    }
    setSelectedCategories(selectCategories);
    setCourses(filterList(selectCategories, 'category'));
  }
   const setLanguage = (language) => {
    const languages = [...selectedLanguages];
    
    if(languages.includes(language)) {
      const index = languages.indexOf(language);
      languages.splice(index, 1);
    }
    else {
      languages.push(language);
    }
    setSelectedLanguage(languages);
    setCourses(filterListLanguage(languages, 'language'));
  }

  const sortCourses = (method) => {
    const array = courses;

    if(method === "Lowest to Highest") {
        array.sort(function(a, b){
          return a.price-b.price
      })
    }
    else if(method === "Highest to Lowest") {
        array.sort(function(a, b){
          return b.price-a.price
      })
    } 
    else if(method === "Latest") {
        array.sort(function(a, b){
          return a.id > b.id ? 1 : -1
      })
    }
     else if(method === "Oldest") {
        array.sort(function(a, b){
          return a.id > b.id ? -1 : 1
      })
    }
    setCourses(array);
  }

  const addToCart = (item) => {
    const CourseList = [...cart];
    if(!CourseList.includes(item)) {
      CourseList.push(item);
    }
    const index = CourseList.indexOf(item);
    CourseList[index].quantity++;
    setCart(CourseList);
    localStorage.setItem("cart", JSON.stringify(CourseList));
  }

  const changeQuantity = (item, e) => {
    const CourseList = [...cart];
    const index = CourseList.indexOf(item);
    if(e === '+') {
      CourseList[index].quantity++;
    }
    else {
      if(CourseList[index].quantity > 1) {
        CourseList[index].quantity--;
      }
      else {
        CourseList.splice(index, 1);
      }
    } 
    setCart(CourseList);
    localStorage.setItem("cart", JSON.stringify(CourseList));
  }
  
  return (
    <div className="App">
      <Categories selectedCategories={selectedCategories} setCategory={setCategory} />
      <Courses courses={courses} sortCourses={sortCourses} addToCart={addToCart} />
      <Languages selectedLanguages={selectedLanguages} setLanguage={setLanguage} />
      <Cart courses={cart} changeQuantity={changeQuantity} />
    </div>
  );
}

export default App;
