const Header = () => {
    return (
        <section className="contain-margin flex justify-between pt-5 sm:mx-auto sm:w-[35rem]">
            <h1 className="self-end text-5xl -text-redish-orange font-Monoton">calc</h1>

            <div className="grid grid-cols-2 sm:text-xl justify-center justify-items-center">
                <div></div>
                <div className="font-Poppins sm:text-xl -text-milky mb-1 flex justify-center gap-5 text-xs">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                <label className="font-Barlow sm:text-2xl -text-milky text-sm">Theme</label>
                <input
                    className="-bg-dark-blue w-[4.5rem] h-[1.3rem] sm:w-[6rem] sm:h-[2rem] "
                    type="range"
                    max="2"
                />
            </div>
        </section>
    );
};

export default Header;
