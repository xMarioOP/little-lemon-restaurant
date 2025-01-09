import Card from "../components/Card.jsx";
import ReviewCard from "../components/ReviewCard";
import bruchettaImg from "../icons_assets/bruchetta.svg";
import greekSaladImg from "../icons_assets/greek salad.jpg";
import lemonDessertImg from "../icons_assets/lemon dessert.jpg";
import reviewImg1 from "../icons_assets/reviewImg1.jpg";
import reviewImg2 from "../icons_assets/reviewImg2.jpg";
import reviewImg3 from "../icons_assets/reviewImg3.jpg";
import reviewImg4 from "../icons_assets/reviewImg4.jpg";
import descriptionImg1 from "../icons_assets/Mario and Adrian A.jpg";
import descriptionImg2 from "../icons_assets/Mario and Adrian b.jpg";


function HomePage() {
    return(
        <main className='main'>
            <section className="specials">
                <div className="specialsHeader">
                    <h1>
                        Specials
                    </h1>
                    <button className="button">
                        Online Menu
                    </button>
                </div>
                <div className="card-container">
                    <Card
                        image={greekSaladImg}
                        name="Greek Salad"
                        cost="12.99"
                        description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    />
                    <Card
                        image={bruchettaImg}
                        name="Bruschetta"
                        cost="5.99"
                        description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                    />
                    <Card
                        image={lemonDessertImg}
                        name="Lemon Dessert"
                        cost="5.00"
                        description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    />
                    <Card
                        image={greekSaladImg}
                        name="Greek Salad"
                        cost="12.99"
                        description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    />
                    <Card
                        image={bruchettaImg}
                        name="Bruschetta"
                        cost="5.99"
                        description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                    />
                    <Card
                        image={lemonDessertImg}
                        name="Lemon Dessert"
                        cost="5.00"
                        description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    />
                </div>
            </section>
            <section className="testimonials">
                <div className="testimonials-title-container">
                    <h1 className="testimonials-title">Testimonials</h1>
                </div>
                <div className='review-container'>
                    <ReviewCard
                        rating={5}
                        image={reviewImg1}
                        name="John Doe"
                        review="Amazing experience! Highly recommend."
                    />
                    <ReviewCard
                        rating={2}
                        image={reviewImg2}
                        name="Chris Brown"
                        review="Not what I expected, could be better."
                    />
                    <ReviewCard
                        rating={3}
                        image={reviewImg3}
                        name="Alex Johnson"
                        review="It was okay, nothing special."
                    />
                    <ReviewCard
                        rating={4}
                        image={reviewImg4}
                        name="Jane Smith"
                        review="Great service, but room for improvement."
                    />
                </div>
            </section>
            <section className="description">
                <div className="description-content">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div className= "description-imgs">
                    <img className="description-img1" src={descriptionImg1} alt="testing" />
                    <img className="description-img2" src={descriptionImg2} alt="testing" />
                </div>
            </section>
        </main>
    )
};
export default HomePage;