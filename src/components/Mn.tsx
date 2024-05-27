import Asosiy from "./Asosiy";
import Yonalish from "./Yonalish";

function Mn() {
  return (
    <div className="max-w-[1392px] ml-auto mr-auto border box-border py-6 px-4 border-[ #E2E2EA] rounded-[24px]">
      <div className="main_div1  border-b-2 border-[#E2E2EA] border-solid pb-[22px]">
        <button className="btn_oq btn">
          <img src="./ic_Plus.svg" alt="" />
          <span>Subloyiha ochish</span>
        </button>
        <button className="btn_kok btn">
          <span>Davom etish</span>
          <svg
            className="y360"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.09 19.92L8.57003 13.4C7.80003 12.63 7.80003 11.37 8.57003 10.6L15.09 4.07999"
              stroke="#fff"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <Yonalish />
      <Asosiy />
    </div>
  );
}

export default Mn;
