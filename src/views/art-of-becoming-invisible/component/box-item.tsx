import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { baGua, baGuaIndex, baMen, diZhi, jiuXing, tianGan, wuXing } from "../service";

type BoxItemData = { index: number }

export default function BoxItem({ index }: BoxItemData) {
  const [height, setHeight] = useState(0)
  const refBox = useRef(null)
  useEffect(() => {
    setHeight((refBox?.current! as HTMLElement).offsetWidth)
  })
  return (
    <div ref={ refBox } className="relative overflow-hidden" style={ { height: height } }>
      <div className="absolute left-2/4 top-2/4 -ml-3 -mt-3 w-6 border-gray-950 border text-center rounded-half leading-relaxed">{ baGuaIndex[index] }</div>
      { baGua[index] ? <div className="absolute -right-px -bottom-px 
        w-6 text-center leading-relaxed text-blue-700">{ baGua[index] }</div> : null }
      {/* <div >{ tianGan[index] }</div>
      <div >{ diZhi[index] }</div> */}
      {
        wuXing[index] ? <div className="absolute -right-px -top-px 
        w-6 border-gray-950 border text-center bg-yellow-500 leading-relaxed">{ wuXing[index] }</div> : null
      }

      {
        baMen[index]?<div className="absolute -left-px -bottom-px 
        w-6 text-center leading-relaxed text-red-600 border border-gray-950">{ baMen[index] }</div>:null
      }
      {
        jiuXing[index].name?<div className="absolute -left-px -top-px 
        w-12 text-center leading-relaxed text-green-600 border border-gray-950">{ jiuXing[index].name }</div>:null
      }
    </div>
  )
}