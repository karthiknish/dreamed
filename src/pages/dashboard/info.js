import { useState, useEffect } from "react";
import Head from "next/head";
import Stepone from "../form/Stepone";
import Steptwo from "../form/Steptwo";
import Stepthree from "../form/Stepthree";
import Stepfour from "../form/Stepfour";
import FormCard from "../form/FormCard";
import { useSession } from "next-auth/react";
function Info() {
  const d = useSession();
  const [formStep, setFormStep] = useState(0);
  const [countries, setCountries] = useState([]);
  const [dob, setDob] = useState("");
  const [pno, setPno] = useState("");
  const [course1, setCourse1] = useState([]);
  const [course2, setCourse2] = useState([]);
  const [message, setMessage] = useState("");
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <>
      <Head>
        <title>Your Info</title>
      </Head>
      <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
        {formStep === 0 && (
          <Stepone
            countries={countries}
            setCountries={setCountries}
            formStep={formStep}
            nextFormStep={nextFormStep}
          />
        )}
        {formStep === 1 && (
          <Steptwo
            pno={pno}
            setPno={setPno}
            formStep={formStep}
            nextFormStep={nextFormStep}
          />
        )}
        {formStep === 2 && (
          <Stepthree
            dob={dob}
            setDob={setDob}
            formStep={formStep}
            nextFormStep={nextFormStep}
          />
        )}{" "}
        {formStep === 3 && (
          <Stepfour
            course1={course1}
            course2={course2}
            setCourse1={setCourse1}
            setCourse2={setCourse2}
            formStep={formStep}
            nextFormStep={nextFormStep}
          />
        )}
      </FormCard>
    </>
  );
}

export default Info;
