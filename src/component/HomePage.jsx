import React from 'react'
// {/* ../images/photos/library_1.jpg */}
import library1 from '../images/photos/library_1.jpg'


function HomePage() {
  return (
    <div>
      {/* <!-- Hero section --> */}
  <main class="main-content">
    <section class="hero">
        <div class="hero-content">
            <h2>Welcome to the Library Management System</h2>
            <p>Manage your library with ease and efficiency. Add, 
                update, and keep track of your books in one place.</p>
            <button class="cta-button">Get Book</button>
        </div>
    </section>
      

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