import s from './App.module.css'
import { useEffect, useState } from 'react'
import { api } from './constants/api'
import {Card} from './components/card'

import logo from '/logo.png'


function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)


  useEffect(() => {

    api.get(`/characters`).then((response) => {
      console.log(response.data.items)
      setData(response.data.items)
    }).catch((error) => {
      console.error("Caiu foi tudo meu fi")
    })
  }, [page])


  return (
    <>
    <div>
      <label>Digite uma página</label>
      <input min={1} max={58} type="number" placeholder='1/58' value={page} onChange={(e) => setPage(Number(e.target.value))}/>
    </div>
      <img className={s.logo} src={logo} alt="Logo" />
      <main>
        {data.map((item) => {
        return(
          <Card unico={item.id} imagem={item.image} nome={item.name} ki={item.ki} maxKi={item.maxKi} raça={item.race} genero={item.gender} />
        )
        })}
      </main>
    </>
  )

}

export default App
