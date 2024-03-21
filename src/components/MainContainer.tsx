"use client"

import { useEffect, useState } from "react"
import nasPic from "../../public/icon/NAS.svg"
import openWrtPic from "../../public/icon/OpenWrt.svg"
import pvePic from "../../public/icon/iocn_proxmox_logo.svg"
import embyPic from "../../public/icon/emby.svg"
import xiaoyaPic from "../../public/icon/xiaoya.png"
import photosPic from "../../public/icon/photos.png"
import nastoolPic from "../../public/icon/nastool.png"
import qbittorrentPic from "../../public/icon/qbittorrent.svg"
import jacketPic from "../../public/icon/jackett.svg"
import syncPic from "../../public/icon/sync.svg"
import ddnsPic from "../../public/icon/ddns.svg"
import homePic from "../../public/icon/HomeAssistant.svg"
import Button from "./Button"

export const MainContainer = () => {
  const [data, setData] = useState<
    { name: string; icon: string; goto: string }[]
  >([])

  useEffect(() => {
    const homeData = [
      {
        name: "Nas",
        icon: nasPic,
        goto:
          window?.location?.protocol +
          "//" +
          window.location.hostname +
          ":5000",
      },
      {
        name: "OpenWrt",
        icon: openWrtPic,
        goto: `${window.location.protocol}//${window.location.hostname?.replace(
          ".68",
          ".1"
        )}`,
      },
      {
        name: "PVE",
        icon: pvePic,
        goto: `${window.location.protocol}//${window.location.hostname?.replace(
          ".68",
          ".11"
        )}:8006`,
      },
      {
        name: "nastool",
        icon: nastoolPic,
        goto: `${window.location.protocol}//${window.location.hostname}:3000`,
      },
      {
        name: "emby_local",
        icon: embyPic,
        goto: `${window.location.protocol}//${window.location.hostname}:8096`,
      },
      {
        name: "emby_third",
        icon: embyPic,
        goto: `${window.location.protocol}//${window.location.hostname}:2345`,
      },
      {
        name: "emby_xiaoya",
        icon: embyPic,
        goto: `${window.location.protocol}//${window.location.hostname}:6908`,
      },
      {
        name: "xiaoya",
        icon: xiaoyaPic,
        goto: `${window.location.protocol}//${window.location.hostname}:5678`,
      },
      {
        name: "Photos",
        icon: photosPic,
        goto: `${window.location.protocol}//${window.location.hostname}:5000/?launchApp=SYNO.Foto.AppInstance&SynoToken=`,
      },
      {
        name: "qBittorrent",
        icon: qbittorrentPic,
        goto: `${window.location.protocol}//${window.location.hostname}:8085`,
      },
      {
        name: "home assistant",
        icon: homePic,
        goto: `${window.location.protocol}//${window.location.hostname}:8123`,
      },
      {
        name: "jackett",
        icon: jacketPic,
        goto: `${window.location.protocol}//${window.location.hostname}:9117`,
      },
      {
        name: "resilio",
        icon: syncPic,
        goto: `${window.location.protocol}//${window.location.hostname}:8888`,
      },
      {
        name: "ddns-go",
        icon: ddnsPic,
        goto: `${window.location.protocol}//${window.location.hostname}:9876`,
      },
    ]

    setData(homeData)
  }, [])

  return (
    <div className='w-full lg:px-[15%] flex flex-col justify-center items-center pt-[75px] pb-[15%] mx-auto z-10 overflow-auto'>
      <div className='flex flex-col w-full'>
        <p className='text-xl font-bold'>{"APP"}</p>
        <div className='mt-4 flex flex-row flex-wrap gap-4 justify-start'>
          {data?.map((item: any, index: number) => {
            return (
              <Button
                key={index}
                title={item.name}
                icon={item.icon}
                onPress={() => {
                  window.open(item?.goto)
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
