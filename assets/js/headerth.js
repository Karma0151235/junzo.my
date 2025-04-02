class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML=`
    
            <body class="page-index">

            <!-- ======= Header ======= -->
            <header id="header" class="header d-flex align-items-center fixed-top">
                <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

                <a href="th.html" class="logo d-flex align-items-center">
                    <!-- Uncomment the line below if you also wish to use an image logo -->
                    <img src="assets/img/jlogo.png" alt="">
                    <h1 class="d-flex align-items-center">Junzo Limited</h1>
                </a>

                <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                <nav id="navbar" class="navbar">
                    <ul>
                    <li class="dropdown"><a href="#"><span>About</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                        <li><a href="about.html">Our Company</a></li>
                        <li><a href="location THAILAND.html">Location</a></li>
                        <li><a href="contact THAILAND.html">Connect With Us</a></li>
                        <li class="dropdown"><a href="#"><span>Our Policy</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                            <ul>
                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            <li><a href="fulfillment-policy.html">Fulfillment Policy</a></li>
                            <li><a href="return-refund-policy.html">Return/ Refund Policy</a></li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li class="dropdown"><a href="#"><span>Training</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                        <li><a href="SAP-training-THAILAND.html">SAP Training</a></li>
                        <li><a href="SAP-Training-Course-Schedule-THAILAND.html">Training Schedules</a></li>
                        </ul>
                    </li>
                    <li><a href="gallery THAILAND.html">Gallery</a></li>
                    <li class="dropdown"><a href="#"><span>ประเทศไทย</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                        <li><a href="index.html">มาเลเซีย (Malaysia)</a></li>
						<li><a href="wip.html">สิงคโปร์ (Singapore)</a></li>
						<li><a href="wip.html">ฟิลิปปินส์ (Philippines)</a></li>
                        <li><a href="th.html">ประเทศไทย (Thailand)</a></li>
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