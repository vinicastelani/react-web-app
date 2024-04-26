import style from './style.module.scss'

export default function NavigationBar() {
  const { navigation } = style
  return (
    <div className={navigation}>
      <div>
        <p>react-web-app</p>
      </div>
    </div>
  )
}
