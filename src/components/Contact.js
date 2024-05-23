const Contact = () => {
  return (
    <div className="m-20">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us </h1>
      <form>
        <input
          type="text"
          className=" border border-black p-1 m-2 rounded-lg"
          placeholder="name"
        />
        <input
          type="text"
          className=" border border-black p-1 m-2 rounded-lg"
          placeholder="message"
        />
        <button className="px-4  py-[10px] bg-green-200 m-4 rounded-lg hover:bg-green-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
