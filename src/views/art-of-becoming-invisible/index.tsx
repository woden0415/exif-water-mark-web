import { PropsWithChildren } from "react";

export default function ArtOfBecomingInvisible({ children }: PropsWithChildren) { 
  return (
    <div>
      <div>奇门遁甲</div>
      {children}
    </div>
  )
}