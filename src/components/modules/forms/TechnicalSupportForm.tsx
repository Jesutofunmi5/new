import { Form, Formik } from "formik";
import { useState } from "react";
import { technicalSupportSchema } from "validations";
import InputFormGroup from "./InputFormGroup";
import TextareaFormGroup from "./TextAreaFormGroup";

const TechnicalSupportForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    file: null
  });
  //   const [file, setFile] = useState(null);
  const formikInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  };
  const handleSubmit = (values: {}) => {
    // setFile(event.target.files[0]);
    const data = { ...formData, ...values };
    setFormData(data);
    console.log(data);
  };
  return (
    <div className="p-4">
      <Formik
        initialValues={formikInitialValues}
        onSubmit={handleSubmit}
        validate={technicalSupportSchema}
      >
        <Form className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-2">
            <InputFormGroup
              nameAndId="firstName"
              label="First Name"
              placeholder=""
              type="text"
              labelClassName="text-black text-[12px]"
              className="border-[#D1D1D6] border-2 w-full rounded-lg placeholder-[#D1D1D6] text-black px-4 py-2"
            />
            <InputFormGroup
              nameAndId="lastName"
              label="Last Name"
              placeholder=""
              type="text"
              labelClassName="text-black text-[12px]"
              className="border-[#D1D1D6] border-2 w-full rounded-lg placeholder-[#D1D1D6] text-black px-4 py-2"
            />
          </div>
          <InputFormGroup
            nameAndId="email"
            label="Email Address"
            placeholder=""
            type="email"
            labelClassName="text-black text-[12px]"
            className="border-[#D1D1D6] border-2 w-full rounded-lg placeholder-[#D1D1D6] text-black px-4 py-2"
          />
          <InputFormGroup
            nameAndId="subject"
            label="Subject"
            placeholder=""
            type="text"
            labelClassName="text-black text-[12px]"
            className="border-[#D1D1D6] border-2 w-full rounded-lg placeholder-[#D1D1D6] text-black px-4 py-2"
          />
          <TextareaFormGroup nameAndId="message" label="Message" placeholder="" />
          {/* <div>
            <input type="file" id="file-input" onChange={handleChange} />
            {file && <p>File chosen: {file.name}</p>}
          </div> */}
          <div className="flex md:justify-end ">
            <button type="submit" className="bg-green p-2 md:w-[20%] w-full text-white rounded-md">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default TechnicalSupportForm;
