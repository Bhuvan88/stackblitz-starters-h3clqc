import React, {useRef} from 'react';
import Image from "next/image";
import Typed from 'typed.js';

export default function Home() {
     
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      
    <div className="menu" id="Menu">
        <div className="logo" id="logo">
            <a href="index.html">
                <Image src="/logo.png" width={100} height={100} alt="logo" /> 
            </a>
        </div>
        <div className="nav" id="nav">
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#about__content">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div className="social" id="social">
            <a title="facebook" href="#"><i className="fab fa-facebook-f"></i></a>          
            <a title="linkedin" href="#"><i className="fab fa-linkedin-in"></i></a>
            <a title="instagram" href="#"><i className="fab fa-instagram"></i></a>           
        </div>
        <div className="close__menu" id="close_menu">
            <i className="fas fa-chevron-left"></i>
        </div>
    </div>
  
    <div className="content" id="content">
      
        <header className="header" id="Home">  
            <div className="header__content" id="header__content">
                <div className="header__title">
                    <h1>Bhuvanesh</h1>
                    <h2>Hello I'm <span className="typing"></span></h2>
                </div>
                <div className="Down__btn">
                    <a href="#about__content">
                        <i className="fas fa-angle-double-down"></i>
                    </a>
                </div>
            </div>
            <div id="particles-js"></div>
        </header>

            <section className="Section">

    
    <div className="about__content" id="about__content">
        <div className="about__title">
            <h3>About me</h3>
            <span>Main informations about me</span>
        </div>
        <div className="info__about__me">
            <div className="info_photo">
            <Image className="info_photo_item" src="/images/006.png" width={100} height={100}alt="MyPhoto" /> 
            </div>
            <div className="text__about__me">
                <div className="subTitle__aboutMe">
                    <h6>I'm Bhuvanesh and I'm <span className="about_typing"></span></h6> 
                </div>
                <div className="paragraph__aboutMe">
                    <p>Hi! My name is <span>Bhuvanesh</span>. I am a Web Developer, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply.</p>
                </div>
                <div className="more_info_aboutMe">
                    <ul>
                        <li>
                            <label>Birthday:</label>
                            <p>13.09.1989</p> 
                        </li>
                        <li>
                            <label>City:</label>
                            <p>Tamilnadu, India</p> 
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <label>Mail:</label>
                            <a href="#">bhuvanmca88@gmail.com</a> 
                        </li>
                        <li>
                            <label>Phone:</label>
                            <a href="#">+91 999 455 4593</a> 
                        </li>
                    </ul>
                </div>
                <div className="link_social_aboutMe">
                    <a title="facebook" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a title="twitter" href="#"><i className="fab fa-twitter"></i></a>
                    <a title="linkedin" href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a title="instagram" href="#"><i className="fab fa-instagram"></i></a>
                    <a title="dribbble" href="#"><i className="fab fa-dribbble"></i></a>
                </div>
                <div className="btn__aboutMe">
                    <a download href="text.html"><span>Download CV</span></a>
                    <a href="#contact"><span>Send Message</span></a>
                </div>
            </div>
        </div>
        <div className="myStoryAboutMe">
            <div className="myStory">
                <h5>My Story</h5> 
                <p>Hi! My name is Bhuvanesh. I am a Web Developer, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry. </p>
            </div>
            <div className="mySkills" id="mySkills">
                <h5>My Skills</h5> 
                <div className="skill-title">
                    <label>HTML/CSS</label>
                    <label data-num="90" className="skill-bar-percent">0</label>
                    <label>%</label>
                </div>
                <div className="skillbar" data-percent="90%">
                    <div className="skill-bar one"></div>
                </div>

                <div className="skill-title">
                    <label>PHP</label>
                    <label data-num="95" className="skill-bar-percent">0</label>
                    <label>%</label>
                </div>
                <div className="skillbar" data-percent="95%">
                    <div className="skill-bar two"></div>
                </div>

                <div className="skill-title">
                    <label>JAVASCRIPT</label>
                    <label data-num="85" className="skill-bar-percent">0</label>
                    <label>%</label>
                </div>
                <div className="skillbar" data-percent="85%">
                    <div className="skill-bar three"></div>
                </div>

                <div className="skill-title">
                    <label>MOBILE APP DEVELOPMENT</label>
                    <label data-num="75" className="skill-bar-percent">0</label>
                    <label>%</label>
                </div>
                <div className="skillbar" data-percent="75%">
                    <div className="skill-bar four"></div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="services__content">
        <div className="about__title" id="services">
            <h3>Services</h3>
            <span>What i do</span>
        </div>
        <div className="services_items">
            <div className="service_iner">
                <div className="service-title">
                    <div className="service_icon">
                        <i className="fas fa-bars"></i>
                    </div>
                    <span>UX</span>
                </div>
                <div className="service-subTitle">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Ipsum has been the. </p>
                </div>
            </div>
            <div className="service_iner">
                <div className="service-title">
                    <div className="service_icon">
                        <i className="fas fa-vector-square"></i>
                    </div>
                    <span>DESIGN</span>
                </div>
                <div className="service-subTitle">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Ipsum has been the. </p>
                </div>
            </div>
            <div className="service_iner">
                <div className="service-title">
                    <div className="service_icon">
                        <i className="fas fa-code"></i>
                    </div>
                    <span>CODING</span>
                </div>
                <div className="service-subTitle">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Ipsum has been the. </p>
                </div>
            </div>
            <div className="service_iner">
                <div className="service-title">
                    <div className="service_icon">
                        <i className="far fa-comment-dots"></i>
                    </div>
                    <span>SOCIAL</span>
                </div>
                <div className="service-subTitle">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Ipsum has been the. </p>
                </div>
            </div>
            <div className="service_iner">
                <div className="service-title">
                    <div className="service_icon">
                        <i className="fas fa-search"></i>
                    </div>
                    <span>SEO</span>
                </div>
                <div className="service-subTitle">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Ipsum has been the. </p>
                </div>
            </div>
            <div className="service_iner">
                <div className="service-title">
                    <div className="service_icon">
                        <i className="fas fa-chart-pie"></i>
                    </div>
                    <span>COMMERCE</span>
                </div>
                <div className="service-subTitle">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Ipsum has been the. </p>
                </div>
            </div>
        </div>
    </div>
   
    <div className="counter__content">
        <div className="counter" id="counter">
            <div className="bl">
                <div>
                    <i className="fas fa-users"></i>
                    <h4 data-num="650">0</h4>
                    <p>Happy Clients</p>
                </div>
            </div>
            <div className="bl">
                <div>
                    <i className="fas fa-thumbs-up"></i>
                    <h4 data-num="635">0</h4>
                    <p>Projects Completed</p>
                </div>
            </div>
            <div className="bl">
                <div>
                    <i className="fas fa-terminal"></i>
                    <h4 data-num="1250">0</h4>
                    <p>Lines Of Code</p>
                </div>
            </div>
            
        </div>
    </div>
   
    <div className="works__content">
        <div className="about__title" id="portfolio">
            <h3>Portfolio</h3>
            <span>Work i have done</span>
        </div>
        <div className="work_nav">
            <ul>
                <li className="active btn_work " data-filter="all">all</li>
                <li className="btn_work" data-filter="webDesign">Web design</li>
                <li className="btn_work" data-filter="application">Application</li>
                <li className="btn_work" data-filter="development">Development</li>
            </ul>
        </div>
        <div className="works__inner">
            <div className="work_item filter application">
                <div className="item_content">
                <Image src="/images/work/001.jpg" alt="work" width={100} height={100}/>
                    <div className="item-overlay"></div>
                    <div className="item_title">
                        <h6>Application</h6>
                        <a  href="images/work/001.jpg"><i className="fas fa-search"></i></a>
                    </div>
                </div>
            </div>
            <div className="work_item filter webDesign">
                <div className="item_content">
                <Image src="/images/work/002.jpg" alt="work" fill={true}/>
                    <div className="item-overlay"></div>
                    <div className="item_title">
                        <h6>Web design</h6>
                        <a href="images/work/002.jpg"><i className="fas fa-search"></i></a>
                    </div>
                </div>
            </div>
            <div className="work_item filter development">
                <div className="item_content">
                <Image src="/images/work/003.jpg" alt="work" fill={true}/>
                    <div className="item-overlay"></div>
                    <div className="item_title">
                        <h6>Application</h6>
                        <a href="images/work/003.jpg"><i className="fas fa-search"></i></a>
                    </div>
                    </div>
            </div>
            <div className="work_item filter webDesign development">
                <div className="item_content">
                <Image src="/images/work/004.jpg" alt="work" width={100} height={100}/>
                    <div className="item-overlay"></div>
                    <div className="item_title">
                        <h6>Development</h6>
                        <a href="images/work/004.jpg"><i className="fas fa-search"></i></a>
                    </div>
                </div>
            </div>
            <div className="work_item filter application development">
                <div className="item_content">
                <Image src="/images/work/005.jpg" alt="work" width={100} height={100}/>
                    <div className="item-overlay"></div>
                    <div className="item_title">
                        <h6>Web design</h6>
                        <a href="images/work/005.jpg"><i className="fas fa-search"></i></a>
                    </div>
                </div>
            </div>
            <div className="work_item filter application development">
                <div className="item_content">
                <Image src="/images/work/006.jpg" alt="work" width={100} height={100}/>
                    <div className="item-overlay"></div>
                    <div className="item_title">
                        <h6>Web design</h6>
                        <a href="images/work/006.jpg"><i className="fas fa-search"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="feedback_content">
        <div className="feedback_container">
            <div className="owl-carousel owl-theme" id="owl-carousel">
                <div>
                    <figure>
                    <Image src="/images/face.jpg" alt="user" fill={true}/>
                        <div className="name">Mary Brown</div>
                        <div className="comment">Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad et esse Saepe asperiores nisi facere ipsam corporis. Dolorem praesentium tenetur tempore dolorem illum autem? Veritatis fuga quasi sunt tenetur. Expedita id eaque incidunt beatae nesciunt! In similique exercitationem tempore excepturi placeat Nostrum ducimus dicta temporibus quas!</div> 
                    </figure>
                </div>
                <div>
                    <figure>
                    <Image src="/images/face.jpg" alt="user" fill={true}/>
                        <div className="name">Mary Brown</div>
                        <div className="comment">Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad et esse Saepe asperiores nisi facere ipsam corporis. Dolorem praesentium tenetur tempore dolorem illum autem? Veritatis fuga quasi sunt tenetur. Expedita id eaque incidunt beatae nesciunt! In similique exercitationem tempore excepturi placeat Nostrum ducimus dicta temporibus quas!</div>
                    </figure>
                </div>
                <div>
                    <figure>
                    <Image src="/images/face.jpg" alt="user" fill={true}/>
                        <div className="name">Mary Brown</div>
                        <div className="comment">Dolor facilis veritatis doloremque dicta eos Voluptate earum nulla ad et esse Saepe asperiores nisi facere ipsam corporis. Dolorem praesentium tenetur tempore dolorem illum autem? Veritatis fuga quasi sunt tenetur. Expedita id eaque incidunt beatae nesciunt! In similique exercitationem tempore excepturi placeat Nostrum ducimus dicta temporibus quas!</div>
                    </figure>
                </div>
            </div>
        </div>
    </div>
   
    <div className="contact_content">
        <div className="about__title" id="contact">
            <h3>Contact</h3>
            <span>Get in touch</span>
        </div>
        <div className="contact-title">
            <span>Leave a message</span>
        </div>
        <div className="contact__conte">
            <div className="info-contact">
                <p>Tamilnadu, India</p> 
                <a href="#">bhuvanmca88@gmail.com</a> 
                <a href="#">+91 999 455 4593</a> 
                <div className="contact-social">
                    <a title="facebook" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a title="linkedin" href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a title="instagram" href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            
        </div>
    </div>

    <div className="footer">
        <p>&copy; 2019 All Rights Reserved</p>
    </div>
   

    </section>
</div>
   
    </main>
  );
}
