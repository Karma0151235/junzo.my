class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML=`
    
            <body class="page-index">

            <!-- ======= Header ======= -->
            <header id="header" class="header d-flex align-items-center fixed-top">
                <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

                <a href="index.html" class="logo d-flex align-items-center">
                    <!-- Uncomment the line below if you also wish to use an image logo -->
                    <img src="assets/img/jlogo.png" alt="">
                    <h1 class="d-flex align-items-center">Junzo</h1>
                </a>

                <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                <nav id="navbar" class="navbar">
                    <ul>
                    <li class="dropdown"><a href="#"><span>Insights</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                        <li class="dropdown"><a href="#"><span>News</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                            <ul>
                            <li><a href="newsevent.html">News & Event</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="#"><span>Featured Topics</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                            <ul>
                            <li><a href="what-is-training.html">What is Training</a></li>
                            <li><a href="employee-training-and-development.html">Employee Training and Development</a></li>
                            <li><a href="effective-training-programs.html">Effective Training Programs</a></li>
                            <li><a href="teambuildskills.html">Team Building Skills</a></li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li class="dropdown"><a href="#"><span>About</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                        <li><a href="about.html">Our Company</a></li>
                        <li><a href="partners.html">Our Partners</a></li>
                        <li><a href="location.html">Location</a></li>
                        <li><a href="contact.html">Connect With Us</a></li>
                        <li class="dropdown"><a href="#"><span>Our Policy</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                            <ul>
                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            <li><a href="fulfillment-policy.html">Fulfillment Policy</a></li>
                            <li><a href="return-refund-policy.html">Return/ Refund Policy</a></li>
                            </ul>
                        </li>
                        <li><a href="Awards.html">Awards</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a href="#"><span>Services</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                        <li><a href="esg.html">ESG</a></li>
                        <li><a href="services.html">Consultancy Services & Training</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a href="#"><span>Training</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                        <li><a href="SAP-training.html">SAP Training</a></li>
						<li><a href="IT-Training-programme.html">IT Programme</a></li>
						<li><a href="Soft-Skills-Training.html">Soft Skills Training</a></li>
                        <li><a href="Training-Course-Schedules.html">Training Schedules</a></li>
                        </ul>
                    </li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li class="dropdown"><a href="#"><span>Locations</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                        <li><a href="index.html">Malaysia</a></li>
						<li><a href="wip.html">Singapore</a></li>
						<li><a href="wip.html">Philippines</a></li>
                        <li><a href="th.html">Thailand</a></li>
                        </ul>
                    </li>
                    </ul>
                </nav><!-- .navbar -->
                </div>
        </header><!-- End Header -->
  `
    }
}

customElements.define('my-header',MyHeader)