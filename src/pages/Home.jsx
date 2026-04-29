function Home(){
    return (
        <main>
            <section className="first-section">
                <h1 className="welcome-text">Welcome to Njeri's Delights</h1>
                <p className="description">Handcrafted baked goods made with love and the finest ingredients</p>
                <button className="order-btn">Order Now <i className="fa-solid fa-arrow-right"></i></button>
            </section>
            <section className="second-section">
                <h2 className="section-heading">Our signature products</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <img src="https://images.unsplash.com/photo-1627308593341-d886acdc06a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwc291cmRvdWdoJTIwYnJlYWR8ZW58MXx8fHwxNzc1MzE1ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Artisan Sourdough" className="product-image" />
                        <div className="content">
                            <h3>Artisan Sourdough</h3>
                            <p>Freshly baked with traditional techniques</p>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="https://images.unsplash.com/photo-1571157577110-493b325fdd3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnklMjBiYWtlcnl8ZW58MXx8fHwxNzc1MzA0MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" className="product-image" />
                        <div className="content">
                            <h3>Butter Croissants</h3>
                            <p>Flaky, buttery perfection</p>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NzUyNDc3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Artisan Sourdough" className="product-image" />
                        <div className="content">
                            <h3>Chocolate Dream Cake</h3>
                            <p>Rich chocolate layers with ganache</p>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="https://images.unsplash.com/photo-1710688337064-dc1bf5e1ad6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMG1hY2Fyb25zJTIwZnJlbmNofGVufDF8fHx8MTc3NTMzODIwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Artisan Sourdough" className="product-image" />
                        <div className="content">
                            <h3>French Macarons</h3>
                            <p>Delicate almond cookies in vibrant colors</p>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="https://images.unsplash.com/photo-1572978577765-462b91a7f9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMGZyb3N0aW5nJTIwYmFrZXJ5fGVufDF8fHx8MTc3NTMzODIwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Gourmet Cupcakes" className="product-image" />
                        <div className="content">
                            <h3>Gourmet Cupcakes</h3>
                            <p>Handcrafted with premium frosting</p>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="https://images.unsplash.com/photo-1584966164218-42b0c3225e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5uYW1vbiUyMHJvbGxzJTIwYmFrZWR8ZW58MXx8fHwxNzc1MzM4MjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Cinamon rolls" className="product-image" />
                        <div className="content">
                            <h3>Cinnamon Rolls</h3>
                            <p>Warm, sweet and irresistible</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="third-section">
                <div className="review-card">
                    <h3>Ready to Experience Excellence?</h3>
                    <p>Visit us today or place a custom order for your special occasion</p>
                    <div className="btn-group">
                        <button className="to-about">
                            <a href="/about">
                                Learn More About Us
                            </a>
                        </button>
                        <button className="to-contact">
                            <a href="/contacts">
                                Get in touch
                            </a>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home