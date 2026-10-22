import './Banner.scss'

export const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner-content">
                    <h1>Venha conhecer nossas promoções</h1>
                    <p><strong>50% Off</strong> nos produtos</p>
                    <a href="#produtos">Ver produto</a>
                </div>
            </div>
        </section>
    )
}