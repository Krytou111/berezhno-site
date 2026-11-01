import { useState } from "react";
import "./App.css";

const materials = [
  ["01", "Техническая плёнка", "150–500 мкм", "Плёнка", "Для укрытия от пыли, грязи и брызг."],
  ["02", "Армированная плёнка", "120–300 мкм", "Плёнка", "Усиленный плёночный материал."],
  ["03", "Твёрдый картон", "1–3 мм", "Картон", "Дополнительный слой от загрязнений."],
  ["04", "Гофрокартон", "2,5–7 мм", "Картон", "Листовой материал с рельефной структурой."],
  ["05", "Оргалит", "2–6 мм", "Листовые материалы", "Жёсткий листовой слой для отдельных поверхностей."],
  ["06", "Обрешётка из OSB", "6–25 мм", "Листовые материалы", "Каркасная защита участков."],
  ["07", "Обрешётка из фанеры", "3–24 мм", "Листовые материалы", "Защитный каркас с листовой обшивкой."]
];

const systems = [
  ["01", "От загрязнений", "Для покраски, отделки и других работ.", ["Плёнка", "Фиксация по месту"]],
  ["02", "Комбинированная", "Сочетание нескольких защитных слоёв.", ["Плёнка", "Картон"]],
  ["03", "С жёстким экраном", "Для участков с риском механических воздействий.", ["Промежуточный слой", "Жёсткая обшивка"]]
];

function House() {
  return (
    <div className="house-stage house-stage-small">
      <svg className="house-svg" viewBox="0 0 620 420" role="img" aria-label="Двухэтажный частный дом">
        <defs>
          <linearGradient id="wallPaint" x2="1" y2="1">
            <stop stopColor="#eee9dc" />
            <stop offset="1" stopColor="#cfc9b9" />
          </linearGradient>
          <linearGradient id="roofPaint" x2="1" y2="1">
            <stop stopColor="#687365" />
            <stop offset="1" stopColor="#303b34" />
          </linearGradient>
        </defs>

        <circle cx="475" cy="105" r="80" fill="none" stroke="#c5c8ba" />
        <path d="M65 355H560" stroke="#a9aa9b" strokeWidth="2" />
        <path d="M85 355l65 0 22 30H65zM440 355h70l22 30H420z" fill="#c2beaf" />

        <path d="M120 160L305 48l190 112-17 19L305 83 137 179z" fill="url(#roofPaint)" />
        <path d="M150 165L305 83l165 82v188H150z" fill="url(#wallPaint)" stroke="#b9b3a5" strokeWidth="2" />
        <path d="M150 165L305 83l165 82" fill="none" stroke="#38443a" strokeWidth="8" />
        <path d="M305 85v268" stroke="#bcb5a6" strokeWidth="2" />

        <g fill="#819a98" stroke="#f6f1e5" strokeWidth="9">
          <rect x="185" y="190" width="72" height="65" />
          <rect x="350" y="190" width="72" height="65" />
          <rect x="185" y="275" width="72" height="61" />
          <rect x="350" y="275" width="72" height="61" />
        </g>

        <g stroke="#f6f1e5" strokeWidth="4">
          <path d="M221 190v65m-36-32h72M386 190v65m-36-32h72M221 275v61m-36-30h72M386 275v61m-36-30h72" />
        </g>

        <rect x="278" y="264" width="55" height="89" fill="#786b58" stroke="#eee8db" strokeWidth="7" />
        <circle cx="321" cy="309" r="3" fill="#e9d6a7" />
        <path d="M145 352h330v18H145z" fill="#77796c" />
        <path d="M285 370l-40 45h120l-40-45z" fill="#c4c0b1" stroke="#aaa796" />

        <g fill="#8b967e">
          <circle cx="90" cy="300" r="34" />
          <circle cx="105" cy="270" r="28" />
          <circle cx="525" cy="300" r="35" />
        </g>
        <g stroke="#9b927e" strokeWidth="2">
          <path d="M90 330v25M525 330v25" />
        </g>
      </svg>
    </div>
  );
}

