import { useState } from "react";

const messages = [
   "Learn React ⚛️",
   "Apply for jobs 💼",
   "Invest your new income 🤑",
];
export default function App() {
   const [step, setStep] = useState(1);
   const [isOpen, setIsOpen] = useState(true);
   const handleButton = (step, setStep) => {
      if (step === 3) setStep((step) => 1);
      else setStep((step) => step + 1);
   };

   const handleClose = () => {
      setIsOpen((is) => !is);
   };

   // const handlePrevious = () => {
   //    if (step <= 1) return;
   //    setStep((step) => step - 1);
   // };
   // const handleNext = () => {
   //    if (step >= 3) return;
   //    setStep((step) => step + 1);
   // };
   return (
      <>
         <button className="close" onClick={handleClose}>
            &times;
         </button>

         {isOpen && (
            <div className="steps">
               <div className="numbers">
                  <div className={step >= 1 ? "active" : ""}>1</div>
                  <div className={step >= 2 ? "active" : ""}>2</div>
                  <div className={step >= 3 ? "active" : ""}>3</div>
               </div>

               <p className="message">
                  Step {step}: {messages[step - 1]}
               </p>
               <div className="button">
                  <button
                     style={{ backgroundColor: "#7950f2", color: "white" }}
                     onClick={() => handleButton(step, setStep)}>
                     {step === 3 ? "Start Again" : "Next"}
                  </button>
               </div>
            </div>
         )}
      </>
   );
}
