import { useState, useEffect } from "react";
import Head from "next/head";
import Stepzero from "../form/Stepzero";
import Stepone from "../form/Stepone";
import Steptwo from "../form/Steptwo";
import Stepthree from "../form/Stepthree";
import Stepfour from "../form/Stepfour";
import Stepfive from "../form/Stepfive";
import Stepsix from "../form/Stepsix";
import Stepseven from "../form/Stepseven";
import Stepeight from "../form/Stepeight";
import FormCard from "../form/FormCard";
function Info() {
  const [formStep, setFormStep] = useState(0);
  const [countries, setCountries] = useState([]);
  const [dob, setDob] = useState("");
  const [pno, setPno] = useState("");
  const [course1, setCourse1] = useState(null);
  const [course2, setCourse2] = useState(null);
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
  const [Loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState([]);
  const [am, setAm] = useState("am");
  const [hrs, setHrs] = useState("1");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formattedTime = new Date(
      `${date}T${hrs.padStart(2, "0")}:${
        am === "pm" ? parseInt(hrs) + 12 : hrs
      }:00`
    );

    const data = {
      name,
      email,
      phone: pno,
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
      time: formattedTime,
    };
    console.log({ data });
    try {
      const res = await fetch("/api/student", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setLoading(false);

      if (res.status === 201) {
        setSuccess(true);
        setFormStep(7);
        setMessage("");
      } else {
        setSuccess(false);
        setMessage("Something went wrong, please try again.");
      }
    } catch (e) {
      setLoading(false);
      setSuccess(false);
      setMessage("Something went wrong, please try again.");
      console.error(e);
    }
  };

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <>
      <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
        {formStep === 0 && (
          <Stepzero
            message={message}
            setMessage={setMessage}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            formStep={formStep}
            nextFormStep={nextFormStep}
          />
        )}
        {formStep === 1 && (
          <Stepone
            message={message}
            setMessage={setMessage}
            countries={countries}
            setCountries={setCountries}
            formStep={formStep}
            nextFormStep={nextFormStep}
          />
        )}
        {formStep === 2 && (
          <Steptwo
            message={message}
            setMessage={setMessage}
            pno={pno}
            setPno={setPno}
            formStep={formStep}
            nextFormStep={nextFormStep}
          />
        )}
        {formStep === 3 && (
          <Stepthree
            message={message}
            setMessage={setMessage}
            dob={dob}
            setDob={setDob}
            formStep={formStep}
            nextFormStep={nextFormStep}
          />
        )}
        {formStep === 4 && (
          <Stepfour
            course1={course1}
            message={message}
            setMessage={setMessage}
            course2={course2}
            setCourse1={setCourse1}
            setCourse2={setCourse2}
            formStep={formStep}
            nextFormStep={nextFormStep}
          />
        )}{" "}
        {formStep === 5 && (
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
        {formStep === 6 && (
          <Stepsix
            ielts={ielts}
            setIelts={setIelts}
            ieltsBool={ieltsbool}
            setIeltsbool={setIeltsbool}
            gre={gre}
            setGre={setGre}
            greBool={grebool}
            setGrebool={setGrebool}
            visa={visa}
            setVisa={setVisa}
            visaBool={visabool}
            setVisabool={setVisabool}
            english={english}
            setEnglish={setEnglish}
            formStep={formStep}
            nextFormStep={nextFormStep}
          />
        )}
        {formStep === 7 && (
          <Stepseven
            time={time}
            date={date}
            setDate={setDate}
            am={am}
            setAm={setAm}
            hrs={hrs}
            setHrs={setHrs}
            setTime={setTime}
            formStep={formStep}
            nextFormStep={nextFormStep}
            handleSubmit={handleSubmit}
            message={message}
            setMessage={setMessage}
          />
        )}
        {formStep === 8 && <Stepeight />}
      </FormCard>
    </>
  );
}

export default Info;
