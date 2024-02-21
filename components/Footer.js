import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
            <footer class="footer">
         <div class="footer_container container grid">
            <div>
               <a href="#" class="footer_logo">
                  <i class="ri-cactus-line"></i> Cactus
               </a>

               <p class="footer_description">
                  Choose the best <br> plants for your home.
               </p>
            </div>

            <div class="footer_content grid">
               <div>
                  <h3 class="footer_title">COMPANY</h3>
                  <ul class="footer_links">
                     <li>
                        <a href="#" class="footer_link">About Us</a>
                     </li>

                     <li>
                        <a href="#" class="footer_link">Products</a>
                     </li>

                     <li>
                        <a href="#" class="footer_link">Features</a>
                     </li>
                  </ul>
               </div>

               <div>
                  <div>
                     <h3 class="footer_title">INFORMATION</h3>
                     <ul class="footer_links">
                        <li>
                           <a href="#" class="footer_link">Blogs & News</a>
                        </li>
   
                        <li>
                           <a href="#" class="footer_link">Contact Us</a>
                        </li>
   
                        <li>
                           <a href="#" class="footer_link">FAQs</a>
                        </li>
                     </ul>
                  </div>
               </div>

               <div>
                  <h3 class="footer_title">SOCIAL MEDIA</h3>
                  <div class="footer_social">
                     <a href="#" target="_blank" class="footer_social-link">
                        <i class="ri-facebook-circle-fill"></i>
                     </a>

                     <a href="#" target="_blank" class="footer_social-link">
                        <i class="ri-instagram-fill"></i>
                     </a>

                     <a href="#" target="_blank" class="footer_social-link">
                        <i class="ri-twitter-x-line"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <span class="footer_copy">
            &#169; All rights reserverd.
         </span>
      </footer>
    </>
  )
}
