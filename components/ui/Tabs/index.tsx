import { ITabContent } from "pages/admin/register";
import { TabContainer, TabContents, TabTitle, TabWrapper } from "./styles";

interface TabsProps {
  activeTab: number;
  onClickTab: (
    event: React.MouseEvent<HTMLElement>,
    tavValue: ITabContent
  ) => void;
  tabList: ITabContent[];
}

function Tabs({ activeTab, onClickTab, tabList }: TabsProps) {
  return (
    <TabContainer>
      <TabWrapper>
        {tabList.map((value, index) => {
          return (
            <TabTitle
              key={index}
              isActive={activeTab === value.id}
              onClick={(event) => onClickTab(event, value)}
            >
              {value.title}
            </TabTitle>
          );
        })}
      </TabWrapper>

      {/* NOTE: 탭내용 */}
      {tabList
        .filter((value) => value.id === activeTab)
        .map((value, index) => (
          <TabContents key={index}>{value.component}</TabContents>
        ))}
    </TabContainer>
  );
}

export default Tabs;
