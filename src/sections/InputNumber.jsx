const InputNumber = ({ calc }) => {
    return (
        <div className="mb-5">
            <input
                className="font-Poppins w-full break-all rounded-xl p-5 text-2xl font-bold leading-3"
                type=" text"
                readOnly
                value={calc}
            />
        </div>
    );
};

export default InputNumber;
