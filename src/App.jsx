import './App.css'
import TravelData from './data'
import Entry from './components/Entry'
import Header from './components/Header'

export default function App(){
  const TravelInfo = TravelData.map((data) => {
    return <Entry 
      img={{src: data.img.src, 
            alt: data.img.alt}}
      title={data.title}
      country={data.country}
      googleMapsLink={data.googleMapsLink}
      dates={data.dates}
      text={data.text}
    />
  })
  return(
    <>
      <Header />
      <main className="container">
        {TravelInfo}
      </main>
    </>
  )
}
