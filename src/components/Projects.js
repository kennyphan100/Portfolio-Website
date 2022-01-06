import sorting_algorithm_visualizer from './../images/sorting.png';
import ecommerce from './../images/ecommerce.png'
import task_tracker from './../images/task_tracker.png';
import sudoku from './../images/sudoku.png';
import tictactoe from './../images/tic-tac-toe.png';
import breakout_ball from './../images/breakout_ball.png';
import flappybird from './../images/flappybird.png';
import covid19_tracker from './../images/covid19_tracker.png';
import cli_commands from './../images/cli_commands.png';

export default function Projects() {
    return (
        <div className='section' id='projects' data-label='projects2' data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">

            <h2 className='title'>Projects</h2>
            
            <div class="container">
                <div className="row">
                    
                    <div className="col-4">
                        <div className="card medium">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img src={sorting_algorithm_visualizer} alt="" />
                            </div>
                            <div class="card-content">
                                <div class="project_title">Sorting Algorithms Visualizer</div>
                                <p class="links">
                                    <a href="https://github.com/kennyphan100/Sorting-Algorithms-Visualizer" target="_blank" rel="noreferrer">GitHub</a>
                                    <span> | </span>
                                    <a href="https://kennyphan100.github.io/Sorting-Algorithms-Visualizer/" target="_blank" rel="noreferrer"> Website</a>
                                </p>
                                <p class="technologies">Technologies: React.js, JavaScript, HTML5, CSS3</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card medium">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img src={ecommerce} alt="" />
                            </div>
                            <div class="card-content">
                                <div class="project_title">E-Commerce Website</div>
                                <p class="links">
                                    <a href="https://github.com/kennyphan100/Online-Grocery-Store" target="_blank" rel="noreferrer">GitHub</a>
                                    <span> | </span>
                                    <a href="https://online-grocery-store-cloud.herokuapp.com/" target="_blank" rel="noreferrer"> Website</a>
                                </p>
                                <p class="technologies">Technologies: PHP, JavaScript, MySQL, HTML5, CSS3,</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card medium">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img src={cli_commands} alt="" />
                            </div>
                            <div class="card-content">
                                <div class="project_title">CLI Commands REST API.</div>
                                <p class="links">
                                    <a href="https://github.com/kennyphan100/CLI-Commands" target="_blank" rel="noreferrer">GitHub</a>
                                </p>
                                <p class="technologies">Technologies: ASP.NET Core Web API, C#, Postman, Docker </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card medium">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img src={task_tracker} alt="" />
                            </div>
                            <div class="card-content">
                                <div class="project_title">Task Tracker</div>
                                <p class="links">
                                    <a href="https://github.com/kennyphan100/Task-Tracker" target="_blank" rel="noreferrer">GitHub</a>
                                    <span> | </span>
                                    <a href="https://kennyphan100.github.io/Task-Tracker/" target="_blank" rel="noreferrer"> Website</a>
                                </p>
                                <p class="technologies">Technologies: React.js, JavaScript, HTML5, CSS3 </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card medium">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img src={covid19_tracker} alt="" />
                            </div>
                            <div class="card-content">
                                <div class="project_title">COVID-19 Tracker</div>
                                <p class="links">
                                    <a href="https://github.com/kennyphan100/COVID-19-Tracker" target="_blank" rel="noreferrer">GitHub</a>
                                </p>
                                <p class="technologies">Technologies: Java, Spring Boot, HTML5  </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-4">
                        <div className="card medium">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img src={sudoku} alt="" />
                            </div>
                            <div class="card-content">
                                <div class="project_title">Sudoku</div>
                                <p class="links">
                                    <a href="https://github.com/kennyphan100/Sudoku" target="_blank" rel="noreferrer">GitHub</a>
                                </p>
                                <p class="technologies">Technologies: Java, Swing </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card medium">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img src={tictactoe} alt="" />
                            </div>
                            <div class="card-content">
                                <div class="project_title">Tic-Tac-Toe</div>
                                <p class="links">
                                    <a href="https://github.com/kennyphan100/Tic-Tac-Toe" target="_blank" rel="noreferrer">GitHub</a>
                                </p>
                                <p class="technologies">Technologies: Java, Swing</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card medium">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img src={breakout_ball} alt="" />
                            </div>
                            <div class="card-content">
                                <div class="project_title">Breakout Ball</div>
                                <p class="links">
                                    <a href="https://github.com/kennyphan100/Breakout-Game" target="_blank" rel="noreferrer">GitHub</a>
                                </p>
                                <p class="technologies">Technologies: Java, Swing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card medium">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img src={flappybird} alt="" />
                            </div>
                            <div class="card-content">
                                <div class="project_title">Flappy Bird</div>
                                <p class="links">
                                    <a href="https://github.com/kennyphan100/Flappy-Bird" target="_blank" rel="noreferrer">GitHub</a>
                                </p>
                                <p class="technologies">Technologies: Java, Swing</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
