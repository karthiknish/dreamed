import { useState, useEffect } from "react";
import Head from "next/head";
import Stepone from "../form/Stepone";
import Steptwo from "../form/Steptwo";
import Stepthree from "../form/Stepthree";
import Stepfour from "../form/Stepfour";
import Stepfive from "../form/Stepfive";
import Stepsix from "../form/Stepsix";
import Stepseven from "../form/Stepseven";
import Stepeight from "../form/Stepeight";
import FormCard from "../form/FormCard";
import { useSession } from "next-auth/react";
function Info() {
  const d = useSession();
  const [formStep, setFormStep] = useState(0);
  const [countries, setCountries] = useState([]);
  const [dob, setDob] = useState([]);
  const [pno, setPno] = useState("");
  const [course1, setCourse1] = useState([]);
  const [course2, setCourse2] = useState([]);
  const [message, setMessage] = useState("");
  const [degreetype, setDegreetype] = useState("");
  const [backlog, setBacklog] = useState("");
  const [qualify, setQualify] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [ielts, setIelts] = useState("");
  const [ieltsbool, setIeltsbool] = useState(false);
  const [gre, setGre] = useState("");
  const [grebool, setGrebool] = useState(false);
  const [visa, setVisa] = useState("");
  const [visabool, setVisabool] = useState(false);
  const [english, setEnglish] = useState("");
  const [time, setTime] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pno <= 10) {
      setMessage("enter valid number");
    } else {
      const phone = countryCode + pno;
      const data = {
        name,
        email,
        phone,
        degreetype,
        countries,
        qualify,
        dob,
        cgpa,
        gre,
        grebool,
        ielts,
        ieltsbool,
        visa,
        visabool,
        course1,
        course2,
        english,
        backlog,
        time,
      };

      let res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((e) => console.table(e));
    }
  };

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
        )}
        {formStep === 3 && (
          <Stepfour
            course1={course1}
            course2={course2}
            setCourse1={setCourse1}
            setCourse2={setCourse2}
            formStep={formStep}
            nextFormStep={nextFormStep}
          />
        )}{" "}
        {formStep === 4 && (
          <Stepfive
            qualify={qualify}
            degreetype={degreetype}
            setDegreetype={setDegreetype}
            cgpa={cgpa}
            setCgpa={setCgpa}
            setQualify={setQualify}
            backlog={backlog}
            setBacklog={setBacklog}
            formStep={formStep}
            nextFormStep={nextFormStep}
          />
        )}
        {formStep === 5 && (
          <Stepsix
            ielts={ielts}
            setIelts={setIelts}
            ieltsbool={ieltsbool}
            setIeltsbool={setIeltsbool}
            gre={gre}
            setGre={setGre}
            grebool={grebool}
            setGrebool={setGrebool}
            visa={visa}
            setVisa={setVisa}
            visabool={visabool}
            setVisabool={setVisabool}
            english={english}
            setEnglish={setEnglish}
            formStep={formStep}
            nextFormStep={nextFormStep}
          />
        )}
        {formStep === 6 && (
          <Stepseven
            time={time}
            setTime={setTime}
            formStep={formStep}
            nextFormStep={nextFormStep}
            handleSubmit={handleSubmit}
          />
        )}
        {formStep === 7 && <Stepeight />}
        {message}
      </FormCard>
    </>
  );
}

export default Info;
