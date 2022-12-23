import { Form, Formik } from "formik";
import { technicalSupportSchema } from "validations";
import { InputFormGroup, TextAreaFormGroup } from "components/modules/forms";
import { close } from "assets/images";

interface Props {
  setOpenModal: (technicalSupportModalOpen: boolean) => void;
}

const TechnicalSupportModal = ({ setOpenModal }: Props) => {
  const formikInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  };
  const handleSubmit = (values: {}) => {
    const data = { ...values };
    console.log(data);
  };
  return (
    <div className="fixed inset-0 bg-[#000] bg-opacity-70 flex items-center justify-center px-1">
      <div className="w-[500px] h-[600px] bg-white rounded-lg">
        <div className="flex items-center justify-between px-4 py-2">
          <p>Technical Support</p>
          <button onClick={() => setOpenModal(false)}>
            <img src={close} />
          </button>
        </div>
        <div className="p-4">
          <Formik
            initialValues={formikInitialValues}
            onSubmit={handleSubmit}
            validate={technicalSupportSchema}
          >
            <Form>
              <InputFormGroup nameAndId="firstName" label="First Name" placeholder="" type="text" />
              <InputFormGroup nameAndId="lastName" label="Last Name" placeholder="" type="text" />
              <InputFormGroup nameAndId="email" label="Email" placeholder="" type="email" />
              <InputFormGroup nameAndId="subject" label="Subject" placeholder="" type="text" />
              <TextAreaFormGroup nameAndId="message" label="Message" placeholder="" />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSupportModal;
