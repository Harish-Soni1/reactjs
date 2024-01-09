import React from 'react'
import { Link } from 'react-router-dom'
import appWriteService from "../appWrite/appWriteService"


function PostCard({$id, title, featuredImage}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={appWriteService.getfilePreview(featuredImage)} alt={title}
                    className='rounded-xl' />
                </div>
                <h1 className='text-xl font-bold'>{title}</h1>
            </div>
        </Link>
    )
}

export default PostCard