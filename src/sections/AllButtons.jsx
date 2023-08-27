const AllButtons = ({ calc, setCalc }) => {
    function handlePassNumber(e) {
        if (e.target.innerHTML === "DEL") {
            const deleteLastValue = calc?.split?.("");
            deleteLastValue?.pop();
            return setCalc?.(deleteLastValue?.join?.(""));
        }
        if (e.target.innerHTML === "Reset") {
            return setCalc("");
        }
        if (e.target.innerHTML === "=") {
            const num = eval(calc);
            return setCalc(() => num);
        }

        if (e.target.tagName === "BUTTON") {
            setCalc((prevValue) => prevValue + e.target.innerHTML);
        }
    }
    return (
        <div
            onClick={handlePassNumber}
            className="-bg-dark-blue rounded-xl font-Poppins grid grid-cols-4 grid-rows-5 justify-items-stretch gap-3 p-7"
        >
            <button className="-bg-milky flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold hover:-bg-redish-orange transition-all ">
                7
            </button>
            <button className="-bg-milky flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:-bg-redish-orange transition-all ">
                8
            </button>
            <button className="-bg-milky flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:-bg-redish-orange transition-all ">
                9
            </button>
            <button className="-bg-milky flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:bg-red-600 transition-all ">
                DEL
            </button>
            <button className="-bg-milky flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:-bg-redish-orange transition-all ">
                4
            </button>
            <button className="-bg-milky flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:-bg-redish-orange transition-all ">
                5
            </button>
            <button className="-bg-milky flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:-bg-redish-orange transition-all ">
                6
            </button>
            <button className="-bg-milky flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:bg-yellow-500 transition-all ">
                +
            </button>
            <button className="-bg-milky flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:-bg-redish-orange transition-all ">
                1
            </button>
            <button className="-bg-milky flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:-bg-redish-orange transition-all ">
                2
            </button>
            <button className="-bg-milky flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:-bg-redish-orange transition-all ">
                3
            </button>
            <button className="-bg-milky flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:bg-yellow-500 transition-all ">
                -
            </button>
            <button className="-bg-milky flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:-bg-redish-orange transition-all ">
                .
            </button>
            <button className="-bg-milky flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:-bg-redish-orange transition-all ">
                0
            </button>
            <button className="-bg-milky flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:bg-yellow-500 transition-all ">
                /
            </button>
            <button className="-bg-milky flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:bg-yellow-500 transition-all ">
                *
            </button>
            <button className="-bg-milky col-span-2 flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:bg-gray-400 transition-all ">
                Reset
            </button>
            <button className="-bg-milky col-span-2 flex  min-h-[4.5rem] items-center justify-center rounded-md text-3xl font-bold  hover:bg-green-500 transition-all ">
                =
            </button>
        </div>
    );
};

export default AllButtons;
