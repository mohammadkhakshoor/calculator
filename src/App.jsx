import Header from "./sections/header";
import InputNumber from "./sections/InputNumber";
import AllButtons from "./sections/AllButtons";
import { useState } from "react";

const App = () => {
    const [calc, setCalc] = useState("");
    return (
        <main className="-bg-main-blue min-h  ">
            <div className="max-container flex flex-col justify-between sm:justify-normal min-h sm:grid sm:place-items-center  ">
                <Header />
                <section className="  contain-margin my-[max(2.5rem,0%)]   sm:mx-auto sm:w-[35rem] ">
                    <InputNumber calc={calc} setCalc={setCalc} />
                    <AllButtons calc={calc} setCalc={setCalc} />
                </section>
            </div>
        </main>
    );
};

export default App;
