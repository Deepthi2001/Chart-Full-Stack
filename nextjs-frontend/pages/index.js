import Head from 'next/head';
import CandlestickChart from '../Components/CandlestickChart';
import LineChart from '../Components/LineChart';
import BarChart from '../Components/BarChart';
import PieChart from '../Components/PieChart';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard with multiple charts" />
      </Head>
      <main>
        <h1>Dashboard</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{padding: '10px', height: '50%' }}>
            <CandlestickChart />
          </div>
          <div style={{ padding: '10px' , height: '50%'}}>
            <LineChart />
          </div>
          <div style={{ padding: '10px', height: '50%' }}>
            <BarChart />
          </div>
          <div style={{  padding: '10px', height: '80%' }}>
            <PieChart />
          </div>
        </div>
      </main>
    </div>
  );
}
