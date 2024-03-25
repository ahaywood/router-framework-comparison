type AboutLayoutProps = {
  children?: React.ReactNode
}

const AboutLayout = ({ children }: AboutLayoutProps) => {
  return (
    <div className="m-2 border-2 border-purple-500 p-2">
      <h1>Layout</h1>
      {children}
    </div>
  )
}

export default AboutLayout
