import * as React from 'react';

function UserDetail({
  index,
  optionNum,
  setOptionNum,
  register,
}: {
  index: number;
  optionNum: number;
  setOptionNum: React.Dispatch<React.SetStateAction<number>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}) {
  return (
    <div className="flex justify-between items-center w-1/2">
      <div className="flex w-fit items-center  gap-3">
        <span>Points</span>
        <input
          {...register(`points.${index}`)}
          defaultValue={100}
          type="number"
          className=" border-black border w-20 rounded-full text-black text-center p-2"
        />
      </div>

      <div className="flex w-fit  gap-3">
        <span>Options</span>
        <select
          {...register(`options${index}`)}
          className=" border-black border w-48 rounded-full text-black text-center"
        >
          <option value="cash">Cash</option>
          <option value="transfer">Transfer</option>
          <option value="gift">Gift</option>
        </select>
      </div>

      <button
        disabled={optionNum !== index + 1}
        onClick={() => setOptionNum(optionNum + 1)}
        className="border border-black rounded-full flex justify-center items-center w-8"
      >
        +
      </button>
    </div>
  );
}

export default UserDetail;
