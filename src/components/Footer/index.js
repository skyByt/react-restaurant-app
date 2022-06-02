import './footer.css'

const Footer = () => {
    return (
    <div id="footer-page" class="container-xxl">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-4">
                <span>Hours:</span><br/>
                  Sun-Thurs: 11:15am - 10:00pm<br/>
                  Fri: 11:15am - 2:30pm<br/>
                  Saturday Closed
                <hr class="d-block d-md-none"/>
            </div>
            <div id="address" class="col-xs-12 col-sm-12 col-md-4">
                <span>Address:</span><br/>
                180 Bd Maisonneuve<br/>
                Gatineau, QC J8X 3N5
                  <p>* Delivery area within 3-4 miles, with minimum order of $20 plus $3 charge for all deliveries.</p>
                <hr class="d-block d-md-none"/>
            </div>
            <div id="testimonials" class="col-xs-12 col-sm-12 col-md-4">
                <p>"The best Pizza restaurant I've been to! And that's saying a lot, since I've been to many!"</p>
                  <p>"Amazing pizzas! Great service! Couldn't ask for more! I'll be back again and again!"</p>
                <hr class="d-block d-md-none"/>
            </div>
        </div>
        <div class="text-center">&copy; Copyright Spicy Pizza Bistro 2022</div>
    </div>
    )
}

export default Footer