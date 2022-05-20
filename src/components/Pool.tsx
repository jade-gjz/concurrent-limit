import { Progress } from 'antd'

const Pool = () => {
  const [max] = useState(5)
  const [pool] = useState(new Array(max).fill(3))
  return (
    <div>
      <h3>
        最大并发量: <span className="text-blue-400">{max}</span>
      </h3>
      <h3>
        当前上传分片数量: <span className="text-blue-400">{max}</span>
      </h3>
      {pool.map(p => (
        <Progress key={p} percent={p} />
      ))}
    </div>
  )
}

export default Pool
