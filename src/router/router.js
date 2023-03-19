import React from "react";
import { Header } from "../components/pre-navbar"
import { AppNavbar } from "../components/navbar"
import { UncontrolledExample } from "../components/banner"
import { KitchenSinkExample } from "../components/kitchen_sink"
import { Footer } from "../components/footer"
import { OffCanvas } from "../components/offcanvas"
import { WhatsAppButton } from "../components/whatsApp_button"
import { TituloConTexto } from "../components/nosotros"
import { ContactForm } from "../components/contact-form"
import { Contact_Job_Form } from "../components/job-format"
import { News } from "../components/news"


function Route01(){
    return(
        <div>
            <AppNavbar/>
            <UncontrolledExample/>
            <KitchenSinkExample/>
            <OffCanvas/>
            <WhatsAppButton/>
            <Footer/>
        </div>
    )
}

function Route02(){
    return(
        <div>
            <AppNavbar/>
            <TituloConTexto/>
            <WhatsAppButton/>
            <Footer />
        </div>
    )
}

function Route03(){
    return(
        <div>
            <AppNavbar/>
            <ContactForm/>
            <p>
            <br />
            <br />
            <br />
            </p>
            <WhatsAppButton/>
            <Footer />
        </div>
    )
}

function Route04(){
    return(
        <div>
            <AppNavbar/>
            <Contact_Job_Form/>
            <WhatsAppButton/>
            <Footer />
        </div>
    )
}

function Route05(){
    return(
        <div>
            <AppNavbar/>
            <News/>
            <WhatsAppButton/>
            <Footer />
        </div>
    )
}

export { Route01, Route02, Route03, Route04, Route05}