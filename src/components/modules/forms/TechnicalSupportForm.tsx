import { Form, Formik } from "formik";
import { technicalSupportSchema } from "validations";
import InputFormGroup from "./InputFormGroup";
import TextareaFormGroup from "./TextAreaFormGroup";
import { paperclip, volume, rotateRight, vectorOne, vectorTwo, vectorThree } from "assets/icons";

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
          <label className="flex justify-between text-lg text-green border-2 border-green p-2 rounded-md w-[27%] mt-[-30px] cursor-pointer">
            <img src={paperclip} />
            Attach file
            <input type="file" name="file" style={{ display: "none" }} />
          </label>
          <div className="flex">
            <label className="text-[20px] mr-6 leading-[175.4%] tracking-[-0.3px] font-[500] text-[#25373F] border-2 border-[#25373F] bg-[#FFCA85] p-2 w-[140px] h-[70px] mt-[10px]">
              <input type="text" name="file" style={{ display: "none" }} />
            </label>
            <div className="mr-8">
              <div className="border p-[3px] mt-3">
                <img src={volume} alt="" />
              </div>
              <div className="border p-[3px] mt-3">
                <img src={rotateRight} alt="" />
              </div>
            </div>
            <div className="mt-2 relative">
              <div className="ml-4">
                <div>
                  <img src={vectorOne} alt="" />
                </div>
                <div className="absolute left-[10px] bottom-[36px]">
                  <img src={vectorThree} alt="" />
                </div>
                <div className="absolute left-[10px] bottom-[31px] ">
                  <img src={vectorTwo} alt="" />
                </div>
              </div>
              <div className="mt-6 text-[10px]">
                <p className="text-[#A6A6A6] text-center"> reCAPTCHA </p>
                <p className="text-[#A6A6A6]"> Privacy - Terms </p>
              </div>
            </div>
          </div>
          <InputFormGroup
            nameAndId="code"
            label="Enter the code here:"
            placeholder=""
            type="text"
            labelClassName="text-[#25373F] font-medium text-[20px]"
            className="border-[#D1D1D6] block border-2 w-[8em] rounded-lg placeholder-[#D1D1D6] text-black px-4 py-2"
          />
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
