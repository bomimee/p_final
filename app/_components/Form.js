function Form({ children, action, width }) {
  return (
    <form
      className={`bg-white rounded-2xl ${width} p-8 m-auto`}
      action={action}
    >
      {children}
    </form>
  );
}

export default Form;
