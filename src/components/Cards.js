import React, { useState } from 'react'
import Card from './Card'

export default function Cards(props) {
  let courses=props.courses 
  const [likedCourses,setLikedCourses]=useState([])
  let category=props.category


  function getCourses(){
    if(category==="All"){
      let allCourses=[]
    Object.values(courses).forEach(array =>{
      array.forEach(courseData =>{
        allCourses.push(courseData)
      })
    })
    return allCourses

    }
    else{
      return courses[category]
    }
    
  }
  
  return (
    <div className='flex flex-wrap jistify-center gap-4 mb-4'>
      {
        getCourses().map((course)=>(
          <Card  key={course.id} course={course} likedCourses={likedCourses}setLikedCourses={setLikedCourses}/>

        ))
      }

    </div>
  )
}
