import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'



function addCourseTitle(title){
  return {type: 'ADD_COURSE', title}
}

export default function CourseList() {
  const [course, setCourse] = useState('')
  const courses = useSelector(state => state.data)
  const dispatch = useDispatch()
  
  function addCourse(e){
    e.preventDefault();
    if(course !==''){
      dispatch(addCourseTitle(course))
    }
  }
  
  
  return (
    <>
    <ul>
        {courses.map(course => <li key={course}> {course}</li>)}
    </ul>
    <form onSubmit={addCourse}>
      <input type='text' value={course} onChange={e => setCourse(e.target.value)}>
      </input>
      <button type='submit'>
        Adicionar Curso
      </button>
    </form>
    </>
  );
}
