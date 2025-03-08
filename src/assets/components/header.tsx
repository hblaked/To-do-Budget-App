import React from 'react'
import { useAppContext } from '../appcontext'

export default function header() {
  return (
    <div className='flex justify-between w-full'>
        <Logo />
        <Search />
        <AddExpense />
    </div>
  )
}

function Logo() {
    return (
        <span className='flex items-center gap-2'>
            <svg className='w-fit h-fit p-2 fill-neutral-50 bg-yellow-400 rounded-lg' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-160-60q25 0 42.5-17.5T700-480q0-25-17.5-42.5T640-540q-25 0-42.5 17.5T580-480q0 25 17.5 42.5T640-420Z"/></svg>
            <h1 className='font-bold text-yellow-400 text-3xl'>Billfold</h1>
        </span>
    )
}

function Search() {
    return (
        <input
            className='w-[25em] p-3 bg-neutral-100 rounded-lg focus:outline-none hover:shadow-md transition-all duration-150'
            placeholder='Search an expense'
        />
    )
}

function AddExpense() {
    const {
        openAddWindowObject: { setOpenAddWindow },
    } = useAppContext();

    return (
        <button 
            onClick={() => setOpenAddWindow(true)}
            className='p-2 w-fit h-fit bg-yellow-400 rounded-lg cursor-pointer hover:shadow-md transition-all duration-150'
        >
            <svg className='fill-neutral-50' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
        </button>
    )
}