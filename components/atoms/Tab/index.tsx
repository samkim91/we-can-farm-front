import React, { useState } from "react";
import { useCallback } from "react";
import { TabWrapper, TabTitle, TabContainer, TabContents } from "./styles";

interface TabProps {
  children: JSX.Element[];
}

function Tab({ children }: TabProps) {
  const defaultActiveTab = children[0].props.title;
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const onClickTab = useCallback(
    (e: React.MouseEvent<HTMLElement>, anotherTab: string) => {
      e.preventDefault();
      setActiveTab(anotherTab);
    },
    [activeTab]
  );

  return (
    <TabContainer>
      <TabWrapper>
        {children.map((tab) => {
          const tabTitle = tab.props.title;
          return (
            <TabTitle
              key={tabTitle}
              isActive={tabTitle === activeTab}
              onClick={(e) => onClickTab(e, tabTitle)}
            >
              {tabTitle}
            </TabTitle>
          );
        })}
      </TabWrapper>

      {/* NOTE: 탭내용 */}
      {children.map((tab) => {
        const tabTitle = tab.props.title;
        return (
          tabTitle === activeTab && (
            <TabContents key={tabTitle}>{tab.props.children}</TabContents>
          )
        );
      })}
    </TabContainer>
  );
}

export default Tab;
