import { Component } from "react";
import style from "./Home.module.css";

export default class Home extends Component {
    render () {
        return (
            <div className="content">
                <div className="title">
                    <h1 className="animate__animated animate__flipInX">Про меня</h1>
                </div>
                {/* <p className="subtitle">Привет! меня зовут Игорь я изучаю фронтенд, <br /> пишу музыку и увлекаюсь графикой.</p> */}
                <div className={`${style.content} animate__animated animate__fadeIn`}>
                <h2 className={style.title}>Привет!</h2>
                <img src="" alt="" />
                <section className={style.text}>Я Игорь, несколько лет назад меня увлек мир веб-разработки и с тех пор я изучаю всё что с ним связано. В 2020 году, я совершенно случайно узнал  про онлайн - курсы <a className="hyper-link" href="https://htmlacademy.ru/study"> Html Academy</a>  по верстке, где просидел пол ночи проходя бесплатные тренажеры это настолько сильно меня завлекло, что через некоторое время  я стал студентом
                    Где моим лекторами являлcя известный <a className="hyper-link" href="https://github.com/pepelsbey">Вадим Макеев</a>
                </section>
                <section className={style.text}>
                    <ol>
                        <li>В марте 2020 году успешно завершил профессиональный курс HTML и CSS, уровень 1 #27</li>
                        <li>В сентябре прошел курс HTML и CSS. Адаптивная вёрстка и автоматизация</li>
                        <li>В июле принял участие в курсе JavaScript. Профессиональная разработка веб-интерфейсов</li>
                    </ol>
                </section>

                <h2 className={style.title}>Что это ?</h2>
                <section className={style.text}>Это моя визитка здесь можно ознакомиться с моими навыками веб - разработки, увлечениями, интересами. Здесь я  собрал всё чем увлекаюсь. От написания кода, до дизайна логотипов, картинок, svg иконок и написания музыки. Это стандартное реакт приложение, в стадии разработки и дополнения. Оно будет дорабатываться по мере изучения этого фреймворка…</section>


                <h2 className={style.title}>Мои навыки</h2>

                <section className={style.text}>
                    <h3 className={`${style.technologyTitle} ${style.css}`}>
                        <span className={style.techTag}>#technology</span>
                        <span>CSS:</span>    
                    </h3>
                    <ol>
                        <li>
                            <h4>
                                <strong>Flex-box: </strong> технология создания макро и микро сеток!
                            </h4>
                            <code>display: flex;</code> 
                            <code>flex-direction: row;</code>
                            <code>flex-grow: 1;</code> ...
                        </li>

                        <li>
                            <h4>
                                <strong>Grid: </strong>
                            </h4>
                             <b>Мощьнейшая!!!</b>  технология создания макро и микро сеток! 
                             <code>grid-template-areas</code> 
                             <code>grid-row: 1 / 4;</code> 
                             <code>grid-column: 2 /4;</code>
                        </li>

                        <li>
                            <h4>
                                <strong>БЭM: </strong> 
                            </h4>
                            строгое соответствие методологии:
                            <code>.block</code>
                            <code>.block__elem</code>
                            <code>.block--modificator</code>
                            <code>.block__elem--modificator</code>
                        </li>

                        <li>
                            <h4>
                                <strong>Mobile first: </strong>
                            </h4>
                            С начало верстка под мобильные устройства, потом планшеты и десктопы:
                            <code>@media(min-width: 320px)</code>
                            <code>@media(min-width: 768px)</code>
                            <code>@media(min-width: 1200px)</code>
                        </li>

                        <li>
                            <h4>
                                <strong>Новые фичи: </strong>
                            </h4>
                             Css постоянно развивается и поддерживается вследствии чего каждый раз  появляются новые свойства, потому постоянное изучение документаций, новых течений, подходов и свойств у меня это обязательно.<code>@container()</code>
                            <code>:is() и :where()</code> 
                            <code>color: hsl(50deg 100% 50% / .5);</code>
                        </li>

                        <li>
                            <h4>
                                <strong>Кроссбраузерность: </strong>
                            </h4>
                            Придерживаюсь кроссбраузерной вёрстки, так как разработчики не всегда выкатывают поддержку новых фич для своих браузеров. 
                            <h4>
                                <strong>Blink Chrome</strong>
                            </h4>
                            <h4>
                                <strong>WebKit Safari</strong> 
                            </h4>
                            <h4>
                                <strong>Gecko Firefox</strong>  
                            </h4>
                        </li>

                        <li>
                            <h4>
                                <strong>Препроцессоры</strong> 
                            </h4>
                            <strong>Sass, Less: </strong> Использую редко, но как инструменты весьма удобны для быстрого написания стилей.
                        </li>
                        <li><strong>Библиотеки</strong>Если в лом писать свои стили можно подключить библиотеку стилей например: <a className="hyper-link" href="https://bulma.io">Bulma</a></li>
                    </ol>
                </section>

                <section className={`${style.text} ${style.jsModifer}`}>
                    <h3 className={`${style.technologyTitle} ${style.js}`}>#JAVASCRIPT:</h3>
                    <ol>
                        <li>
                            <h4>
                                <strong>DOM: </strong>
                            </h4>
                             <code>getElementById(...)</code> <code>querySelectorAll(...)</code><code>classList.add(...)</code>и другие методы для изменения и минипулирования  DOM элементами. </li>
                        <li>
                            <h4>
                                <strong>Пользовательские события: </strong> 
                            </h4>
                            <code>addEventListener('click'...)</code>
                            <code>evt.curentTarget...</code>
                        </li>
                        <li>
                            <h4>
                                <strong>Devtools: </strong>
                            </h4>
                             <code>debugger;</code> дебагинг кода, поиск ошибок с помощью браузерных средств разработки.</li>
                        <li>
                            <h4>
                                <strong>Функци: </strong>
                            </h4>
                            <code> <i>function</i> someF() {}, () => {} return</code>аргументы, параметры, коллбэки,возращаемые значения, чисты функции, замыкания, области, видимости function expression ,function declaration и.т.д.</li>
                        <li>
                            <h4>
                                <strong>Цыклы, условия, операторы: </strong>
                            </h4>
                             <code>if(true) {} else, for(..)</code><code>switch case:, ?, :, & ||, &&</code></li>
                        <li>
                            <h4>
                                <strong>Массивы, объекты, классы: </strong>
                            </h4>
                            < code>const array = [...], new Object(),</code> <code>class Component extends...., this</code></li>
                        <li>
                            <h4>
                                <strong>Методы массивов</strong>
                            </h4>
                             <code>forEach(...)</code><code>map(...)</code><code>filter(...)</code><code>push(...)</code><code>slice(...)</code><code>shift(...)</code></li>
                        <li>
                            <h4>
                                <strong>ES6: </strong>модули, деструктуризация, стрелочные функции.
                            </h4>
                            <code> import module from "../../path"</code>
                            <code>const</code>
                            <code>let</code>
                        </li>
                    </ol>
                </section>

                <h2 className={style.title}>Ещё что?</h2>
                <section className={style.text}>
                    <h3 className={`${style.technologyTitle} ${style.nodejs}`}>#Nodejs:</h3>
                    <ol>
                        <li>
                            <h4>
                                <strong>NPM:</strong> Установка пакетов(модулей) для разработки, обновление, удаление 
                            </h4>
                            <code>npm install @some-module --save-dev</code>
                            <code>node -v</code>
                            <code>npx create-react-app myApp</code>
                        </li>
                        <li><strong>Package.json</strong>Контроль за проектом посредством package.json <code>"@some-module": "^1.3.2",</code></li>
                    </ol> 
                </section>

                <h2 className={style.title}>Ещё также!</h2>
                <section className={style.text}>
                    <h3 className={`${style.technologyTitle} ${style.git}`}>#Git:</h3>
                    <ol>
                        <li>
                            <h4>
                                <strong>Консольные команды: </strong>
                            </h4>
                            <code>git init</code>
                            <code>git checkout -b "newBranch"</code>
                            <code>git add src/../file.js</code>
                            <code>git commit -m "New commit"</code> 
                        </li>
                        <li>
                            <h4>
                                <strong>Github</strong>
                            </h4>
                            Создание репозиториев, удалёные ветки, локальные ветки
                            <code>git add remote ...</code>
                            <code>git push origin main</code>
                            <code>git fetch</code>
                        </li>
                    </ol>
                </section>
                </div>
            </div>    
        )
    }
}