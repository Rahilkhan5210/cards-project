import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";



const Card = (props) => {
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses; 


    function clickHandler() {
      //// => logic

      if (likedCourses.includes(course.id)) {
        /// pehle se like hua pda h
        setLikedCourses( (prev) => prev.filter((cid)=> (cid !==course.id )) );
        toast.warning("liked remove");
      }
      else {
        //// pehle se like ni h ye course
        /// insert krna h ye course liked coursea m

        if(likedCourses.length === 0) {
          setLikedCourses( [course.id] );
        }
      else {
             //// non empty pehle se h
             setLikedCourses( (prev) => [...prev, course.id]);
      }
      toast.success("liked successfully");
      }
    }

    return (
        <div className="w-[300px] bg-sky-950 bg-opacity-70 rounded-sm overflow-hidden">
       
       <div className="relative">
        <img src={course.image.url} alt =""/>

        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">

         <button onClick={clickHandler}>

                   {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
         </button>

       </div>

       </div>


       <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="mt-2 text-white">

         {
              course.description.length >100 ?
               (course.description.substr(0,100)) + "..." :
              (course.description)
         }

          </p>
       </div>

        </div>
    )
};

export default Card;