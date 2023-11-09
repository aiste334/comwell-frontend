import React from 'react'
import CheckboxSvg from "@/public/icons/checkbox.svg"
import BackArrowSvg from "@/public/icons/backarrow.svg"

import Image from "next/image"

function HotelCard({ name, city, onButtonClick, isSelected }) {

    const cardClassName = `input relative grid w-full grid-cols-3 outline hover:outline-slate-400 rounded-sm ${
        isSelected ? 'outline-slate-600' : 'outline-slate-200'
      } overflow-hidden items-center`;

    const SvgClassName = `${isSelected ? 'invisible': 'visible'}`

    return (
      <>
          <li className='px-3 list-none'>
              <button onClick={onButtonClick} type="button" className={cardClassName}>
                  <div className="col-span-1 h-full min-h-[66px] w-full aspect-[16/9]">
                      <div className="module-richMedia relative block h-full w-full overflow-hidden bg-gray-200">
                          <picture>
                              <source type="image/webp" srcset="https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/38bb73bdcdcf32eaf2ea784365185f2b.webp 38w, https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/9fa4ffa4c8214532d667d8962886997f.webp 288w, https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/440cb74dd0055ce88a6d8dcc116f88bb.webp 480w, https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/52b56634cbf11e6fdc426d6d00aa38e1.webp 768w, https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/385ec8fec0575deb5d0e286ff277016e.webp 960w, https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/cdfdd444c636fe691bf62e5d177df0b4.webp 1152w, https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/5682667017913394cb50d12b275b38af.webp 1440w, https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/d31f4207051463a622d5fec498b8db4c.webp 1632w, https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/859ab03af87a90cd1c52a9a945450b4c.webp 1920w"/>
                                  <source type="image/jpeg" srcset="https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/a1cb77019284d0b93b2dd2a74eed578f.jpg 38w, https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/7f6ad11ed932fe4c8dbc98605625d9da.jpg 288w, https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/907e58894f11cf3b1bf23cd378bc2134.jpg 480w, https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/00199514d19eb3073ef7a48d4a37cb6d.jpg 768w, https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/f7d1e85c1ea7b567562a22fc162fb5ff.jpg 960w, https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/da478ea8b53a74181dc17d01945bc496.jpg 1152w, https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/cf5373d18048a33e47eee2e1f2bf4fc9.jpg 1440w, https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/0b5aad64f6f2b66b8af44df0aefe1554.jpg 1632w, https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/70ca15dad4f16b8b4bdc0b44a81bd9b7.jpg 1920w"/>
                                  <img src="https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cbo/udendoers/comwell-borupgaard-ude-03.jpg/a1cb77019284d0b93b2dd2a74eed578f.jpg" className="h-full w-full object-cover" alt="" width="38" height="31" decoding="sync" loading="eager" fetchpriority="auto"/>
                          </picture>
                      </div>
                  </div>
                  <div className="col-span-1 flex w-full flex-col pl-2 text-left ">
                      <span className='text-sm font-semibold'>{name}</span>
                      
                      <span className='text-xs text-slate-600'>{city}</span>
                  </div>
                  <div className="col-span-1 absolute right-2  overflow-hidden rounded-full bg-black text-white !border-0">
                  <BackArrowSvg className={SvgClassName}/>
                  </div>
              </button>
          </li>
      </>
    )
  }
  
  export default HotelCard