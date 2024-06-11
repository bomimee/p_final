function Input({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      className="w-full h-9 px-2 bg-gray-100"
      placeholder={placeholder}
    />
  );
}

export default Input;
