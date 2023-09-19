import React,{useState} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
      
        // Here, you can implement your submission logic, e.g., send data to server.
        console.log('Form submitted:', formData);
      };

  return (
    <div>
      <NavBar />
      <div  className="background  mt-6 items-center justify-center h-[300px] mx-auto pt-[200px] pl-20">
      <h1 className=' text-4xl font-bold  text-slate-200 lg:mt-[-70px]'>Contact us </h1>
    </div>
      <div className='mt-[100px]'>
    <form onSubmit={handleSubmit}>
    <div className='flex'>
        <div className="mb-4 lg:ml-6 md:ml-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2  border rounded-md focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4 ml-2 lg:ml-8">
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
            Contact:
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
          />
        </div>
        </div>
        <div className="mb-4 ml-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className="mt-1 p-2 w-[80%] border rounded focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className='border-red-400'>
        <button
          type="submit"
          className=" text-red-400 ml-6 border-red-400 hover:text-white py-2 px-4 rounded-full hover:bg-red-600"
        >
          Send message
        </button>
        </div>
      </form>
</div>
      <Footer/>    
      
    </div>
  )
}

export default Contact
