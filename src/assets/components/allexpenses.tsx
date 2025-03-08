import Expense from "./expense";
import Saving from "./saving";

export default function allexpenses() {
  return (
    <div className='flex flex-col w-full gap-5'>
        <ExpenseHeader />

        <ExpenseList />

        <SavingHeader />

        <SavingList />
    </div>
  );
}

function ExpenseHeader() {
    const currentDate = new Date();
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decemeber']
    const transactions = 0;
    const total = 0.00;

    return (
        <div className='flex flex-col gap-3'>
            <div>
                <button className='flex gap-1 items-center font-bold text-2xl cursor-pointer'>{months[currentDate.getMonth()]} <svg className='fill-neutral-300' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-360 280-560h400L480-360Z"/></svg></button>
            </div>

            <div className='flex justify-between items-center'>
                <span className='font-bold text-2xl text-neutral-500'>Expenses</span>

                <div className='flex gap-7 font-semibold text-neutral-500'>
                    <span>Number of transactions: {transactions}</span>
                    <span>Total: ${total}</span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

function ExpenseList() {
    return (
        <div className='flex flex-col items-center p-1 gap-2.5 overflow-y-auto'>
            <Expense />
        </div>
    );
}

function SavingHeader() {
    const fulltotal = 0.00;
    const monthtotal = 0.00;

    return (
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
                <span className='font-bold text-2xl text-neutral-500'>Savings</span>

                <div className='flex gap-7 font-semibold text-neutral-500'>
                    <span>Month Total: ${monthtotal}</span>
                    <span>Full Total: ${fulltotal}</span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

function SavingList() {
    return (
        <div className='flex flex-col items-center p-1 gap-2.5 overflow-y-auto'>
            <Saving />
        </div>
    );
}