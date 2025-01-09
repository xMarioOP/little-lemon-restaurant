import {Link} from 'react-router-dom';

const Confirmed = () => {
    return (
        <section className="confirmed">
            <h1 className="confirm-text">Thank you for your reservation!</h1>
            <Link className="button confirm-button" to = '/'>Return Home</Link>
        </section>
    );
};

export default Confirmed;