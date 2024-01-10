import Button from "../components/Button"
import { arrowRight } from "../assets/icons"

const Hero = () => {
  return (
   <section id="home" className=" w-full  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:paddding-x pt-28">
<p className="text-xl font-montserrat text-coral-red">   Our Summer collections</p>
<h1 className=" mt-10 font-palanquin text-8xl"><span> The New Arrival</span>
<br />
<span>Nike</span> shoes
</h1>
<p> Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.</p>
          <Button label = "Shop now" iconUrl={arrowRight}/>
</div>
   </section>
  )
}

export default Hero