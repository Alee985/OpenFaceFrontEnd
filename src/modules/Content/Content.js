import React from 'react';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';
import LiveView from '../LiveView/LiveView';

const Content = () => (
    <div className='flex flex-grow'>
        <span className='basis-1/4 bg-[#F9FAFB] border-x-2 border-[#E5E5E5]'>
            <LeftPanel />
        </span>
        <span className='basis-2/4 bg-[#F5F5F5]'>
            <LiveView />
        </span>
        <span className='basis-1/4 bg-[#F9FAFB] border-x-2 border-[#E5E5E5]'>
            <RightPanel />
        </span>
    </div>
);

export default Content;