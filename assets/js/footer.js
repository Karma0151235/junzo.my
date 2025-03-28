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
                    <h3>Junzo</h3>
                    <p>
                        Bandar Puteri, 47100 Puchong , Selangor<br><br>
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
                    <h4>Insights</h4>
                    <ul>
                    <li><a href="newsevent.html">News & Event</a></li>
                  <li><a href="what-is-training.html">What is Training</a></li>
                            <li><a href="employee-training-and-development.html">Employee Training and Development</a></li>
                            <li><a href="effective-training-programs.html">Effective Training Programs</a></li>
                            <li><a href="teambuildskills.html">Team Building Skills</a></li>
							</ul>
                </div><!-- End footer links column-->

                <div class="col-lg-2 col-md-3 footer-links">
                    <h4>About</h4>
                    <ul>
                    <li><a href="about.html">Our Company</a></li>
                    <li><a href="partners.html">Our Partners</a></li>
                    <li><a href="location.html">Location</a></li>
                    <li><a href="contact.html">Connect with Us</a></li>
                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                    <li><a href="fulfillment-policy.html">Fulfillment Policy</a></li>
                    <li><a href="return-refund-policy.html">Return/ Refund Policy</a></li>
                    <li><a href="Awards.html">Awards</a></li>
                    </ul>
                </div><!-- End footer links column-->

                <div class="col-lg-2 col-md-3 footer-links">
                    <h4>Services</h4>
                    <ul>
                    <li><a href="esg.html">ESG</a></li>
                    <li><a href="services.html">Consultancy Service & Training</a></li>
					<li><a href="https://apjunzo.com/" target="_blank">Recruitment</a></li>
                    </ul>
                </div><!-- End footer links column-->

                <div class="col-lg-2 col-md-3 footer-links">
                    <h4>Training</h4>
                    <ul>
                    <li><a href="SAP-training.html">SAP Training</a></li>
					<li><a href="IT-Training-programme.html">IT Training</a></li>
					<li><a href="Soft-Skills-Training.html">Soft Skills Training</a></li>
                    <li><a href="TrainingCourseSchedule.html">Training Schedules</a></li>
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