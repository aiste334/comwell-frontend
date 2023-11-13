import { useEffect, useState } from "react"
import TabButton from "./TabButton"

const TabGroup = ({ children, className, showDivider = false }) => {

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

  if(!children.length) return

  return (
    <div className={className}>
      <div className='flex gap-1 flex-wrap py-2'>{renderTabButtons()}</div>

      { showDivider &&
        <hr className="h-px my-2 bg-gray-200 border-0"/>
      }
      {renderActiveTab()}
    </div>
  )
}

export default TabGroup