function RiskDiagram() {
  return (
    <div className="risk-diagram">
      <svg viewBox="0 0 1120 650" role="img" aria-label="Двухэтажный дом с четырьмя повреждениями и увеличенными фрагментами">
        <defs>
          <linearGradient id="diagramWall" x2="1" y2="1">
            <stop stopColor="#eee9dc" />
            <stop offset="1" stopColor="#cbc4b4" />
          </linearGradient>
          <linearGradient id="diagramRoof" x2="1" y2="1">
            <stop stopColor="#687365" />
            <stop offset="1" stopColor="#303b34" />
          </linearGradient>
          <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0 0L6 3L0 6" fill="none" stroke="#7b846f" strokeWidth="1.2" />
          </marker>
        </defs>

        <text x="32" y="34" className="svg-kicker">ОБЪЕКТ / ДВУХЭТАЖНЫЙ ЧАСТНЫЙ ДОМ</text>
        <text x="1085" y="34" textAnchor="end" className="svg-kicker">СХЕМА ВОЗМОЖНЫХ ПОВРЕЖДЕНИЙ</text>

        <path d="M40 550H520" stroke="#c7c5b8" strokeWidth="2" />
        <path d="M70 550h100l28 30H55zM340 550h105l25 30H320z" fill="#d1cdbf" />

        {/* Двухэтажный дом */}
        <path d="M92 220L282 92l195 128-18 20L282 126 110 240z" fill="url(#diagramRoof)" stroke="#354137" strokeWidth="2" />
        <path d="M120 225L282 126l168 99v325H120z" fill="url(#diagramWall)" stroke="#b8b1a2" strokeWidth="2" />
        <path d="M282 127v423" stroke="#b7b09f" strokeWidth="2" />

        <g fill="#819a98" stroke="#f7f2e7" strokeWidth="10">
          <rect x="155" y="255" width="78" height="78" />
          <rect x="330" y="255" width="78" height="78" />
          <rect x="155" y="365" width="78" height="78" />
          <rect x="330" y="365" width="78" height="78" />
        </g>

        <g stroke="#f7f2e7" strokeWidth="4">
          <path d="M194 255v78m-39-39h78M369 255v78m-39-39h78M194 365v78m-39-39h78M369 365v78m-39-39h78" />
        </g>

        <rect x="254" y="430" width="58" height="120" fill="#786b58" stroke="#eee8db" strokeWidth="7" />
        <path d="M115 535h340v20H115z" fill="#77796c" />
        <path d="M280 555l-53 62h155l-53-62z" fill="#c7c2b4" stroke="#a9a493" strokeWidth="2" />

        {/* Повреждения на доме */}
        <path d="M194 172l13 9-7 11 16 9-10 13" stroke="#796d5b" strokeWidth="5" fill="none" />
        <path d="M340 273l12 9-9 12 13 10" stroke="#d7d9ce" strokeWidth="5" fill="none" />
        <path d="M145 537l15-6 12 8 13-7" stroke="#554f43" strokeWidth="5" fill="none" />
        <path d="M330 585l20-9 19 12 21-7" stroke="#786b58" strokeWidth="5" fill="none" />

        {/* Маркеры */}
        <g className="svg-marker">
          <circle cx="205" cy="188" r="16" /><text x="205" y="192">01</text>
          <circle cx="355" cy="294" r="16" /><text x="355" y="298">02</text>
          <circle cx="165" cy="538" r="16" /><text x="165" y="542">03</text>
          <circle cx="359" cy="587" r="16" /><text x="359" y="591">04</text>
        </g>

        {/* Стрелки от повреждений к увеличенным фрагментам */}
        <g fill="none" stroke="#7b846f" strokeWidth="2" markerEnd="url(#arrowHead)">
          <path d="M222 188C390 170 420 112 570 112" />
          <path d="M372 294C470 294 480 260 570 260" />
          <path d="M182 538C390 538 440 410 570 410" />
          <path d="M376 587C470 587 490 560 570 560" />
        </g>

        {/* Увеличенные повреждения */}
        <g>
          <rect x="590" y="55" width="490" height="118" rx="3" fill="#f8f7f2" stroke="#d6d4c8" />
          <text x="610" y="78" className="svg-kicker">01 / ФАСАД — СЛЕДЫ РАСТВОРА</text>
          <rect x="610" y="91" width="130" height="65" fill="#d8d1c2" />
          <path d="M610 110h130M610 130h130" stroke="#c2b9a7" strokeWidth="2" />
          <path d="M670 94c-15 12-4 18-17 26s-5 17 5 19 13-8 24-12 4-24-12-33z" fill="#817765" opacity=".85" />
          <text x="760" y="113" className="svg-detail-title">Пятна цементной смеси</text>
          <text x="760" y="135" className="svg-detail-copy">Загрязнение декоративного покрытия</text>

          <rect x="590" y="203" width="490" height="118" rx="3" fill="#f8f7f2" stroke="#d6d4c8" />
          <text x="610" y="226" className="svg-kicker">02 / ОКНО — ЗАГРЯЗНЕНИЕ СТЕКЛА</text>
          <rect x="610" y="239" width="130" height="65" fill="#819a98" stroke="#f2eee3" strokeWidth="9" />
          <path d="M675 239v65M610 271h130" stroke="#f2eee3" strokeWidth="4" />
          <path d="M620 250l15 7-6 10 19 7-4 16" stroke="#e5d7b6" strokeWidth="5" fill="none" />
          <text x="760" y="265" className="svg-detail-title">Брызги краски и раствора</text>
          <text x="760" y="287" className="svg-detail-copy">Следы на стекле и оконной раме</text>

          <rect x="590" y="351" width="490" height="118" rx="3" fill="#f8f7f2" stroke="#d6d4c8" />
          <text x="610" y="374" className="svg-kicker">03 / ЦОКОЛЬ — СКОЛЫ ПОКРЫТИЯ</text>
          <rect x="610" y="387" width="130" height="65" fill="#888879" />
          <path d="M610 405h130" stroke="#bdb9aa" strokeWidth="4" />
          <path d="M672 405l17 7-9 9 14 8-17 18-16-15z" fill="#eee9dc" stroke="#5e5b50" strokeWidth="2" />
          <text x="760" y="413" className="svg-detail-title">Сколы и потёртости</text>
          <text x="760" y="435" className="svg-detail-copy">Повреждение нижней части фасада</text>

          <rect x="590" y="499" width="490" height="118" rx="3" fill="#f8f7f2" stroke="#d6d4c8" />
          <text x="610" y="522" className="svg-kicker">04 / ДОРОЖКА — СЛЕДЫ РАБОТ</text>
          <rect x="610" y="535" width="130" height="65" fill="#c9c5b7" />
          <path d="M610 556h130M654 535v65M698 535v65" stroke="#a8a493" strokeWidth="2" />
          <path d="M625 555c20-15 30 9 49 1s27 11 48 2" stroke="#746a58" strokeWidth="8" opacity=".65" fill="none" />
          <text x="760" y="561" className="svg-detail-title">Загрязнения и царапины</text>
          <text x="760" y="583" className="svg-detail-copy">Следы на плитке и мощении</text>
        </g>
      </svg>
    </div>
  );
}

