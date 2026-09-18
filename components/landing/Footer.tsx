const tags = [
  'куш казино',
  'куш казино онлайн',
  'куш казино онлайн сайт',
  'куш казино зеркало',
  'куш казино зеркало рабочее',
  'куш казино играть',
  'куш казино бонусы',
  'куш казино слоты',
]

export default function Footer() {
  return (
    <footer className="kush-footer">
      <div className="kush-wrap">
        <div className="kush-footer__grid">
          <div>
            <p className="kush-footer__brand">Куш казино</p>
            <p className="kush-footer__note">
              Куш казино — онлайн-площадка для игры в слоты и настольные развлечения. Играйте
              ответственно и только на реальные средства, которые готовы потратить. Участие в
              азартных играх доступно только совершеннолетним пользователям.
            </p>
          </div>

          <div>
            <p className="kush-section__kicker">Поиск по сайту</p>
            <div className="kush-tags">
              {tags.map((tag) => (
                <a className="kush-tag" href="/" key={tag}>
                  #{tag.replace(/\s+/g, '')}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="kush-footer__bottom">
          <span>© {new Date().getFullYear()} Куш казино. Все права защищены.</span>
          <span>18+ Играйте ответственно</span>
        </div>
      </div>
    </footer>
  )
}
