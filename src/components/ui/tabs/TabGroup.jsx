import { useEffect, useState } from "react"
import TabButton from "./TabButton"

const TabGroup = ({ children, className }) => {

  if(!children.length) return

  const tabs = children.filter(child => child.type.name === 'Tab')
  const defaultActiveTab = tabs.find(tab => tab.props.active) || 0

  const [activeTab, setActiveTab] = useState(defaultActiveTab)

  const renderTabButtons = () => {
    return tabs.map((tab, i) => {
      return <TabButton 
                key={tab.props.title}
                onClick={() => setActiveTab(i)} 
                isActive={i === activeTab}
              >
                {tab.props.title}
              </TabButton>
    })
  }

  const renderActiveTab = () => {
    return tabs[activeTab] || <span className="text-sm text-gray-600">No tab selected</span>
  }

  return (
    <div className={className}>
      <div className='flex gap-1 flex-wrap py-4'>{renderTabButtons()}</div>
      {renderActiveTab()}
    </div>
  )
}

export default TabGroup