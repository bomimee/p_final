function Button({ children, type }) {
  let className = "";

  switch (type) {
    case "long-blue":
      className =
        "bg-primary-500 text-white py-2 w-full h-10 rounded-full font-bold";
      break;
    case "medium-blue":
      className =
        "bg-primary-500 rounded-3xl px-[3rem] py-3 text-white font-bold";
      break;
    case "long-white":
      className =
        "bg-white text-black py-2 px-4 w-full h-10 rounded-full border border-black font-bold";
      break;
    default:
      className = "bg-gray-200 text-black py-2 px-4 rounded font-bold";
      break;
  }
  return <button className={className}>{children}</button>;
}

export default Button;
