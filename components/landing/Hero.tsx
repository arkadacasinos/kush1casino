export default function Hero() {
  return (
    <section className="kush-hero">
      <div className="kush-wrap kush-hero__grid">
        <div className="kush-hero__body">
          <span className="kush-hero__eyebrow">Официальный сайт</span>
          <h1 className="kush-hero__title">
            Куш казино — играй онлайн и лови свой <em>куш</em>
          </h1>
          <p className="kush-hero__lead">
            Куш казино открывает двери каждому, кто хочет испытать удачу в честной игре. Здесь собраны
            сотни слотов, настольные развлечения и щедрые бонусы для новых игроков. Регистрация занимает
            пару минут, а первый выигрыш может прийти уже сегодня.
          </p>
          <p className="kush-hero__lead">
            Мы сделали ставку на простоту и честность: понятный интерфейс, быстрые выплаты и
            круглосуточная поддержка. Куш казино подходит и новичкам, которые только знакомятся с
            миром слотов, и опытным игрокам, ищущим крупные джекпоты и живое казино.
          </p>
          <div className="kush-hero__actions">
            <a className="kush-action kush-action--solid" href="#play">
              Начать играть
            </a>
            <a className="kush-action kush-action--line" href="#bonus">
              Смотреть бонусы
            </a>
          </div>
        </div>

        <div className="kush-hero__media">
          <img
            src="/kush-hero.png"
            alt="Куш казино — золотые монеты и карты на игровом столе"
            width={1024}
            height={768}
            fetchPriority="high"
          />
          <span className="kush-hero__badge">Щедрые бонусы для новичков</span>
        </div>
      </div>
    </section>
  )
}
