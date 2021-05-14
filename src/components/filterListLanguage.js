import courses from '../courses.json'

export default function filterListLanguage(arr,method) {
    if(method==null)return courses;
    else{
        return courses.filter(course=>{
        const languageArray=course.language.split(" ");
        if(arr.length>0){
            if(languageArray.some(r => arr.indexOf(r) >= 0)){
                return course;
            }
        }
        else{
            return courses;

        }

    })
}
    
}



