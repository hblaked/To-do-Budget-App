
export default function saving() {
  return (
    <div className='flex justify-between w-full rounded-lg border border-neutral-100 shadow-md'>
      <div className='flex items-center p-5 gap-2'>
        <svg className='fill-neutral-50 w-fit h-fit p-3 bg-amber-300 rounded-lg' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M640-520q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-320-80h200v-80H320v80ZM180-120q-34-114-67-227.5T80-580q0-92 64-156t156-64h200q29-38 70.5-59t89.5-21q25 0 42.5 17.5T720-820q0 5-5 23-4 11-7.5 22.5T702-751l91 91h87v279l-113 37-67 224H480v-80h-80v80H180Z"/></svg>

        <span className='flex flex-col justify-center'>
          <h1 className='font-bold'>Savings Name</h1>
          <p className=' font-light text-sm text-neutral-500'>Savings</p>
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
