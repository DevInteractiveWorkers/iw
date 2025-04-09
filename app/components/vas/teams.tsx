"use client"
import { VA, Vas, vasTabs } from '@/app/content/vas';
import { CustomFlowbiteTheme, Tabs } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import VACard from './cards';
import { VAHandler } from '../lib/utils';

const customTabsTheme: CustomFlowbiteTheme["tabs"] = {
  "base": "flex flex-col gap-2",
  "tablist": {
    "base": "flex text-center",
    "styles": {
      "default": "flex-wrap border-b border-gray-200 dark:border-gray-700 gap-3 py-2 justify-between items-center",
      "underline": "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
      "pills": "flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
      "fullWidth": "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none font-medium shadow dark:divide-gray-700 dark:text-gray-400"
    },
    "tabitem": {
      "base": "flex items-center justify-center rounded-xl py-1 px-3 text-base md:text-2xl font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-cyan-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
      "styles": {
        "default": {
          "base": "rounded-xl",
          "active": {
            "on": "text-white bg-[#DD272D]",
            "off": "text-[#333333] hover:bg-gray-50 hover:text-gray-600"
          }
        },
        "underline": {
          "base": "rounded-t-lg",
          "active": {
            "on": "active rounded-t-lg border-b-2 border-cyan-600 text-cyan-600 dark:border-cyan-500 dark:text-cyan-500",
            "off": "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          }
        },
        "pills": {
          "base": "",
          "active": {
            "on": "rounded-lg bg-cyan-600 text-white",
            "off": "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          }
        },
        "fullWidth": {
          "base": "ml-0 flex w-full rounded-none first:ml-0",
          "active": {
            "on": "active rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
            "off": "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          }
        }
      },
      "icon": "mr-2 h-5 w-5"
    }
  },
  "tabitemcontainer": {
    "base": ""
  },
  "tabpanel": "py-3"
}

const VATeamCard = ({va, className}:{va:VA, className?:string})=>{
  return(
    <VACard className={`max-md:m-10 max-sm:m-0 col-span-2 md:col-span-1 ${className}`} imageSrc={`/vas/teams/${va.img}`} getInTouch>{va.position}</VACard>
  )
}

const Teams = () => {

  const VAs = new VAHandler(Vas)
  const [active, setActive] = useState<number>(-1)
  const [activeVas, setActiveVas] = useState<VA[]>(VAs.handler(-1, true))
  const [expanded, setExpanded] = useState<boolean>(true)

  useEffect(() => {
    setActiveVas(VAs.handler(active, expanded))
  }, [expanded])

  return (
    <div className='w-3/4 mx-auto my-4 md:my-16'>
      <h3 className='text-2xl md:text-4xl font-extrabold pb-1 mb-8 px-8 md:px-32 rounded-3xl text-[#DD272D] border-2 border-[#DD272D] mx-auto max-w-fit text-center bg-white'>Teams</h3>
      <Tabs aria-label="Default tabs" theme={customTabsTheme} onActiveTabChange={(e) => { setActiveVas(VAs.handler(e - 1, expanded)); setActive(e - 1) }}>
        {vasTabs.map((tab, i) =>
          <Tabs.Item key={tab.name} active={active === i ? true : false} title={tab.name}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-16 mt-16'>
              <div className='p-8 py-16 xl:py-32 flex flex-col items-center justify-center text-center gap-4 bg-[#DD272D] rounded-[66px] text-white col-span-2 we-build-bg'>
                <h4 className='text-xl sm:text-3xl md:text-6xl font-extrabold md:mb-4 max-w-fit'>Are you looking for a specific profession?</h4>
                <span className='font-normal text-base md:text-4xl'>We can build it for you</span>
              </div>
              <VATeamCard className='hidden md:block' va={activeVas[0]}/>
              {activeVas.map((va, i) => {
                if (i === 0) {
                  return <VATeamCard className='md:hidden block' key={va.position} va={va}/>
                }
                return <VATeamCard className='block' key={va.position} va={va}/>
              })}
            </div>
            <button className='p-4 bg-[#DD272D] uppercase text-white font-extrabold text-base md:text-xl rounded-xl block mx-auto w-fit my-4 md:my-8' onClick={(e) => setExpanded(!expanded)}>{expanded ? "See More" : "See Less"}</button>
          </Tabs.Item>
        )}
      </Tabs>
    </div>
  );
}

export default Teams