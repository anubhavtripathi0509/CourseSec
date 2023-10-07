import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Card(props) {
  let course=props.course
  let likedCourses=props.likedCourses
  let setLikedCourses=props.setLikedCourses
  function clickHandler(){
    if(likedCourses.includes(course.id)){
      setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)))
      toast.warning("like removed")
      
    }
    else{
      if(likedCourses.lenght===0){
        setLikedCourses([course.id])
        console.log(likedCourses)

      }
      else{
        setLikedCourses((prev)=>[...prev,course.id])
        

      }
      toast.success("liked successfully")
    }

  }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-mdmd-overflow-hidden'>
      <div className='relative'>
              <img src={course.image.url} alt='noting'/>

      
              <div className='w-[20px] h-[20px] bg-white rounded-full absolute right-1 bottom-3
      grid place-items-center'
      >
              <button onClick={clickHandler}>
                
                {
                  likedCourses.includes(course.id) ? <FcLike fontSize='1.2rem '/> :<FcLikePlaceholder fontSize='1.2rem ' />

                } 
              </button>
              </div>
      </div>
      

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>{
          course.description.length>100 ? (course.description.substr(0,100)+"....."): (course.description)

        }
        
        </p>
      </div>

    </div>
  )
}
