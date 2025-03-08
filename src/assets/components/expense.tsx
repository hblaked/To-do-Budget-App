
export default function expense() {
  return (
    <div className='flex justify-between w-full rounded-lg border border-neutral-100 shadow-md'>
      <div className='flex items-center p-5 gap-2'>
        <svg className='fill-neutral-50 w-fit h-fit p-3 bg-amber-300 rounded-lg' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760H520q-71 0-115.5 44.5T360-600v240q0 71 44.5 115.5T520-200h320q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm120-140q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Z"/></svg>

        <span className='flex flex-col justify-center'>
          <h1 className='font-bold'>Expense Name</h1>
          <p className=' font-light text-sm text-neutral-500'>Wallet</p>
        </span>
      </div>

      <div className='flex justify-center items-center p-5 gap-10'>
        <span className='font-bold text-2xl'>0$</span>

        <span className='flex gap-2'>
          <button className='rounded-lg hover:shadow-md transition-all duration-150'><svg className='fill-neutral-50 w-fit h-fit p-2 bg-yellow-400 rounded-lg cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M120-120v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm584-528 56-56-56-56-56 56 56 56Z"/></svg></button>
          <button className='rounded-lg hover:shadow-md transition-all duration-150'><svg className='fill-neutral-600 w-fit h-fit p-2 bg-neutral-300 rounded-lg cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z"/></svg></button>
        </span>
      </div>
    </div>
  )
}
