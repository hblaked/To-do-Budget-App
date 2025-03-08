
export default function expense() {
  return (
    <div className='flex justify-between w-full rounded-lg border border-neutral-100 shadow-md'>
      <div className='flex items-center p-5 gap-2'>
        <svg className='fill-neutral-50 w-fit h-fit p-3 bg-amber-300 rounded-lg' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-160-60q25 0 42.5-17.5T700-480q0-25-17.5-42.5T640-540q-25 0-42.5 17.5T580-480q0 25 17.5 42.5T640-420Z"/></svg>

        <span className='flex flex-col justify-center'>
          <h1 className='font-bold'>Expense Name</h1>
          <p className=' font-light text-sm text-neutral-500'>Wallet</p>
        </span>
      </div>

      <div className='flex justify-center items-center p-5 gap-10'>
        <span className='font-bold text-2xl'>0$</span>

        <span className='flex gap-2'>
          <button><svg className='fill-neutral-50 w-fit h-fit p-2 bg-yellow-400 rounded-lg cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M120-120v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm584-528 56-56-56-56-56 56 56 56Z"/></svg></button>
          <button><svg className='fill-neutral-600 w-fit h-fit p-2 bg-neutral-300 rounded-lg cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z"/></svg></button>
        </span>
      </div>
    </div>
  )
}
