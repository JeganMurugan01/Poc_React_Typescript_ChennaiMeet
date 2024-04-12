import React from "react";
import { useForm, Resolver } from "react-hook-form";
import { LOGIN } from "../../constants";

interface ArrayObject {
  id: number;
  label: string;
  apiKey: string;
}
type ArrayType = ArrayObject[];

interface Props {
  data: ArrayType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resolver: Resolver<any> = async (values) => {
  const errors: { [key: string]: { type: string; message: string } } = {};
  Object.entries(values).forEach(([key, value]) => {
    if (!value) {
      errors[key] = {
        type: "required",
        message: `${key} is required`,
      };
    }
  });
  return {
    values: values,
    errors: errors,
  };
};

const Form: React.FC<Props> = ({ data, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useForm<any>({
    resolver: resolver,
  });

  const handleSubmitForm = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <form className="border p-4" onSubmit={handleSubmitForm}>
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map((value: ArrayObject) => (
          <div key={value.id}>
            <div className="form-group">
              <label className="mb-2">{value.label}</label>
              <input
                {...register(value.apiKey, { required: true })}
                type="text"
                className="form-control"
                id={`${value.id}`}
              />
              {errors[value.apiKey]?.message && (
                <p className="text-danger">
                  {String(errors[value.apiKey]?.message)}
                </p>
              )}
            </div>
          </div>
        ))}
      <button type="submit" className="btn btn-primary mt-2">
        {LOGIN?.SUBMIT}
      </button>
    </form>
  );
};

export default Form;
