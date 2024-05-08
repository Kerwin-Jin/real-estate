import React,{useCallback, useState} from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export default function SignIn() {


  const [formData, setFormData] = useState({
    email:'',
    password:''
  })
  const [showPassword,setShowPassword] = useState(false)


  const {email, password} = formData

  const handleInputChange = useCallback((e:any)=>{
    setFormData(pre=>({
      ...pre,
      [e.target.id]:e.target.value
    }))
  },[])

  const handleLogin = useCallback(()=>{
    if(!email || !password){
      alert('请输入邮箱或者密码')
      return
    }

    console.log(email, password)
  },[email, password])
  return (
      <div className='flex px-48 space-x-6 items-center mt-24'>
        <div className='w-[60%]'>
          <img src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'alt='key' className='rounded w-full'/>
        </div>

        <div className='flex-1'>
          <div className='text-center font-semibold mb-6 text-2xl'>登录</div>
          <div className='mb-6'>
            <form className='flex flex-col gap-3 relative'>
              <input type="email" id='email' placeholder='请输入邮箱' className='border px-3 py-2 outline-none' value={email} onChange={handleInputChange}/>
              <input type={showPassword?"text":"password"} id='password' placeholder='请输入密码' className='border px-3 py-2 outline-none' value={password} onChange={handleInputChange}/>
              <span className='absolute right-2 bottom-3 cursor-pointer' onClick={()=>{
                setShowPassword(pre=>!pre)
              }}>
                {
                  showPassword?<AiFillEyeInvisible/>:<AiFillEye/>
                }
              </span>
            </form>
          </div>
          <button className='bg bg-blue-600 hover:bg-blue-700 w-full py-4 text-white uppercase rounded' onClick={handleLogin}>Login In</button>
        <div
          className='flex before:border-t-2 before:flex-1 items-center after:border-t-2 after:flex-1 gap-2 my-4'
        >
          OR
        </div>
        <button className='bg bg-red-600 hover:bg-red-700 w-full py-4 text-white uppercase shadow-md rounded'>register</button>

        </div>

      </div>

  )
}
