import Header from "./sections/header";
import InputNumber from "./sections/InputNumber";
import AllButtons from "./sections/AllButtons";
import { useState } from "react";

const App = () => {
    const [calc, setCalc] = useState("");
    return (
        <main className="-bg-main-blue min-h-screen">
            <div className="max-container flex flex-col justify-between sm:justify-normal min-h-screen sm:grid sm:place-items-center  ">
                <Header />
                <section className="  contain-margin my-10  sm:mx-auto sm:w-[35rem] ">
                    <InputNumber calc={calc} setCalc={setCalc} />
                    <AllButtons calc={calc} setCalc={setCalc} />
                </section>
            </div>
        </main>
    );
};

export default App;
