export default function Contact() {
    return (
        <div className='section' id='contact' data-label='contact'  data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
            <h2 className='title'>Contact Me</h2>

            <h4 id="text">
                <p>If you require any further information, feel free to email me or message me on LinkedIn! <i class="far fa-smile"></i></p>
            </h4>

            <div id="socials">
                <div id="email">
                    <a href="mailto:kennyphan100@gmail.com"><i className="fas fa-envelope"></i> Email - kennyphan100@gmail.com</a>
                </div>

                <div id="linkedin">
                    <a href="https://www.linkedin.com/in/kenny--phan/" target="_blank"><i className="devicon-github-original"></i> LinkedIn - https://www.linkedin.com/in/kenny--phan/</a>
                </div>

                <div id="github">
                    <a href="https://github.com/kennyphan100" target="_blank"><i className="devicon-linkedin-plain"></i> GitHub - https://github.com/kennyphan100</a>
                </div>
            </div>

        </div>
    )
}
