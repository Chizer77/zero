import { useMDXComponent } from 'next-contentlayer/hooks'
// import Image from 'next/image'
import { FC } from 'react'

interface MDXProps {
  code: string
}

const MDX: FC<MDXProps> = ({ code }) => {
  const Component = useMDXComponent(code)

  return (
    <Component
      components={{
        img: (props: any) => {
          // console.log(props)
          // return <Image {...props} alt="" />
          return <img {...props} alt="" />
        },
      }}
    />
  )
}

export default MDX