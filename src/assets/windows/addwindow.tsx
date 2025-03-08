'use client';
import { useAppContext } from '../appcontext'

export default function addwindow() {
    const {
        openAddWindowObject: { openAddWindow, setOpenAddWindow },
    } = useAppContext();

    return (
        <div
            className={`${
                openAddWindow ? 'block' : 'hidden'
            }
            w-[48%] max-sm:w-[82%] z-100 p-3 flex flex-col left-1/2 top-[47%] -translate-y-1/2 -translate-x-1/2 absolute gap-3 bg-neutral-50 border-neutral-100 rounded-md shadow-md`}
        >


            
        </div>
    );
}