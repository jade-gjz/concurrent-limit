import type { PropsWithChildren } from 'react'
import type { CommonProps } from '@/typings/global'

const Card = (props: PropsWithChildren<CommonProps>) => {
  return <div className="border border-3 border-blue-400 rounded-md p-4">{props.children}</div>
}

export default Card