export default function App() {
  const [filter, setFilter] = useState("Все");
  const [menu, setMenu] = useState(false);

  const list = filter === "Все"
    ? materials
    : materials.filter(x => x[3] === filter);

  return (
    <div className="site-shell" id="home">
      <header className="header">
        <a className="brand" href="#home">
          <b className="logo">Б.</b>
          <span>
            <strong>БЕРЕЖНО</strong>
            <small>ЗАЩИТА ЧАСТНОГО ДОМА</small>
          </span>
        </a>

        <button className="menu-toggle" onClick={() => setMenu(!menu)}>
          {menu ? "Закрыть −" : "Меню +"}
        </button>

        <nav className={menu ? "nav open" : "nav"} onClick={() => setMenu(false)}>
          <a href="#approach">Подход</a>
          <a href="#risks">Риски</a>
          <a href="#materials">Материалы</a>
          <a href="#process">Этапы работы</a>
        </nav>

        <a className="header-cta" href="#contacts">Обсудить объект ↗</a>
      </header>

      <main>
        <section className="hero">
          <div>
            <div className="eyebrow">● МОСКВА И МОСКОВСКАЯ ОБЛАСТЬ</div>
            <small className="kicker">ЗАЩИТА ЧАСТНОЙ НЕДВИЖИМОСТИ</small>
            <h1>Стройка рядом.<br /><em>Дом под защитой.</em></h1>
            <p className="lead">
              Продуманное укрытие фасада, окон, дверей и территории перед строительными и отделочными работами.
            </p>
            <div className="actions">
              <a className="button dark" href="#contacts">Обсудить защиту ↗</a>
              <a className="under" href="#risks">Посмотреть риски ↓</a>
            </div>
            <div className="hero-note">
              01　Сначала изучаем объект.<br />
              　　 Затем подбираем материалы.
            </div>
          </div>

          <div>
            <House />
            <p className="visual-caption">
              АРХИТЕКТУРНАЯ СХЕМА ОБЪЕКТА
              <span>МОСКВА / МО</span>
            </p>
          </div>
        </section>

        <section className="intro section" id="approach">
          <label>01 / НАШ ПОДХОД</label>
          <div className="two">
            <h2>Сохранить готовое.<br /><em>Спокойно строить дальше.</em></h2>
            <div>
              <p>
                Даже если работы ведутся рядом, под угрозой могут оказаться фасад, окна, двери, цоколь и благоустройство. Мы помогаем подобрать временную защиту с учётом поверхности, вида работ и условий на участке.
              </p>
              <small>Состав и способ крепления согласуются отдельно для каждого объекта.</small>
              <p><a className="under" href="#materials">Изучить материалы ↘</a></p>
            </div>
          </div>
        </section>

        <section className="risk-section section" id="risks">
          <div className="section-head">
            <div>
              <label>02 / ВОЗМОЖНЫЕ ПОВРЕЖДЕНИЯ</label>
              <h2>У разных работ —<br /><em>разные риски.</em></h2>
            </div>
            <p>На схеме отмечены зоны, которые могут пострадать во время строительных и отделочных работ.</p>
          </div>

          <RiskDiagram />

          <p className="fine">
            Схема показывает примеры повреждений, которые могут возникнуть во время строительных и отделочных работ.
          </p>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <label>03 / ЗОНЫ ЗАЩИТЫ</label>
              <h2>Не только фасад.<br /><em>Весь участок вокруг.</em></h2>
            </div>
            <p>Продумываем защиту поверхностей, которые находятся в зоне строительных работ.</p>
          </div>

          <div className="zones">
            {[
              ["Фасад", "Отделка и декоративные покрытия", "▤"],
              ["Окна", "Стекло, рамы и откосы", "▥"],
              ["Двери", "Полотно, коробка и фурнитура", "▯"],
              ["Цоколь", "Нижняя часть фасада", "▰"],
              ["Отмостка", "Поверхности вокруг дома", "▦"],
              ["Дорожки", "Плитка и мощение участка", "⌁"]
            ].map((z, i) => (
              <article key={z[0]}>
                <small>0{i + 1}</small>
                <div>{z[2]}</div>
                <h3>{z[0]}</h3>
                <p>{z[1]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="materials section" id="materials">
          <div className="section-head">
            <div>
              <label>04 / МАТЕРИАЛЫ</label>
              <h2>Подбираем не по шаблону.<br /><em>Под задачу.</em></h2>
            </div>
            <p>От плёночного укрытия до жёсткой листовой обшивки.</p>
          </div>

          <div className="filters">
            {["Все", "Плёнка", "Картон", "Листовые материалы"].map(x => (
              <button
                className={filter === x ? "selected" : ""}
                onClick={() => setFilter(x)}
                key={x}
              >
                {x}
              </button>
            ))}
          </div>

          <div className="materials-grid">
            {list.map(m => (
              <article key={m[0]}>
                <div className="meta">{m[0]}<span>{m[3]}</span></div>
                <div className={"material-art a" + m[0]}>
                  <i />
                  <b />
                  <small>ОБРАЗЕЦ / СХЕМА</small>
                </div>
                <h3>{m[1]}</h3>
                <strong>{m[2]}</strong>
                <p>{m[4]}</p>
              </article>
            ))}
          </div>

          <p className="fine align-right">
            Фактические свойства, совместимость с поверхностью и способ монтажа уточняются при подборе решения.
          </p>
        </section>

        <section className="section">
          <label>05 / ВАРИАНТЫ СИСТЕМ</label>
          <div className="two systems-heading">
            <h2>Слои работают<br /><em>как единое решение.</em></h2>
            <p>
              Материалы можно комбинировать в зависимости от задачи. Это концептуальные примеры, а не универсальная спецификация.
            </p>
          </div>

          <div className="systems">
            {systems.map(s => (
              <article key={s[0]}>
                <div className="meta">{s[0]}<span>СХЕМА СЛОЁВ ↗</span></div>
                <div className="layers"><i /><i /><i /></div>
                <h3>{s[1]}</h3>
                <p>{s[2]}</p>
                <div className="chips">
                  {s[3].map(x => <span key={x}>{x}</span>)}
                </div>
              </article>
            ))}
          </div>

          <div className="note">
            <b>＋</b>
            <span>
              <strong>Универсальной схемы нет</strong>
              <small>Подбор зависит от условий, типа поверхности, характера работ и бюджета.</small>
            </span>
          </div>
        </section>

        <section className="section" id="process">
          <div className="section-head">
            <div>
              <label>06 / ЭТАПЫ РАБОТЫ</label>
              <h2>Понятный процесс.<br /><em>До начала стройки.</em></h2>
            </div>
            <p>Согласуем решение заранее, чтобы объём работ и материалы были понятны до монтажа.</p>
          </div>

          <div className="process">
            {[
              ["01", "Изучаем объект", "Уточняем, какие зоны нужно закрыть и какие работы планируются."],
              ["02", "Подбираем материалы", "Обсуждаем подходящие материалы и сочетания слоёв."],
              ["03", "Согласуем решение", "Фиксируем объём защиты, комплектацию и бюджет."]
            ].map(x => (
              <div key={x[0]}>
                <span>{x[0]}</span>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
                <b>↗</b>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contacts">
          <div className="orbit" />
          <div>
            <label>07 / ОБСУДИМ ОБЪЕКТ</label>
            <h2>Начнём с вашей<br /><em>задачи.</em></h2>
            <p>
              Расскажите, какие строительные или отделочные работы планируются на участке. Обсудим возможные варианты защиты.
            </p>
            <a className="button light" href="tel:+79990000000">Позвонить нам ↗</a>
            <small>Временный номер — замените его на рабочий перед публикацией.</small>
          </div>
          <strong className="contact-mark">
            БЕРЕЖНО<br />К ДОМУ.<br />
            <span>ВНИМАТЕЛЬНО<br />К ДЕТАЛЯМ.</span>
          </strong>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">
          <b className="logo">Б.</b>
          <span>
            <strong>БЕРЕЖНО</strong>
            <small>ЗАЩИТА ЧАСТНОГО ДОМА</small>
          </span>
        </a>
        <small>Защита частной недвижимости во время строительных работ</small>
        <a href="#home">Наверх ↑</a>
      </footer>
    </div>
  );
}