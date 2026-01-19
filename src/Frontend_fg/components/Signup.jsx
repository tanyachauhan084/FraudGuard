
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className=' h-screen bg-gray-200 flex justify-center items-center'>

        <div className='h-96 w-80 bg-white rounded-lg hover:shadow-lg hover:shadow-ocean-blue'>

<h1 className='pt-4 text-center text-3xl text-ocean-blue font-bold mb-3'>SAPIEN</h1>
<h1 className='pl-6 text-default text-xl font-semibold'>Sign up</h1>

<div className='flex pl-6 mb-3' >
    <p>Existing user?</p>
    <Link to="/signin">
    <p className='underline text-ocean-blue pl-2  hover:text-cyan-700'>Sign in</p>
    </Link>
</div>
{/* <label className='pl-6' htmlFor="email or userid">username</label> <br />
<input className='py-1 w-64 rounded-xl ml-6 border border-black focus:outline-none p-1 mb-3' type="text" /> */}

<label className='pl-6' htmlFor="password">email</label>
<input className='py-1 w-64 rounded-xl ml-6 border border-black focus:outline-none mb-3 p-1 'type="text" />

<label className='pl-6' htmlFor="password">password</label>
<input className='py-1 w-64 rounded-xl ml-6 border border-black focus:outline-none p-1'type="text" />



<button className='text-white bg-ocean-blue hover:bg-cyan-700 font-bold text-lg py-1 ml-16 px-16 rounded mt-10'>SIGN UP</button>
        </div>
       
    </div>
    
  )
}

export default Signup