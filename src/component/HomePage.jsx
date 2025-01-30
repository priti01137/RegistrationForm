import React from 'react'
// {/* ../images/photos/library_1.jpg */}
import library1 from '../images/photos/library_1.jpg'
import library2 from '../images/photos/library_2.jpg'
import library3 from '../images/photos/library_3.jpg'



function HomePage() {
  return (
    <div>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
     class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={library1}class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Welcome to the Library</h5>
        {/* <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src={library2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5> */}
        <p>Manage your library with ease and efficiency. Add, 
                update, and keep track of your books in one place.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={library3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      
      {/* <!-- Hero section --> */}
  <main class="main-content">
    {/* <section class="hero">
        <div class="hero-content">
            <h2>Welcome to the Library Management System</h2>
            <p>Manage your library with ease and efficiency. Add, 
                update, and keep track of your books in one place.</p>
            <button class="cta-button">Get Book</button>
        </div>
    </section> */}
    
      

    <section id="about" class="about-section">
      <h2>About Us</h2>
      <p>Our library management system is designed to simplify the way you organize and manage your books.
         Whether you are a small library or a large institution, our system is here to help.</p>
    </section>

    <section id="services" class="services-section">
      <h2>Our Services</h2>
      <ul>
        <li>Book Management</li>
        <li>Member Records</li>
        <li>Borrowing and Returning System</li>
        
      </ul>
    </section>

    <section id="contact" class="contact-section">
      <h2>Contact Us</h2>
      <p>If you have any questions or need support, feel free to reach out to us at:</p>
      <p>Email: support@librarysystem.com</p>
      <p>Phone: +91 7082582459</p>
   

  
    </section> 
  </main>
    </div>
  )
}

export default HomePage