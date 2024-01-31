import { useState } from 'react';
import './App.css';
import UserDetail from './UserDetail';
import { useForm } from 'react-hook-form';
import DynamicNumberInputs from './Testin';
import ParentComponent from './ParentComponent';

function App() {
  const customerDetails = [
    {
      name: 'John',
      points: 500,
    },
    {
      name: 'Jane',
      points: 600,
    },
  ];
  return (
    <>
      <h1>Demo</h1>
      {/* <div className="flex flex-col gap-4">
        {customerDetails.map((customerDetail) => (
          <div>
            <AccountComp detail={customerDetail} />
          </div>
        ))}
      </div>
      <DynamicNumberInputs />
      <DynamicNumberInputs />
      <button>Next</button> */}
      <ParentComponent />
    </>
  );
}

export default App;

function AccountComp({ detail }: { detail: { name: string; points: number } }) {
  const [optionNum, setOptionNum] = useState(1);
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="gap-4 flex flex-col justify-center items-center border border-black p-8 rounded-lg"
    >
      <div>
        <h3>{detail.name}</h3>
        <p>You have {detail.points} points</p>
      </div>
      {Array(optionNum)
        .fill(0)
        .map((_, index) => (
          <UserDetail
            key={index}
            index={index}
            setOptionNum={setOptionNum}
            optionNum={optionNum}
            register={register}
          />
        ))}

      <button>submit</button>
    </form>
  );
}
