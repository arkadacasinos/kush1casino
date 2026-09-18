export default function Header() {
  return (
    <header className="kush-header">
      <div className="kush-wrap kush-header__bar">
        <a href="/" className="kush-brand" aria-label="Куш казино — на главную">
          <span className="kush-brand__mark" aria-hidden="true">
            K
          </span>
          <span>Куш</span>
        </a>

        <nav className="kush-nav" aria-label="Основная навигация">
          <a className="kush-nav__link" href="#online">
            Онлайн
          </a>
          <a className="kush-nav__link" href="#site">
            Сайт
          </a>
          <a className="kush-nav__link" href="#mirror">
            Зеркало
          </a>
          <a className="kush-nav__link" href="#play">
            Играть
          </a>
          <a className="kush-nav__link" href="#bonus">
            Бонусы
          </a>
          <a className="kush-nav__link" href="#faq">
            Вопросы
          </a>
        </nav>

        <a className="kush-action kush-action--solid kush-header__cta" href="#play">
          Играть
        </a>
      </div>
    </header>
  )
}
