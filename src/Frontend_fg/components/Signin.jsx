
import { Link } from 'react-router-dom'
const Signin = () => {
  return (
    <div className=' h-screen bg-gray-200 flex justify-center items-center'>

        <div className='h-96 w-80 bg-white rounded-lg hover:shadow-lg hover:shadow-ocean-blue'>

<h1 className='pt-4 text-center text-3xl text-ocean-blue font-bold mb-6'>SAPIEN</h1>
<h1 className='pl-6 text-default text-xl font-semibold'>Sign in</h1>

<div className='flex pl-6 mb-3' >
    <p>New user?</p>
    <Link to="/signup">
    <p className='underline text-ocean-blue pl-2  hover:text-cyan-700'>Create new account</p>
    </Link>
</div>
<label className='pl-6' htmlFor="email or userid">username or email</label> <br />
<input className='py-1 w-64 rounded-xl ml-6 border border-black focus:outline-none p-1 mb-3' type="text" />

<label className='pl-6' htmlFor="password">password</label>
<input className='py-1 w-64 rounded-xl ml-6 border border-black focus:outline-none p-1'type="text" />

 <div className='flex justify-end'>
            <p className='mr-10 underline text-ocean-blue hover:text-cyan-700'>Forgot password</p>
        </div>

<button className='text-white bg-ocean-blue hover:bg-cyan-700 font-bold text-lg py-1 ml-16 px-16 rounded mt-4'>SIGN IN</button>
        </div>
       
    </div>
  )
}

export default Signin