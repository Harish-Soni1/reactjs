import React from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data = useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-5 text-3xl ml-40 mr-40'>{data.login}
            <div className='flex flex-wrap text-center max-w-4xl ml-60 '>
                <h2>{data.bio}</h2>
            </div>
            <div className='flex items-center justify-center p-5'>
                <div>
                    <img className='rounded-xl' src={data.avatar_url} alt="Git picture" width={300} />
                </div>
                <div className='text-left ml-4 mb-20'>
                    <h2>Public Repo: {data.public_repos}</h2>
                    <h2>Github Followers: {data.followers}</h2>
                </div>
            </div>

        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Harish-Soni1')
    return response.json()
}