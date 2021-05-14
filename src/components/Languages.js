import React, {useState} from 'react'
const Languages = ({selectedLanguages, setLanguage}) =>  {

    const languages = [  'Kotlin',
  'Mobile Software Development',
  'Game Development',
  'Business Analitytics and Intelligence',
  'Other Graphic Design and Illustration'];
   const [value, setValue] = useState('Select');

    const setList = (e) => {
        setValue(e.target.value);
        setLanguage(e.target.value)
       
    }
    
    
    return (
        <div className='categories2'>
            <h3>Languages</h3>
            <div className='category-list2'>
                {
                   //languages.map((language, index) => {
                       
                               <div className="courses-nav2">
                                <div className="sort-list2">
                                <select value={value} onChange={setList}>
                                    <option value="Select">Select</option>
                                    <option value="Kotlin">Kotlin</option>
                                    <option value="Java">Java</option>
                                    <option value="C#">C#</option>
                                    <option value="Python">Python</option>
                                    <option value="React Js">React Js</option>
                    
                                </select>
                                </div>
             
                        </div>
             
      
         
                            /*<button 
                                className={ 'language' + (selectedLanguages.includes(language) ? ' selected-language' : '')}
                                key={index}
                                onClick={() => setLanguage(language)}
                            >
                                {language}
                            </button>*/
                        
                    //})
                }
            </div>
          
        </div>
    )
}

export default Languages;
