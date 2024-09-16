import './index.css'

const TabItem = props => {
  const {key, tabId, displayText, changeTabItem, selectedTabItem} = props
  const changeItem = () => {
    changeTabItem(tabId)
  }
  return (
    <li className="list-item">
      {selectedTabItem === tabId ? (
        <li>
          <button className="head1" onClick={changeItem}>
            {displayText}
          </button>
          <hr className="hori-line1" />
        </li>
      ) : (
        <li>
          <button className="head2" onClick={changeItem}>
            {displayText}
          </button>
          <hr className="hori-line2" />
        </li>
      )}
    </li>
  )
}

export default TabItem
