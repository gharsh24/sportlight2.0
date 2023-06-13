import "./footer.css";

function footer() {
  return (
    <div>
      <div className="section5" style={{ marginTop: "4rem" }}>
        <section>
          <h1 className="title inline-photo2 show-on-scroll2">
            Subscribe to our newsletter
          </h1>
          <p className="inline-photo show-on-scroll">
            Get the latest news on sports events, match results, player
            transfers, and upcoming tournaments.
          </p>
        </section>
        <section>
          <button className="btn2">Subscribe</button>
        </section>
      </div>

      <footer>
        <div className="footer">
          <section>
            <h3>Sportslight</h3>
            <p>Your one stop solution for sports craving</p>
          </section>
          <section>
            <h3>LINKS</h3>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
          </section>
          <section>
            <h3>OTHER</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Cookie Policy</a>
          </section>
          <section>
            <h3>ANY QUESTIONS?</h3>
            <a href="emailto:amanmuhal02@gmail.com">
              <span>
                <i className="fa fa-envelope" />
              </span>
              <span>amanmuhal02@gmail.com</span>
            </a>
            <a href="tel:xxxxxxxxx">
              <span>
                <i className="fa fa-phone" />
              </span>
              <span>(+x)-xxx-xxxx-xxxxx</span>
            </a>
          </section>
        </div>
      </footer>
      <div className="sub-footer">
        Copyright ©2023 All rights reserved | Sportslight
      </div>
    </div>
  );
}
export default footer;
