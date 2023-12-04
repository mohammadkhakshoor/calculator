const InputNumber = ({ calc }) => {
  return (
    <div className="mb-5">
      <input
        className="font-Poppins w-full  break-all rounded-xl p-5 text-3xl font-bold leading-3"
        type=" text"
        readOnly
        value={calc}
        dir="rtl"
      />
    </div>
  );
};

export default InputNumber;
