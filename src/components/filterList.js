import courses from '../courses.json'

export default function filterList(arr,method) {
    if(method==null)return courses;
    else{
        return courses.filter(course=>{
        const categoriesArray=course.categories.split(" ");
        if(arr.length>0){
            if(categoriesArray.some(r => arr.indexOf(r) >= 0)){
                return course;
            }
        }
        else{
            return courses;

        }

    })
}
    
}






