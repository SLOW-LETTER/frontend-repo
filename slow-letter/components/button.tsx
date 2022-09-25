interface ButtonText {
  text: String;
  btnWidth: String;
  btnColor: String;
}

export default function Buttondefault({ text, btnWidth, btnColor }: ButtonText) {
  return (
    <>
      <button className="BTN flex justify-center items-center bg-blue-600 h-12 rounded-md hover:bg-blue-500">
        <span className="text-white text-lg ">{text}</span>
      </button>
      <style jsx>
        {`
          .BTN {
            width: ${btnWidth};
            background-color: ${btnColor};
          }
        `}
      </style>
    </>
  );
}