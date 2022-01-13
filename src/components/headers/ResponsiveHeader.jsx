import logo from "../../LogoMakr-7SfJFw.png"
const ResponsiveHeader = () => {
  return (
    <div
      id="herald-responsive-header"
      className="herald-responsive-header herald-slide hidden-lg hidden-md"
      style={{zIndex: '99999999'}}
    >
      <div className="container">
        <div className="herald-nav-toggle">
          <i className="fa fa-bars"></i>
        </div>
        <div className="site-branding mini">
          <span className="site-title h1">
            <a href="https://demo.mekshq.com/herald/" rel="home">
              <img
                className="herald-logo-mini no-lazyload"
                src={logo}
                alt="Herald"
              />
            </a>
          </span>
        </div>

        <div className="herald-menu-popup-search">
          <span className="fa fa-search"></span>
          <div className="herald-in-popup">
            <form
              className="herald-search-form"
              action="https://demo.mekshq.com/herald/"
              method="get"
            >
              <input
                name="s"
                className="herald-search-input"
                type="text"
                placeholder="Type here to search..."
              />
              <button type="submit" className="herald-search-submit"></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveHeader;
