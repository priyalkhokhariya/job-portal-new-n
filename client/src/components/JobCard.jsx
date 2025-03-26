import React from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'

const JobCard = ({ job }) => {

    const navigate = useNavigate()
  return (
    <div className='bg-white p-4 rounded-lg shadow'>
        <div className='w-12 h-12 mb-4'>
            <img src={job.companyId.image} alt="" className='w-full h-full object-contain'/>
        </div>
        <h4 className='text-xl font-medium mb-2'>{job.title}</h4>
        <div className='flex gap-4 text-gray-600 text-sm mb-4'>
            <span className='flex items-center gap-1'>
                <img src={assets.location_icon} alt="" className='w-4 h-4'/>
                {job.location}
            </span>
            <span className='flex items-center gap-1'>
                <img src={assets.suitcase_icon} alt="" className='w-4 h-4'/>
                {job.level}
            </span>
        </div>
        <p className='text-gray-600 text-sm mb-4' dangerouslySetInnerHTML={{__html:job.description.slice(0,150) + "..."}}></p>
        <div className='flex gap-3'>
            <button onClick={()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className='bg-blue-600 text-white px-6 py-2 rounded'>Apply Now</button>
            <button onClick={()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className='border border-blue-600 text-blue-600 px-6 py-2 rounded'>Learn more</button>
        </div>
    </div>
  )
}

export default JobCard