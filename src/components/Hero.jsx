import { Element } from "react-scroll";
import {Link as LinkScroll} from 'react-scroll'
import Button from "./Button";


const Hero = () => {
    return ( 
        <>
            <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb:32 ">
                <Element name="Hero">
                    <div className="container">
                        <div className="z-2 relative max-w-512 max-lg:w-388">
                            <div className="caption text-p3 uppercase small-2" >
                                video editing
                            </div>
                            <h1 className="h1 mb-6 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md-leading-12">
                                Amazingly simple
                            </h1>
                            <p className="max-x-440 mb-14 body-1 max-md:mb-10"> 
                                We designed XORA AI Video Editor to be an easy to use , quick to learn and surprisingly powerful ! 
                            </p>
                            <LinkScroll to='Features' smooth spy offset={-100}>
                                <Button icon="./images/zap.svg">Try it now</Button>
                            </LinkScroll>
                        </div>
                            <div className="absolute -top-32 left-[calc(50%-100px)] w-[1230px] pointer-events-none hero-img_res">
                                <img className="size-[1230px] max-lg:h-auto" src="./images/hero.png" alt="hero" />
                            </div>
                    </div>
                </Element>
            </section>
        </>
     );
}
 
export default Hero;