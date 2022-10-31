import React from 'react'
import { useRouter } from 'next/router'
import CoursePage from '../../components/Course'
const Courses = () => {
    const router = useRouter()
  return (
    <CoursePage/>
  )
}

export default Courses