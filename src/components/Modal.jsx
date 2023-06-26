const Modal = ({ children, open, setOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[#000000be] z-20 ${
        open ? "flex" : "hidden"
      } justify-center items-center`}
    >
      <div className="w-[500px] max-w-[90%] bg-white p-5">
        <div className="w-full flex justify-end">
          <button className="cursor-pointer" onClick={() => setOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
