import Header from "../assets/components/header";
import SubHeader from '../assets/components/subheader';
import AllExpenses from "../assets/components/allexpenses";

import AddWindow from '../assets/windows/addwindow';
import IconWindow from '../assets/windows/iconwindow';
import { useAppContext } from "../assets/appcontext";

export default function home() {
  const {
    openAddWindowObject: { openAddWindow },
    openIconWindowObject: { openIconWindow },
  } = useAppContext();

  return (
    <div className='flex justify-center items-center'>
      <AddWindow />
      {openAddWindow && (
        <div className='w-full h-screen z-50 bg-neutral-700 fixed top-0 opacity-25' />
      )}

      <IconWindow />
      {openIconWindow && (
        <div className='w-full h-screen z-50 bg-neutral-700 fixed top-0 opacity-25' />
      )}

      <div className='flex flex-col items-center w-[80em] gap-10 m-5 p-10 rounded-2xl'>
        <Header />

        <SubHeader />

        <AllExpenses />
      </div>
    </div>
  )
}
