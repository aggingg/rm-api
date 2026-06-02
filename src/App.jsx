import s from './App.module.css'
import { useEffect, useState } from 'react'
import { api } from './constants/api'

import logo from '/logo.webp'


function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState()


  useEffect(() => {

    api.get(`/character/?page=${page}`).then((response) => {
      setData(response.data.results)
    }).catch((error) => {
      console.error("Caiu foi tudo meu fi")
    })
  }, [page])


  return (
    <>
    <div>
      <label>Digite uma página</label>
      <input min={1} max={42} type="number" placeholder='1/42' value={page} onChange={(e) => setPage(Number(e.target.value))}/>
    </div>
      <img className={s.logo} src={logo} alt="Logo" />
      <main>
        {data.map((item, index) => {
        return(
          <Card key={item.id} unico={item.id} imagem={item.image} nome={item.name} espécie={item.species} origem={item.origin.name}/>
        )
        })}
      </main>
    </>
  )

}

export default App
