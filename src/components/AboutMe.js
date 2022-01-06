import picture from './../images/kenny.jpg'

export default function AboutMe() {
    return (
        <div className='section' id='aboutme' data-label='aboutme' data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
            <h2 className='title'>About me</h2>

            <div class="row">
                <div class="col" id="leftCol">
                    <p>
                    I am currently a student at Concordia University doing my bachelor’s degree in Co-Op Software Engineering where I plan to graduate by April 2024.
                    In my spare time, I like to work on side projects that could improve my understanding of different technologies.
                    I prefer to keep learning, keep challenging myself, and keep doing interesting things.
                    Over the course of my experiences, I have acquired project and time management skills, as well as the ability to communicate effectively with team members while respecting deadlines.   
                    </p>

                    <p>
                    I am a growing web and software developer.
                    I have a serious passion for game development, web development, and software development in general.
                    My main interest is in the back-end development; however, I also have a passion for the front-end development.
                    Given that most modern websites require the combination of design, the layer that users interact with, and server technology,
                    having experience in both design and development allows for making the most optimal user experiences.
                    </p>
                </div>

                <div class="col" id="rightCol">
                    <img src={picture} alt=""/>
                </div>
            </div>
        
        </div>
    )
}
