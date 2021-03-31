import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts'

const data =  [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
      },
      {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
      },
      {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
      },
      {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
      },
      {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
      },
      {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
      },
      {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
      }, 
];

const LineChart = () => {
    return (
    <BarChart width={500} height={300} data={data} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} /> */}
        <Bar dataKey="pv" fill="#61a5c2" />
        <Bar dataKey="uv" fill="#03045e" />
    </BarChart>
    )
}

export default LineChart