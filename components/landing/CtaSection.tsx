export default function CtaSection() {
  return (
    <section className="kush-section">
      <div className="kush-wrap">
        <div className="kush-tile" style={{ textAlign: 'center', padding: '40px 24px' }}>
          <span className="kush-section__kicker">Готовы испытать удачу?</span>
          <h2 className="kush-section__title">Начните играть в Куш казино прямо сейчас</h2>
          <p className="kush-section__lead" style={{ marginInline: 'auto', maxWidth: '36rem' }}>
            Регистрация занимает пару минут, а щедрый приветственный бонус уже ждёт вас. Присоединяйтесь
            к Куш казино и ловите свой куш уже сегодня — удача любит смелых.
          </p>
          <div className="kush-hero__actions" style={{ justifyContent: 'center', marginTop: '24px' }}>
            <a className="kush-action kush-action--solid" href="#play">
              Начать играть
            </a>
            <a className="kush-action kush-action--line" href="#bonus">
              Узнать о бонусах
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
