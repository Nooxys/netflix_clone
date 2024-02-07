import Hero from './Hero'
import MyRow from './MyRow'

const TVShows = () => {
  return (
    <>
      <Hero />
      <MyRow name="Trending Now" filmName="Star Wars" />

      <MyRow name="Watch it Again" filmName="The Lord Of The Rings" />

      <MyRow name="New Releases" filmName="Harry Potter" />

      <MyRow
        name="Because You Watched: ' Halloween '"
        filmName="The Conjuring"
      />

      <MyRow name="Extra for You" filmName="V For Vengeance" />
    </>
  )
}
export default TVShows
