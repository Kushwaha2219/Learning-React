import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting},
  } = useForm()
  async function  onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve,4000))
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> FirstName-</label>
        
        <input {...register("firstName", { required: true })}/>
        {errors.firstName && <p>This is required</p>}
        <br />
        <br />
        <label>LastName-</label>
        <input {...register("lastName", 
        {
          required:true,
          minLength:{value:3, message:'Atleast Three Character'}
        })}/>
        {errors.lastName && <p>{errors.lastName.message}</p>}
        <br />
        <input type="submit" disabled= {isSubmitting} value={isSubmitting ? "isSubmitting" : 'submit'}/>
      </form>
    </>
  )
}

export default App
