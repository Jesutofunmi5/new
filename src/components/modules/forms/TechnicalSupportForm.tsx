import { Form, Formik } from "formik";
import { technicalSupportSchema } from "validations";
import InputFormGroup from "./InputFormGroup";
import TextareaFormGroup from "./TextAreaFormGroup";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormikBag {
  setSubmitting: (isSubmitting: boolean) => void;
}

const TechnicalSupportForm = () => {
  const formikInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  };
  const handleSubmit = (values: FormValues, formikBag: FormikBag) => {
    console.log(values);
    formikBag.setSubmitting(false);
  };
  return (
    <div className="p-4">
      <Formik
        initialValues={formikInitialValues}
        onSubmit={handleSubmit}
        validate={technicalSupportSchema}
      >
        <Form className="flex flex-col gap-6">
          <div className="flex justify-between items-center gap-2 h-40px]">
            <InputFormGroup
              nameAndId="firstName"
              label="First Name"
              placeholder=""
              type="text"
              labelClassName="text-black font-medium text-[14px]"
              className="border-[#D1D1D6] border-2 w-full rounded-lg placeholder-[#D1D1D6] text-black px-4 py-2"
            />
            <InputFormGroup
              nameAndId="lastName"
              label="Last Name"
              placeholder=""
              type="text"
              labelClassName="text-black font-medium text-[14px]"
              className="border-[#D1D1D6] border-2 w-full rounded-lg placeholder-[#D1D1D6] text-black px-4 py-2"
            />
          </div>
          <InputFormGroup
            nameAndId="email"
            label="Email Address"
            placeholder=""
            type="email"
            labelClassName="text-black font-medium text-[14px]"
            className="border-[#D1D1D6] border-2 w-full rounded-lg placeholder-[#D1D1D6] text-black px-4 py-2"
          />
          <InputFormGroup
            nameAndId="subject"
            label="Subject"
            placeholder=""
            type="text"
            labelClassName="text-black font-medium text-[14px]"
            className="border-[#D1D1D6] border-2 w-full rounded-lg placeholder-[#D1D1D6] text-black px-4 py-2"
          />
          <TextareaFormGroup nameAndId="message" label="Message" placeholder="" />
          <label className="text-lg text-green border-2 border-green p-2 rounded-md w-1/5 cursor-pointer">
            Attach file
            <input type="file" name="file" style={{ display: "none" }} />
          </label>
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
