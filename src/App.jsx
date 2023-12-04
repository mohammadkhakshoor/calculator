import Header from "./sections/header";
import InputNumber from "./sections/InputNumber";
import AllButtons from "./sections/AllButtons";
import { useState } from "react";

const App = () => {
  const [calc, setCalc] = useState("");
  const [theme, setTheme] = useState(0);
  console.log(theme);
  return (
    <main
      className={`bg-mainBackground min-h transition-all duration-700
      ${theme === 0 && "main-theme"}
       ${theme === 1 && "second-theme"}
        ${theme === 2 && "third-theme"}`}
    >
      <div className="max-container flex flex-col justify-between sm:justify-normal min-h sm:grid sm:place-items-center">
        <Header setTheme={setTheme} theme={theme} />
        <section className="  contain-margin my-[max(2.5rem,0%)]   sm:mx-auto sm:w-[35rem] ">
          <InputNumber calc={calc} setCalc={setCalc} />
          <AllButtons calc={calc} setCalc={setCalc} />
        </section>
      </div>
    </main>
  );
};

export default App;
