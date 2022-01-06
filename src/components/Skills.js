
import java from './../images/java.png';
import js from './../images/js.png';
import php from './../images/php.png';
import csharp from './../images/c#.png';
import sql from './../images/sql.png';
import python from './../images/python.png';
import html5 from './../images/html.png';
import css3 from './../images/css3.png';
import git from './../images/git.png';
import linux from './../images/linux.jpg';
import react from './../images/react.png';
import vs from './../images/vs.png';
import vscode from './../images/vscode.jpg';
import github from './../images/github.png';
import jira from './../images/jira.png';
import intellij from './../images/intellij.jpg';
import phpstorm from './../images/phpstorm.png';
import net from './../images/.net.png';
import docker from './../images/docker.png';

export default function Skills() {
    return (
        <div className='section' id='skills' data-label='skills' data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
            <h2 className='title'>Skills</h2>

            <div class="container">
                <div class="card">
                    <div class="card-content">
                        <h4>PROGRAMMING LANGUAGES</h4>
                        <div class="row text-center">
                            <div class="col s4 m2">
                                <img src={java} alt="Java" />
                                <p>Java</p>
                            </div>
                            <div class="col s4 m2">
                                <img src={js} alt="JavaScript" />
                                <p>JavaScript</p>
                            </div>
                            <div class="col s4 m2">
                                <img src={php} alt="PHP" />
                                <p>PHP</p>
                            </div>
                            <div class="col s4 m2">
                                <img src={csharp} alt="C#" />
                                <p>C#</p>
                            </div>
                            <div class="col s4 m2">
                                <img src={python} alt="Python" />
                                <p>Python</p>
                            </div>
                            <div class="col s4 m2">
                                <img src={sql} alt="SQL" />
                                <p>SQL</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-content">
                        <h4>TECHNOLOGIES</h4>
                        <div class="row text-center">
                            <div class="col s4 m2">
                                <img src={html5} alt="HTML5" />
                                <p>HTML5</p>
                            </div>
                            <div class="col s4 m2">
                                <img src={css3} alt="CSS3" />
                                <p>CSS3</p>
                            </div>
                            <div class="col s4 m2">
                                <img src={git} alt="Git" />
                                <p>Git</p>
                            </div>
                            <div class="col s4 m2">
                                <img src={linux} alt="Linux" />
                                <p>Linux</p>
                            </div>
                            <div class="col s4 m2">
                                <img src={react} alt="React" />
                                <p>React.js</p>
                            </div>
                            <div class="col s4 m2">
                                <img src={net} alt=".NET" />
                                <p>.NET</p>
                            </div>
                            <div class="col s4 m2">
                                <img src={docker} alt="Docker" />
                                <p>Docker</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-content">
                        <h4>TOOLS</h4>
                        <div class="row text-center">
                            <div class="col s4 m2">
                                <img src={vs} alt="Visual Studio" />
                                <p>Visual Studio</p>
                            </div>
                            <div class="col s4 m2">
                                <img src={vscode} alt="Visual Studio Code" />
                                <p>Visual Studio Code</p>
                            </div>
                            <div class="col s4 m2">
                                <img src={jira} alt="Jira" />
                                <p>Jira</p>
                            </div>
                            <div class="col s4 m2">
                                <img src={github} alt="GitHub" />
                                <p>GitHub</p>
                            </div>
                            <div class="col s4 m2">
                                <img src={intellij} alt="IntelliJ" />
                                <p>IntelliJ</p>
                            </div>
                            <div class="col s4 m2">
                                <img src={phpstorm} alt="PHPStorm" />
                                <p>PHPStorm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
