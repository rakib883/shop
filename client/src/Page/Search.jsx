import { useParams } from "react-router-dom"

export const Search = () => {
    const {name} = useParams()
    console.log(name)
  return (
    <div>Search</div>
  )
}

