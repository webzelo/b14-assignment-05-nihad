import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">

      <div className="
        max-w-7xl
        mx-auto
        px-8
        lg:px-20
        py-14
      ">

        <div className="
          grid
          grid-cols-1
          md:grid-cols-5
          gap-10
        ">


          {/* Brand */}
          <div className="md:col-span-2">

            <img
              src={logo}
              alt="DevStack"
              className="w-32 mb-5"
            />

            <p className="
              text-sm
              text-slate-400
              max-w-sm
              leading-relaxed
            ">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>


            <div className="
              flex
              gap-5
              mt-7
              text-sm
              font-medium
              text-slate-600
            ">
              <a className="hover:text-pink-500">
                GitHub
              </a>

              <a className="hover:text-pink-500">
                Twitter
              </a>

              <a className="hover:text-pink-500">
                LinkedIn
              </a>
            </div>

          </div>



          {/* Product */}
          <div>

            <h3 className="
              text-sm
              font-semibold
              text-slate-900
              mb-5
            ">
              PRODUCT
            </h3>


            <ul className="
              space-y-3
              text-sm
              text-slate-400
            ">
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Technologies</a>
              </li>

              <li>
                <a>Projects</a>
              </li>
            </ul>

          </div>




          {/* Company */}
          <div>

            <h3 className="
              text-sm
              font-semibold
              text-slate-900
              mb-5
            ">
              COMPANY
            </h3>


            <ul className="
              space-y-3
              text-sm
              text-slate-400
            ">
              <li>
                <a>About</a>
              </li>

              <li>
                <a>Contact</a>
              </li>

              <li>
                <a>Careers</a>
              </li>
            </ul>

          </div>


          {/* Legal */}
          <div>

            <h3 className="
              text-sm
              font-semibold
              text-slate-900
              mb-5
            ">
              LEGAL
            </h3>


            <ul className="
              space-y-3
              text-sm
              text-slate-400
            ">
              <li>
                <a>Privacy Policy</a>
              </li>

              <li>
                <a>Terms of Service</a>
              </li>
            </ul>

          </div>


        </div>



        {/* Bottom */}
        <div className="
          border-t
          border-gray-100
          mt-12
          pt-7
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
          text-sm
          text-slate-400
        ">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>


          <div className="flex gap-6">
            <a>
              Privacy
            </a>

            <a>
              Terms
            </a>
          </div>

        </div>


      </div>

    </footer>
  );
};

export default Footer;
