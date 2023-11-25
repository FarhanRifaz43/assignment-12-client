import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';

const TabsComponent = () => {
    return (
        <div className="text-center md:w-[85%] mx-auto mb-10">
            <Tabs>
                <div className=' text-gray-400'>
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Our Packages</Tab>
                        <Tab>Tour Guides</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <TabOne></TabOne>
                </TabPanel>
                <TabPanel>
                    <TabTwo></TabTwo>
                </TabPanel>
                <TabPanel>
                    <TabThree></TabThree>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabsComponent;