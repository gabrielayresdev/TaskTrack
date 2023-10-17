import { useRegisterContext } from "../../../../contexts/RegisterContext";
import SvgLock from "../../../../iconComponents/Icons/Lock";
import SvgPerson from "../../../../iconComponents/Icons/Person";
import Button from "../../../Button/Button";
import Form from "../../../Form/Form";
import Input from "../../../Input/Index";

export const PersonalForm = () => {
  const { formValues, GoNextPage } = useRegisterContext();

  const { name, cellphone } = formValues;
  return (
    <Form>
      <Input.Input label="full name" id="name" error={name.error}>
        <SvgPerson />
        <Input.Field
          value={name.value}
          handleChange={name.onChange}
          onBlur={() => name.validate()}
          placeholder="type your name"
        />
      </Input.Input>
      <Input.Input label="cellphone" id="cellphone" error={cellphone.error}>
        <SvgLock />
        <Input.Field
          type={"tel"}
          value={cellphone.value}
          handleChange={cellphone.onChange}
          onBlur={() => cellphone.validate()}
          placeholder="type your cellphone"
        />
      </Input.Input>

      <Button text="Sign up" onClick={GoNextPage} />
    </Form>
  );
};

export default PersonalForm;
