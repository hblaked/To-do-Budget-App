'use client';
import { useAppContext } from '../appcontext'

export default function addwindow() {
    const {
        openAddWindowObject: { openAddWindow, setOpenAddWindow },
    } = useAppContext();

    return (
        <div
            className={`${
                openAddWindow ? 'scale-100' : 'scale-0'
            }
            transition-all duration-75 w-[48%] max-sm:w-[82%] z-100 p-10 flex flex-col left-1/2 top-[47%] -translate-y-1/2 -translate-x-1/2 absolute gap-3 bg-neutral-50 border-neutral-100 rounded-md shadow-md`}
        >
            <Header />
            
            <CategoryInput />

            <div className='flex justify-between gap-3'>
                <AmmountInput />

                <WalletSelection />
            </div>

            <Actions />
        </div>
    );
}

function Header() {
    return (
        <div className='flex justify-around'>
            <span className='flex items-center p-2 gap-3 border border-neutral-200 rounded-lg cursor-pointer hover:shadow-md transition-all duration-150'>
                <svg className='fill-neutral-50 w-fit h-fit p-3 bg-yellow-400 rounded-lg' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z"/></svg>
                <h1 className='font-bold text-2xl'>Expense</h1>
            </span>

            <span className='flex items-center p-2 gap-3 border border-neutral-200 rounded-lg cursor-pointer hover:shadow-md transition-all duration-150'>
                <svg className='fill-neutral-50 w-fit h-fit p-3 bg-yellow-400 rounded-lg' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M640-520q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-320-80h200v-80H320v80ZM180-120q-34-114-67-227.5T80-580q0-92 64-156t156-64h200q29-38 70.5-59t89.5-21q25 0 42.5 17.5T720-820q0 5-5 23-4 11-7.5 22.5T702-751l91 91h87v279l-113 37-67 224H480v-80h-80v80H180Z"/></svg>
                <h1 className='font-bold text-2xl'>Saving</h1>
            </span>
        </div>
    );
}

function CategoryInput() {
    return (
        <div className='flex flex-col w-full gap-2'>
            <span className='font-bold text-lg text-neutral-500'>Name</span>

            <div className='flex gap-3'>
                <input 
                    className='w-full p-3 border border-neutral-200 rounded-md hover:shadow-md transition-all duration-150'
                    placeholder='Enter Name...'
                />
                <button className='cursor-pointer'>
                    <svg className='fill-neutral-50 w-fit h-fit p-3 bg-amber-300 rounded-lg hover:shadow-md transition-all duration-150' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z"/></svg>                
                </button>
            </div>

            <span className='font-light text-sm text-red-400'>There was an error.</span>
        </div>
    );
}

function AmmountInput() {
    return (
        <div className='flex flex-col w-full gap-2'>
            <span className='font-bold text-lg text-neutral-500'>Amount</span>

            <div>
                <input 
                    className='w-full p-3 border border-neutral-200 rounded-md hover:shadow-md transition-all duration-150'
                    placeholder='Enter Amount...'
                />
                <button></button>
            </div>

            <span className='font-light text-sm text-red-400'>There was an error.</span>
        </div>
    );
}

function WalletSelection() {
    return (
        <div className='flex flex-col w-full gap-2'>
            <span className='font-bold text-lg text-neutral-500'>Wallet</span>

            <div>
                <input 
                    className='w-full p-3 border border-neutral-200 rounded-md hover:shadow-md transition-all duration-150'
                    placeholder='Select Wallet'
                />
                <button></button>
            </div>
        </div>
    );
}

function Actions() {
    const {
        openAddWindowObject: { openAddWindow, setOpenAddWindow },
    } = useAppContext();

    return (
        <div className='flex justify-end gap-3'>
            <button 
                onClick={() => setOpenAddWindow(false)}
                className='p-3 border border-neutral-200 rounded-lg text-neutral-500 cursor-pointer hover:shadow-md transition-all duration-150'>
                Cancel
            </button>
            <button className='p-3 bg-yellow-400 rounded-lg text-neutral-50 cursor-pointer hover:shadow-md transition-all duration-150'>Add</button>
        </div>
    );
}