import React from 'react'
import { useForm } from "react-hook-form"
import "./SignUp.css"

const SignUp = () => {

  const { register, handleSubmit, formState: { errors }, } = useForm()


  const sendFormData = (data) => console.log(data);


  return (
    <form onSubmit={handleSubmit(sendFormData)}>
      <div>
        <input type="text" placeholder='UserName' {...register("username",
          { required: { value: true, message: "Username Required" }, pattern: { value: /^[A-Za-z\s]*$/, message: "Username must contain alphabets only" } }

        )} />
      </div>

      <div className='userErr' style={{ color: "red", fontFamily: "serif", fontWeight: "bold" }}>{errors.username?.message}</div>

      <div>
        <input type="password" placeholder='Password' {...register("password", { required: { value: true, message: "Password in mandatory" }, pattern:{value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,12}$/, message: "Enter Minimum 8 and maximum 12 characters, at least one uppercase letter, one lowercase letter, one number and one special character as password" } })} />
      </div>

      <div className='passErr' style={{ color: "red", fontFamily: "serif", fontWeight: "bold" }}>{errors.password?.message}</div>


      <div>

        <button type='submit'>Login</button>
      </div>
    </form>
  )
}

export default SignUp