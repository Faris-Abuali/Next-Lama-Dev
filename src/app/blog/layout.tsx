import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const BlogLayout = ({ children }: Props) => {
    return (
        <div>
            {/* <h2>This is the Blog Layout</h2> */}
            {children}
        </div>
    )
}

export default BlogLayout
