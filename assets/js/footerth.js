class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML=`
        <body>
        <!-- ======= Footer ======= -->
        <footer id="footer" class="footer">

            <div class="footer-content position-relative">
            <div class="container">
                <div class="row">

                <div class="col-lg-4 col-md-6">
                    <div class="footer-info">
                    <h3>Junzo Limited</h3>
                    <p>
                        Huai Khwang District, Bangkok 10310, Thailand<br><br>
                        <strong>Phone:</strong> (+603) 8603 2585 / (+604) 611 5278 / (+6011) 2858 4728<br>
                        <strong>Email:</strong> info@junzo.my<br>
						
                    </p>
                    <div class="social-links d-flex mt-3">
                        <a href="https://t.me/junzopg" class="d-flex align-items-center justify-content-center"><i class="bi bi-telegram"></i></a>
                        <a href="https://www.facebook.com/APJunzo" class="d-flex align-items-center justify-content-center"><i class="bi bi-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/junzo-sdn-bhd-recruitment-team-0008401b2/" class="d-flex align-items-center justify-content-center"><i class="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                </div><!-- End footer info column-->

                <div class="col-lg-2 col-md-3 footer-links">
                    <h4>About</h4>
                    <ul>
                    <li><a href="about.html">Our Company</a></li>
                    <li><a href="location THAILAND.html">Location</a></li>
                    <li><a href="contact THAILAND.html">Connect with Us</a></li>
                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                    <li><a href="fulfillment-policy.html">Fulfillment Policy</a></li>
                    <li><a href="return-refund-policy.html">Return/ Refund Policy</a></li>
                    </ul>
                </div><!-- End footer links column-->

                <div class="col-lg-2 col-md-3 footer-links">
                    <h4>Training</h4>
                    <ul>
                    <li><a href="SAP-training-THAILAND.html">SAP Training</a></li>
                    <li><a href="SAP-Training-Course-Schedule-THAILAND.html">Training Schedules</a></li>
                </div><!-- End footer links column-->

                </div>
            </div>
            </div>

            <div class="footer-legal text-center position-relative">
                <div class="container">
                    <div class="copyright">
                    &copy;<span id="CurrentYear"></span><strong> Junzo</strong>. All Rights Reserved
                    </div>
                </div>
            </div>

        </footer>
        <!-- End Footer -->
  `
    }
}

customElements.define('my-footer',MyFooter)

document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    var currentYear = new Date().getFullYear();

    // Update the content of the span element with the current year
    document.getElementById("CurrentYear").textContent = currentYear;
});