
export default function subheader() {
  return (
    <div className='flex justify-between w-full'>
        <WalletOptions />
        <ClearAll />
    </div>
  )
}

function WalletOptions() {
    return (
        <div className='flex items-center p-2 gap-2 border border-neutral-200 rounded-md cursor-pointer hover:shadow-md transition-all duration-150'>
            <svg className='fill-yellow-400' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"/></svg>           
            <span className='text-neutral-500'>Home Wallet</span>
            <svg className='fill-neutral-300' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-360 280-560h400L480-360Z"/></svg>
        </div>
    )
}

function ClearAll() {
    return (
        <button className='flex items-center p-2 border border-neutral-200 rounded-md cursor-pointer hover:shadow-md transition-all duration-150'>
            <span className="text-neutral-500">Clear All</span>
        </button>
    )
}