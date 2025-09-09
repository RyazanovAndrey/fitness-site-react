type IProps = {
    children: React.ReactNode
}

const Title = ({ children }: IProps ) => {
  return (
    <h2 className="text-3xl font-bold">{ children }</h2>
  )
}

export default Title