import Controller from '@c/Controller'
import Pool from '@c/Pool'
import Result from '@c/Result'
import Card from '@c/Card'

const Home = () => {
  return (
    <div className="grid grid-cols-3 grid-gap-1em m-4">
      <Card>
        <Controller />
      </Card>
      <Card>
        <Pool />
      </Card>
      <Card>
        <Result />
      </Card>
    </div>
  )
}

export default Home
