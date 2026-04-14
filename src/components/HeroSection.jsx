import heroSeattle from "../assets/heroSeattle.jpeg"
export default function HeroSection(){
    return(
        <section>
            <h1 className= "Intro">The Emerald City</h1>
            <p>Seattle, the "Emerald City," is a dynamic coastal seaport and the largest city in the 
                Pacific Northwest. Situated on an isthmus between Puget Sound and Lake Washington 
                in Washington state, it is renowned for its stunning natural surroundings, vibrant coffee culture, 
                and significant tech industry, hosting giants like Amazon and Microsoft.</p>
                <img src={heroSeattle} alt= "Seattle image"></img>
        </section>
    )
}