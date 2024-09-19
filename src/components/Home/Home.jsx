import { Component } from "react";
import style from "./Home.module.css";

export default class Home extends Component {
    render () {
        return (
            <div className="content">
                <div className="title">
                    <h1 className="animate__animated animate__flipInX">Обо мне</h1>
                </div>
                {/* <p className="subtitle">Привет! меня зовут Игорь я изучаю фронтенд, <br /> пишу музыку и увлекаюсь графикой.</p> */}
                <div className={`${style.content} animate__animated animate__fadeIn`}>
                <h2 className={style.title}>Кто я ?</h2>
                <img src="" alt="" />
                <p className={style.text}>Привет меня зовут Игорь несколько лет назад меня увлек мир веб-разработки и с тех пор я изучаю всё что с ним связано. В 2020 году, я совершенно случайно узнал  про онлайн - курсы <a className="hyper-link" href="https://htmlacademy.ru/study"> Html Academy</a>  по верстке, где просидел пол ночи проходя бесплатные тренажеры это настолько сильно меня завлекло, что через некоторое время  я стал студентом  
                    Где моим лекторами являлcя известный <a className="hyper-link" href="https://github.com/pepelsbey">Ваидм Макеев</a>
                </p>
                <p className={style.text}>
                    <ol>
                        <li>В марте 2020 году успешно завершил профессиональный курс HTML и CSS, уровень 1 #27</li>
                        <li>В сентябре прошел курс HTML и CSS. Адаптивная вёрстка и автоматизация</li>
                        <li>В июле принял участие в курсе JavaScript. Профессиональная разработка веб-интерфейсов</li>
                    </ol>
                </p>

                <h2 className={style.title}>Что это ?</h2>
                <p className={style.text}>Это моя визитка здесь можно ознакомится с моими навыками веб - разработки, увлечениями, интересами. Здесь я  собрал всё чем увлекаюсь. От написания кода, до рисования svg иконок и написания музыки. Это стандартное реакт приложение, в стадии разработки и дополнения. Оно будет дорабатываться по мере изучения этого фреймворка…</p>


                <h2 className={style.title}>Мои навыки</h2>

                <p className={style.text}>
                    <span className={style.css}>#CSS:</span>
                    <ol>
                        <li>
                            <strong>Flex-box: </strong> технология создания макро и микро сеток!
                            <code>display: flex;</code> 
                            <code>flex-direction: row;</code>
                            <code>flex-grow: 1;</code> ...
                        </li>

                        <li>
                            <strong>Grid: </strong>
                             <b>Мощьнейшая!!!</b>  технология создания макро и микро сеток! 
                             <code>grid-template-areas</code> 
                             <code>grid-row: 1 / 4;</code> 
                             <code>grid-column: 2 /4;</code>
                        </li>

                        <li>
                            <strong>БЭM: </strong> 
                            строгое соответствие методологии:
                            <code>.block</code>
                            <code>.block__elem</code>
                            <code>.block--modificator</code>
                            <code>.block__elem--modificator</code>
                        </li>

                        <li>
                            <strong>Mobile first: </strong>
                            С начало верстка под мобильные устройства, потом планшеты и десктопы:
                            <code>@media(min-width: 320px)</code>
                            <code>@media(min-width: 768px)</code>
                            <code>@media(min-width: 1200px)</code>
                        </li>

                        <li>
                            <strong>Новые фичи: </strong>
                             Css постоянно развивается и поддерживается вследствии чего каждый раз  появляются новые свойства, потому постоянное изучение доументаций, новых течений, подходов и свойств у меня это обязательно.<code>@container()</code>
                            <code>:is() и :where()</code> 
                            <code>color: hsl(50deg 100% 50% / .5);</code>
                        </li>

                        <li>
                            <strong>Кроссбраузерность: </strong>
                            Придерживаюсь кроссбраузерной вёрстки, так как разработчики не всегда выкатывают поддержку новых фич для своих браузеров. 
                            <strong>Blink Chrome</strong>
                            <strong>WebKit Safari</strong> 
                            <strong>Gecko Firefox</strong>  
                        </li>

                        <li>Имею опыт использования препроцессоров 
                            <strong>Sass, Less: </strong> Использую редко, но как инструменты весьма удобны для быстрого написания стилей.
                        </li>
                        <li><strong>Библиотеки</strong>Если в лом писать свои стили можно подключить библиотеку стилей например: <a className="hyper-link" href="https://bulma.io">Bulma</a></li>
                    </ol>
                </p>

                <p className={`${style.text} ${style.jsModifer}`}>
                    <span className={style.js}>#JAVASCRIPT:</span>
                    <ol>
                        <li><strong>DOM: </strong> <code>getElementById(...)</code> <code>querySelectorAll(...)</code><code>classList.add(...)</code>и другие методы для изменения и минипулирования  DOM элементами. </li>
                        <li>
                            <strong>Пользовательские события: </strong> 
                            <code>addEventListener('click'...)</code>
                            <code>evt.curentTarget...</code>
                        </li>
                        <li><strong>Devtools: </strong> <code>debugger;</code> дебагинг кода, поиск ошибок с помощью браузерных средств разработки.</li>
                        <li><strong>Функци: </strong><code> <i>function</i> someF() {}, () => {} return</code>аргументы, параметры, коллбэки,возращаемые значения, чисты функции, замыкания, области, видимости function expression ,function declaration и.т.д.</li>
                        <li><strong>Цыклы, условия, операторы: </strong> <code>if(true) {} else, for(..)</code><code>switch case:, ?, :, & ||, &&</code></li>
                        <li><strong>Массивы, объекты, классы: </strong>< code>const array = [...], new Object(),</code> <code>class Component extends...., this</code></li>
                        <li><strong>Методы массивов</strong> <code>forEach(...)</code><code>map(...)</code><code>filter(...)</code><code>push(...)</code><code>slice(...)</code><code>shift(...)</code></li>
                        <li>
                            <strong>ES6: </strong>модули, деструктуризация, стрелочные функции.
                            <code> import module from "../../path"</code>
                            <code>const</code>
                            <code>let</code>
                        </li>
                    </ol>
                </p>

                <h2 className={style.title}>Ещё что?</h2>
                <p className={style.text}>
                    <span className={`${style.css} ${style.nodejs}`}>#Nodejs:</span>
                    <ol>
                        <li><strong>NPM:</strong> Установка пакетов(модулей) для разработки, обновление, удаление 
                            <code>npm install @some-module --save-dev</code>
                            <code>node -v</code>
                            <code>npx create-react-app myApp</code>
                        </li>
                        <li><strong>Package.json</strong>Контроль за проектом посредством package.json <code>"@some-module": "^1.3.2",</code></li>
                    </ol> 
                </p>

                <h2 className={style.title}>Ещё также!</h2>
                <p className={style.text}>
                    <span className={`${style.css} ${style.git}`}>#Git:</span>
                    <ol>
                        <li>
                            <strong>Консольные команды: </strong>
                            <code>git init</code>
                            <code>git checkout -b "newBranch"</code>
                            <code>git add src/../file.js</code>
                            <code>git commit -m "New commit"</code> 
                        </li>
                        <li>
                            <strong>Github</strong>
                            Создание репозиториев, удалёные ветки, локальные ветки
                            <code>git add remote ...</code>
                            <code>git push origin main</code>
                            <code>git fetch</code>
                        </li>
                    </ol>
                </p>


                </div>
            </div>    
        )
    }
}