import { PropsWithChildren } from "react";

export default function WaterMarker({ children }: PropsWithChildren) { 
  return (
    <div>
      <div>水印</div>
      {children}
    </div>
  )
}