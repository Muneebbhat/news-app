import logo from "../../LogoMakr-7SfJFw.png"
const MiddleHeader = () => {
    return (
        <div className="header-middle herald-header-wraper hidden-xs hidden-sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 hel-el">
              <div className="hel-l herald-go-hor">
                <div className="site-branding">
                  <h1 className="site-title h1">
                    <a href="https://demo.mekshq.com/herald/" rel="home"
                      ><img
                        className="herald-logo no-lazyload"
                        src={logo}
                        alt="Reactor-Webs"
                    /></a>
                  </h1>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    )
}

export default MiddleHeader
