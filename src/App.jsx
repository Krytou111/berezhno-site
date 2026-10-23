
import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  ShieldCheck,
  Layers3,
  Trees,
  Check,
  Phone,
} from 'lucide-react'
import './App.css'

const PHONE = '+7 (999) 000-00-00'
const PHONE_LINK = 'tel:+79990000000'

const navItems = [
  { label: 'Решения', href: '#services' },
  { label: 'Наш подход', href: '#approach' },
  { label: 'Процесс', href: '#process' },
  { label: 'Контакты', href: '#contact' },
]

const services = [
  {
    number: '01',
    title: 'Камень и мощение',
    text: 'Защита дорожек, плитки, ступеней и готовых покрытий.',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
    alt: 'Современная архитектура и каменные покрытия',
    icon: Layers3,
  },
  {
    number: '02',
    title: 'Фасады и архитектура',
    text: 'Сохранение отделки, входных групп и архитектурных элементов.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Современный частный дом с архитектурной отделкой',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Ландшафт и участок',
    text: 'Защита деревьев, газонов и благоустройства во время работ.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56c2?auto=format&fit=crop&w=1200&q=85',
    alt: 'Благоустроенная территория частного дома',
    icon: Trees,
  },
]

const steps = [
  {
    number: '01',
    title: 'Осмотр объекта',
    text: 'Изучаем территорию и определяем, что необходимо защитить.',
  },
  {
    number: '02',
    title: 'План защиты',
    text: 'Подбираем подходящие материалы и способы укрытия.',
  },
  {
    number: '03',
    title: 'Подготовка',
    text: 'Аккуратно защищаем покрытия, элементы дома и ландшафт.',
  },
  {
    number: '04',
    title: 'Контроль',
    text: 'Проверяем защиту перед началом строительных работ.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="На главную">
          <span className="brand-symbol">守</span>
          <span className="brand-copy">
            <strong>БЕРЕЖНО</strong>
            <small>ЗАЩИТА ТЕРРИТОРИЙ</small>
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-call mobile-call" href={PHONE_LINK}>
            Позвонить <Phone size={15} />
          </a>
        </nav>

        <a className="header-phone" href={PHONE_LINK}>
          <span>{PHONE}</span>
          <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90"
            alt="Современный частный дом в окружении ландшафта"
            fetchPriority="high"
          />
          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">
              МОСКВА · МОСКОВСКАЯ ОБЛАСТЬ
            </p>
            <h1>
              Сохраняем
              <br />
              то, что <em>создано.</em>
            </h1>
            <p className="hero-description">
              Профессиональная защита готовых покрытий, архитектуры и
              ландшафта на время строительства.
            </p>
            <a className="button button-light" href="#services">
              Наши решения <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="hero-bottom">
            <span>ЗАБОТА О ДЕТАЛЯХ — НА КАЖДОМ ЭТАПЕ</span>
            <a href="#approach" aria-label="Перейти к нашему подходу">
              <ArrowDown size={19} />
            </a>
            <span>01 / 04</span>
          </div>
        </section>

        <section className="intro section-pad" id="approach">
          <div className="section-label">
            <span>01</span>
            <span>НАШ ПОДХОД</span>
          </div>

          <div className="intro-content">
            <p className="eyebrow">ПРОДУМАННАЯ ЗАЩИТА ОБЪЕКТА</p>
            <h2>
              Строительство
              <br />
              не должно <em>портить</em>
              <br />
              результат.
            </h2>
            <div className="intro-bottom">
              <p>
                Укрываем и защищаем элементы участка, которые уже готовы и
                должны остаться в идеальном состоянии после завершения работ.
              </p>
              <a className="text-link" href="#process">
                Как мы работаем <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className="intro-stamp" aria-hidden="true">
            <span>守</span>
            <small>БЕРЕЖНО<br />К КАЖДОЙ ДЕТАЛИ</small>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ЧТО МЫ ЗАЩИЩАЕМ</p>
              <h2>Каждая поверхность<br /><em>имеет значение.</em></h2>
            </div>
            <p className="section-aside">
              Подбираем способ защиты под особенности объекта, материалы и
              характер предстоящих работ.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <article className="service-card" key={service.number}>
                  <div className="service-image">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                    />
                    <span className="service-number">{service.number}</span>
                    <span className="service-icon"><Icon size={18} /></span>
                  </div>
                  <div className="service-title">
                    <h3>{service.title}</h3>
                    <ArrowUpRight size={18} />
                  </div>
                  <p>{service.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="manifesto">
          <div className="manifesto-mark">守</div>
          <p className="eyebrow">НАШ ПРИНЦИП</p>
          <h2>
            Лучше предусмотреть,
            <br />
            чем <em>восстанавливать.</em>
          </h2>
          <p className="manifesto-text">
            Бережное отношение к готовому объекту начинается ещё до того,
            как на площадку заходит строительная бригада.
          </p>
          <div className="manifesto-rule" />
          <div className="manifesto-note">
            <Check size={16} />
            <span>ВНИМАНИЕ К МАТЕРИАЛАМ И ДЕТАЛЯМ</span>
          </div>
        </section>

        <section className="process section-pad" id="process">
          <div className="section-label">
            <span>02</span>
            <span>ПРОЦЕСС</span>
          </div>

          <div className="process-heading">
            <p className="eyebrow">ОТ ОСМОТРА ДО ЗАЩИТЫ</p>
            <h2>
              Чёткий план.
              <br />
              <em>Аккуратное исполнение.</em>
            </h2>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div className="step-line" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
              alt="Современная архитектура частного дома"
              loading="lazy"
            />
            <div className="contact-image-overlay" />
            <span className="contact-image-caption">
              ЗАЩИТА, ПРОДУМАННАЯ ДО МЕЛОЧЕЙ
            </span>
          </div>

          <div className="contact-content">
            <p className="eyebrow">ОБСУДИМ ВАШ ОБЪЕКТ</p>
            <h2>
              Сохраним
              <br />
              <em>результат.</em>
            </h2>
            <p>
              Расскажите о предстоящих работах — обсудим, какие элементы
              территории нуждаются в защите.
            </p>
            <a className="button button-dark" href={PHONE_LINK}>
              <Phone size={17} />
              Позвонить нам
              <ArrowUpRight size={17} />
            </a>
            <span className="contact-phone">{PHONE}</span>
            <span className="contact-location">
              МОСКВА И МОСКОВСКАЯ ОБЛАСТЬ
            </span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-symbol">守</span>
          <span className="brand-copy">
            <strong>БЕРЕЖНО</strong>
            <small>ЗАЩИТА ТЕРРИТОРИЙ</small>
          </span>
        </a>

        <span className="footer-note">
          Сохраняем готовое во время строительства.
        </span>

        <a className="footer-top" href="#home">
          НАВЕРХ <ArrowUpRight size={15} />
        </a>

        <span className="footer-copy">
          © {new Date().getFullYear()} БЕРЕЖНО
        </span>
      </footer>
    </div>
  )
}

export default App
