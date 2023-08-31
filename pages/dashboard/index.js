import styles from "@/components/DashboardData/Tabs/TabStyles.module.scss"
import TabTitle from "@/components/DashboardData/Tabs/TabTitle"
import { TabsData } from "@/components/DashboardData/Tabs/TabsData"
import { useState } from "react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("tab1")

  return (
    <main className={`${styles.dashboard} flex flex-col `}>
      <section className=" flex flex-col md:flex-row justify-between">
        <article className={`${styles.tabs} `}>
          <section
            className={`${styles.tabTitleContainer} flex flex-col  justify-between`}
          >
            {TabsData[0].TabTitle.map((tab) => (
              <section key={tab.id} className={`${styles.tabTitle} `}>
                <TabTitle
                  id={tab.id}
                  title={tab.title.map((item) => item.name)}
                  options={tab.title.map((item) =>
                    item.dropdown.map((ud) => ud.select)
                  )}
                  icon={tab.icon}
                  styles={styles}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </section>
            ))}
          </section>
        </article>
        <aside className={`${styles.tabContents} flex flex-col md:flex-row `}>
          {/* {TabsData[0].TabContents.map((tab) => (
            <section key={tab.id} className={`${styles.tabContents} `}>
              <TabContents
                id={tab.id}
                styles={styles}
                activeTab={activeTab}
                comps={tab.comp}
              />
            </section>
          ))} */}
        </aside>
      </section>
    </main>
  )
}
