import React, { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import AxiosToastError from '../utils/AxiosToastError'
import { updatedNid } from '../store/userSlice'
import { IoClose } from "react-icons/io5";

const UserProfileNidEdit = ({close}) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    const handleUploadNidImage = async(e)=>{
        const file = e.target.files[0]

        if(!file){
            return
        }

        const formData = new FormData()
        formData.append('nid',file)

        try {
            setLoading(true)
            const response = await Axios({
                ...SummaryApi.uploadNid,
                data : formData
            })
            const { data : responseData}  = response

            dispatch(updatedNid(responseData.data.nid))

        } catch (error) {
            AxiosToastError(error)
        } finally{
            setLoading(false)
        }

    }
  return (
    <section className='fixed top-0 bottom-0 left-0 right-0 bg-neutral-900 bg-opacity-60 p-4 flex items-center justify-center'>
        <div className='bg-white max-w-sm w-full rounded p-4 flex flex-col items-center justify-center'>
            <button onClick={close} className='text-neutral-800 w-fit block ml-auto'>
                <IoClose size={20}/>
            </button>
            <div className='w-20 h-20 bg-red-500 flex items-center justify-center rounded-full overflow-hidden drop-shadow-sm'>
                {
                    user.nid ? (
                        <img 
                        alt={user.name}
                        src={user.nid}
                        className='w-full h-full'
                        />
                    ) : (
                        <FaRegUserCircle size={65}/>
                    )
                }
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='uploadProfile'>
                    <div className='border border-primary-200 cursor-pointer hover:bg-primary-200 px-4 py-1 rounded text-sm my-3'>
                        {
                            loading ? "Loading..." : "Upload"
                        }
                    </div>
                    <input onChange={handleUploadNidImage} type='file' id='uploadProfile' className='hidden'/>
                </label>
            </form>
            
        </div>
    </section>
  )
}

export default UserProfileNidEdit
