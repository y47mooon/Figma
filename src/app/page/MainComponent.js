import React, { useRef } from 'react';
import Top from './Top';
import Service from './Service';
import Flow from './Flow';
import Works from './Works';
import Contact from './Contact';

const MainComponent = () => {
    const topRef = useRef(null);
    const serviceRef = useRef(null);
    const flowRef = useRef(null);
    const worksRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        console.log('Scrolling to:', ref);
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <nav>
                <button onClick={() => scrollToSection(topRef)}>TOP</button>
                <button onClick={() => scrollToSection(serviceRef)}>Service</button>
                <button onClick={() => scrollToSection(flowRef)}>Flow</button>
                <button onClick={() => scrollToSection(worksRef)}>Works</button>
                <button onClick={() => scrollToSection(contactRef)}>Contact</button>
            </nav>
            <Top 
                ref={topRef} 
                serviceRef={serviceRef} 
                flowRef={flowRef}
                scrollToSection={scrollToSection}
            />
            <Service ref={serviceRef} />
            <Flow ref={flowRef} />
            <Works ref={worksRef} />
            <Contact ref={contactRef} />
        </div>
    );
};

export default MainComponent;
