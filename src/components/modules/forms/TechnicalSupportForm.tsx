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

  const attachIcon = (
    <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.0028 13.3981L12.7477 18.6687C11.3731 20.0475 9.45903 20.8378 7.499 20.8378C5.57138 20.8378 3.77755 20.1029 2.44682 18.768C-0.363073 15.9487 -0.318969 11.3178 2.54738 8.44418L8.53516 2.43968C9.47598 1.49573 10.7282 0.976196 12.0589 0.976196C13.3896 0.976196 14.642 1.49573 15.5828 2.43968C17.5241 4.38716 17.5241 7.55563 15.5828 9.50207L9.56571 15.5348C8.52559 16.577 6.71288 16.5791 5.67066 15.5348C4.59918 14.4591 4.59918 12.7092 5.67066 11.6346L10.9561 6.33466C11.16 6.12977 11.4924 6.12977 11.6962 6.33361C11.9001 6.53745 11.9 6.86778 11.6972 7.07267L6.41206 12.3726C5.74512 13.0406 5.74512 14.1288 6.41206 14.7968C7.05494 15.4438 8.18169 15.4417 8.82458 14.7968L14.8417 8.76406C16.3784 7.22426 16.3784 4.71749 14.8417 3.17769C13.3552 1.68702 10.7628 1.68702 9.2763 3.17769L3.28851 9.18219C0.870622 11.6074 0.824427 15.6592 3.18796 18.03C4.32112 19.1663 5.85153 19.7925 7.499 19.7925C9.18411 19.7925 10.8285 19.114 12.0066 17.9307L17.2616 12.6601C17.4655 12.4552 17.7979 12.4552 18.0017 12.659C18.2056 12.8629 18.2066 13.1942 18.0028 13.3981Z"
        fill="#07AA3D"
      />
    </svg>
  );

  const soundIcon = (
    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.36765 4.27587H2.97871C3.41088 4.27587 3.82855 4.09615 4.1577 3.76905L7.52295 0.426444C8.51221 -0.555935 10.0303 0.268419 10.0303 1.78849V17.4529C10.0303 18.973 8.51221 19.7984 7.52295 18.8149L4.1577 15.4723C3.82855 15.1452 3.41088 14.9655 2.97871 14.9655H1.36765C0.612706 14.9655 0 14.2472 0 13.3621V5.88036C0 4.99419 0.612706 4.27587 1.36765 4.27587ZM13.464 14.7207C14.6301 13.3599 15.2721 11.548 15.2721 9.6207C15.2721 7.69335 14.6301 5.88146 13.464 4.52067C13.1959 4.20853 12.7629 4.20848 12.4967 4.52275C12.2295 4.83596 12.2313 5.34483 12.4985 5.65696C13.4048 6.71524 13.9044 8.12412 13.9044 9.62174C13.9044 11.1194 13.4048 12.5282 12.4985 13.5865C12.2313 13.8987 12.2295 14.4065 12.4967 14.7207C12.6298 14.8779 12.8058 14.9569 12.9808 14.9569C13.1559 14.9548 13.33 14.8768 13.464 14.7207ZM15.5611 17.9801C15.386 17.9801 15.2101 17.9021 15.077 17.7449C14.8107 17.4317 14.8107 16.9239 15.0787 16.6107C16.6734 14.7465 17.5515 12.2642 17.5515 9.6207C17.5515 6.97714 16.6734 4.49601 15.0787 2.63066C14.8107 2.31746 14.8107 1.80966 15.077 1.49645C15.3432 1.18325 15.7763 1.1822 16.0444 1.49541C17.898 3.66327 18.9191 6.54956 18.9191 9.6207C18.9191 12.6918 17.898 15.5781 16.0444 17.746C15.9103 17.9021 15.7362 17.9801 15.5611 17.9801Z"
        fill="#07AA3D"
      />
    </svg>
  );

  const refreshIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2.00098V7.00098C20 7.55298 19.553 8.00098 19 8.00098H14C13.447 8.00098 13 7.55298 13 7.00098C13 6.44898 13.447 6.00098 14 6.00098H16.9099C15.5029 3.56598 12.887 2.00098 10 2.00098C5.589 2.00098 2 5.58998 2 10.001C2 14.412 5.589 18.001 10 18.001C13.058 18.001 15.8031 16.2979 17.1641 13.5559C17.4091 13.0619 18.0109 12.858 18.5039 13.105C18.9989 13.351 19.2011 13.9511 18.9551 14.4451C17.2541 17.8721 13.822 20 10 20C4.486 20 0 15.514 0 10C0 4.486 4.486 0 10 0C13.203 0 16.147 1.53506 18 4.00806V2.00098C18 1.44898 18.447 1.00098 19 1.00098C19.553 1.00098 20 1.44898 20 2.00098Z"
        fill="#07AA3D"
      />
    </svg>
  );

  const capthaIcon1 = (
    <svg width="41" height="23" viewBox="0 0 41 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40.3009 22.2372C40.3 21.9184 40.2924 21.5996 40.2781 21.2811V3.20632L35.2814 8.20331C31.1915 3.19742 24.9702 0 18.0014 0C10.7494 0 4.30672 3.46149 0.234375 8.82254L8.42486 17.0991C9.22683 15.6175 10.3628 14.343 11.7427 13.3764C13.1727 12.2607 15.1987 11.3481 18.0014 11.3481C18.3401 11.3481 18.6015 11.3879 18.7934 11.4622C22.2661 11.7365 25.2761 13.6528 27.0482 16.4344L21.2504 22.232C28.594 22.2032 36.8897 22.1864 40.3004 22.2359"
        fill="#1C3AA9"
      />
    </svg>
  );

  const capthaIcon2 = (
    <svg width="23" height="41" viewBox="0 0 23 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.872 0.000732422C22.5532 0.00163698 22.2344 0.00922849 21.9159 0.023502H3.84108L8.83808 5.0205C3.83218 9.11012 0.634766 15.3317 0.634766 22.3002C0.634766 29.5524 4.09626 35.9952 9.45731 40.0678L17.7339 31.8773C16.2522 31.0753 14.9777 29.9392 14.0112 28.5592C12.8955 27.1295 11.9829 25.1032 11.9829 22.3005C11.9829 21.9621 12.0227 21.7006 12.097 21.5085C12.3713 18.036 14.2876 15.026 17.0691 13.2539L22.8667 19.0515C22.8379 11.7077 22.8209 3.41197 22.8707 0.00125586"
        fill="#4285F4"
      />
    </svg>
  );

  const capthaIcon3 = (
    <svg width="41" height="23" viewBox="0 0 41 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.635742 0.299805C0.636789 0.620148 0.644117 0.93866 0.658511 1.25586V19.3307L5.65551 14.3337C9.74512 19.3396 15.9667 22.537 22.9352 22.537C30.1875 22.537 36.6302 19.0755 40.7028 13.7145L32.5123 5.43787C31.7103 6.91951 30.5742 8.19406 29.1942 9.16055C27.7645 10.2763 25.7382 11.1889 22.9355 11.1889C22.5971 11.1889 22.3356 11.1491 22.1435 11.0745C18.671 10.8005 15.661 8.88392 13.8889 6.10263L19.6865 0.304777C12.3427 0.333566 4.04698 0.350577 0.636265 0.301113"
        fill="#ABABAB"
      />
    </svg>
  );

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
          <label className="flex justify-between text-lg text-green border-2 border-green p-2 rounded-md w-1/4 mt-[-30px] cursor-pointer">
            {attachIcon}
            Attach file
            <input type="file" name="file" style={{ display: "none" }} />
          </label>
          <div className="flex">
            <label className="text-[20px] mr-6 leading-[175.4%] tracking-[-0.3px] font-[500] text-[#25373F] border-2 border-[#25373F] bg-[#FFCA85] p-2 w-[140px] h-[70px] mt-[10px]">
              <input type="text" name="file" style={{ display: "none" }} />
            </label>
            <div className="mr-8">
              <div className="border p-[3px] mt-3">{soundIcon}</div>
              <div className="border p-[3px] mt-3">{refreshIcon}</div>
            </div>
            <div className="mt-2 relative">
              <div className="ml-4">
                <div>{capthaIcon1}</div>
                <div className="absolute left-[10px] bottom-[36px]">{capthaIcon2}</div>
                <div className="absolute left-[10px] bottom-[31px] ">{capthaIcon3}</div>
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
