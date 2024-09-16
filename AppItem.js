import './index.css'

const AppItem = props => {
  const {key, appName, imageUrl, category, selectedTabItem, inputItem} = props
  return (
    <li className="list-item">
      {category === selectedTabItem &&
      appName.toLowerCase().includes(inputItem.toLowerCase()) ? (
        <li className="card">
          <img
            src={imageUrl}
            className="image"
            alt={appName}
            value={category}
          />
          <p className="head" value={category}>
            {appName}
          </p>
        </li>
      ) : null}
    </li>
  )
}

export default AppItem
