// import React from 'react';
// import { useForm, useFieldArray } from 'react-hook-form';

// function DynamicNumberInputs() {
//   const { register, control, handleSubmit } = useForm();
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: 'point',
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         {fields.map((field, index) => (
//           <div key={field.id}>
//             <input
//               {...register(`point.${index}.value`)}
//               type="number"
//               placeholder={`Number ${index + 1}`}
//             />
//             <button type="button" onClick={() => remove(index)}>
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>

//       <button type="button" onClick={() => append({ value: '' })}>
//         Add Number
//       </button>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default DynamicNumberInputs;

import React, { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

function DynamicInputs({ handleSetAllData, detail }) {
  const { register, control, handleSubmit, getValues, watch } = useForm({
    defaultValues: {
      inputs: [
        // Include a default field
        { points: '', elect: '' },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'inputs',
  });
  //   const watchInput = watch('inputs');
  //   useEffect(() => {
  //     let mount = true;
  //     if (mount) {
  //       handleSetAllData(watchInput);
  //     }

  //     return () => {
  //       mount = false;
  //     };
  //   }, [watchInput]);
  watch((data, { name, type }) => handleSetAllData(detail.name, data?.inputs));

  const handleButtonClick = () => {
    // Access the current form data without submitting
    const formData = getValues();
    console.log('Current Form Data:', formData);
  };

  //   handleSetAllData(formData);

  return (
    <form>
      <div>
        {fields.map((field, index) => (
          <div key={field.id}>
            <input
              {...register(`inputs.${index}.points`)}
              type="number"
              placeholder={`Points ${index + 1}`}
            />
            <select
              {...register(`inputs.${index}.elect`)}
              defaultValue=""
              //   placeholder={`Select ${index + 1}`}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              {/* Add more options as needed */}
            </select>
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
            <button type="button" onClick={handleButtonClick}>
              {detail.name}{' '}
            </button>
          </div>
        ))}
      </div>

      <button type="button" onClick={() => append({ points: '', elect: '' })}>
        Add Input
      </button>

      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicInputs;
