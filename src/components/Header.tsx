function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo28">
          <div className="logo16"></div>
        </div>
        <h1 className="logoName">Loyha nomi</h1>
      </div>
      <div className="header_nav">
        <div className="header_diva">
          <img src="./as." alt="" />
          <a href="" className="header_a clo">
            Asosiy
          </a>
        </div>

        <div className="header_diva">
          <img src="./odam.svg" alt="" />
          <a href="" className="header_a clo ">
            Mijozlar bazasi
          </a>
        </div>
        <div className="header_diva bb">
          <img src="./sms.svg" alt="" />
          <a href="" className="header_a clk ">
            Tracking loyihalari
          </a>
        </div>
        <div className="header_diva">
          <img src="./tebl.svg" alt="" />
          <a href="" className="header_a clo ">
            Sharh olish loyihalari
          </a>
        </div>
        <div className="header_diva">
          <img src="./ch.svg" alt="" />
          <a href="" className="header_a clo ">
            Redirect loyihalari
          </a>
        </div>
      </div>
      <div style={{ height: "32px" }}>
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-8">
            <span className="text-2xl">D</span>
          </div>
        </div>
        <select name="" id="">
          <option className="op" value="Austin Robertson">
            Austin Robertson
          </option>
        </select>
      </div>
    </header>
  );
}

export default Header;
