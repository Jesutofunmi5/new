import { Form, Formik } from "formik";
import { newMeetingSchema } from "validations";
import { InputFormGroup, SelectFormGroup, TextAreaFormGroup } from "components/modules";
import { ZUimages } from "assets";

interface Props {
  setOpenModal: (modalOpen: boolean) => void;
}

function NewMeetingModal({ setOpenModal }: Props) {
  const formikInitialValues = {
    conferenceTitle: "",
    description: "",
    date: "",
    time: "",
    event: "",
    allDay: false
  };
  const handleSubmit = (values: {}) => {
    const data = { ...values };
    console.log(data);
  };
  return (
    <div className="fixed inset-0 bg-[#000] bg-opacity-70 flex items-center justify-center px-1">
      <div className="h-[666px] w-[653px] bg-white flex flex-col gap-4 pb-4 rounded-lg">
        <div className="flex justify-between items-center px-8 bg-[#FAFAFA] text-black rounded-t-lg">
          <p className="text-[18px]">Schedule a Meeting</p>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="p-2 text-green"
          >
            <img src={ZUimages.close} />
          </button>
        </div>
        <div className="px-8">
          <Formik
            initialValues={formikInitialValues}
            onSubmit={handleSubmit}
            validate={newMeetingSchema}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4">
                <InputFormGroup
                  nameAndId="conferenceTitle"
                  placeholder="My meeting"
                  label="Conference Title"
                  type="text"
                />

                <TextAreaFormGroup
                  nameAndId="description"
                  placeholder="Add description"
                  label="Add description"
                />
                <div>
                  <label htmlFor="when" className="text-black pb-2 text-[18px]">
                    When?
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      name="date"
                      placeholder="Select a date"
                      className=" w-full border-2 border-[#D1D1D6] rounded-md px-4 py-3"
                    />
                    <input
                      type="time"
                      name="time"
                      placeholder="Choose a time"
                      className=" w-full border-2 border-[#D1D1D6] rounded-md px-4 py-3"
                    />
                  </div>
                </div>
                <div className="flex gap-8">
                  <SelectFormGroup nameAndId="event">
                    <option value="">Repeat Event</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </SelectFormGroup>
                  <input type="checkbox" name="allDay" className="p-4" />
                </div>

                <div className="flex justify-between items-center">
                  <button
                    className="border-2 rounded-md p-2 border-[#D1D1D6] text-[#D1D1D6]"
                    onClick={() => setOpenModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green py-2 px-4 text-white text-[18px] rounded-md"
                  >
                    Save Conferencing
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default NewMeetingModal;
