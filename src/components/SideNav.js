import kp_logo from './../images/kp_logo.png'

export default function SideNav() {
    return (
        <div className="sidenav">

            <div class="kenny">
                <img src={kp_logo} alt="" id="logo"/>
                <p id="name">Kenny Phan</p>
            </div>

            <ul>
                <li><a href="#home" class="nav-link">WELCOME</a></li>
                <li><a href="#aboutme" class="nav-link">ABOUT ME</a></li>
                <li><a href="#skills" class="nav-link">SKILLS</a></li>
                <li><a href="#projects" class="nav-link">PROJECTS</a></li>
                <li><a href="#contact" class="nav-link">CONTACT</a></li>
            </ul>

      </div>
    )
}
