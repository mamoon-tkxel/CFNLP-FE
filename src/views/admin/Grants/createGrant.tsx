import { InputField } from "@/components/InputFields";
import { SwitchButton } from "@/components/SwitchButton";
import { SelectField } from "@/components/SelectField";
import { TextArea } from "@/components/TextAreaField";
import { ButtonComponent } from "@/components/Button";

const CreateGrant = () => {
  return (
    <div>
      <InputField name="title" label="Grant Title" type="text" />

      <TextArea label="Description" />

      <SelectField label="Grant Type" />

      <InputField name="title" label="Grant Amount per charter" type="text" />
      <InputField name="" label="Application Deadline" type="date" />
      <SwitchButton label={"Send Grant Invitation to Counties"} />

      <SwitchButton label={"Active"} defaultChecked={true} />

      <ButtonComponent
        text="save"
        type="submit"
        variant="contained"
        className="bg-clr-primary-blue-700 b-radius-8"
      />
    </div>
  );
};

export default CreateGrant;
