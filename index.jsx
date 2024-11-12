////========================= ADDITIONAL DATA =====================
const packages = [
    {
      title: "Essentials",
      pack: [
        "Initial consultation",
        "Budget planning and timeline development",
        "Vendor recommendations and booking assistance",
        "Day-of coordination and on-site support"
      ],
    },
    {
      title: "Elegance",
      pack: [
        "Full-service event planning from concept to execution",
        "Venue scouting and contract negotiation",
        "Personalized theme and decor planning",
        "Vendor coordination and management",
        "Day-of event execution and post-event follow-up"
      ]
    },
    {
      title: "Signature",
      pack: [
        "All Elegance services",
        "Custom design consultation with mood boards",
        "Personalized styling and decor curation",
        "Full vendor management",
        "Guest concierge services (RSVP tracking, accommodations)"
      ]
    },
    {
      title: "Ultimate",
      pack: [
        "All Signature services",
        "Exclusive vendor partnerships",
        "Immersive decor and experiential elements",
        "Full concierge services for guests and hosts",
        "Event branding (custom invitations, promo materials)",
        "Multi-day event coordination and post-event support"
      ]
    }
]

const services = [
    {
      name: "Event Planning",
      icon: "calendar"
    },
    {
      name: "Venue & Vendor Sourcing",
      icon: "building-house"
    },
    {
      name: "Design & Decor",
      icon: "palette"
    },
    {
      name: "Guest Services",
      icon: "user-pin"
    },
    {
      name: "Event Day Coordination",
      icon: "check-circle"
    }
]

const navBarLinks = ['home', 'about us', 'our services', 'contact us']
  



///==== main app
const App =()=>{
    return(
        
        <div>
            <TopBar />
            <NavBar />
            <HeroSection />
            <OurServices />
            <AboutUs />
            <ContactUs />
            <Footer />
        </div>
    )
}

//////========================== section =======================================

//====== nav bar
function NavBar() {
    return(
        <nav className="px-[7.5vw] py-4 bg-black sticky top-0 z-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <a href="#">
                    <img src="./assets/LUXI.png" alt="logo"  className="h-[2rem]"/>
                </a>
                {
                    navBarLinks.map(link =>(
                        <a 
                            href={`#${link.replace(' ', '-')}`}
                            key={link}
                            className="p-2 hidden md:block  text-white capitalize font-medium"
                        >
                            {link}
                        </a>
                    ))
                }
            </div>
            <CustomButton title='book now' fill light rounded/>
        </nav>
    )
}


///=== top bar
function TopBar() {

    return(
        <div
            className="bg-black px-[7.5vw] py-3 flex items-center justify-between"
        > 
            <div className=" gap-3 hidden md:flex items-center text-gray-100 font-regular">
                <small>
                    Contact Us: (123) 456-7890
                </small>
                <small>
                    Address: 123 Luxury Ave, New York, U.S.A
                </small>
                <a href="https://instagram.com" target="blank" className="leading-none">
                    <box-icon type='logo' name='instagram' color='white'></box-icon>
                </a>
                <a href="https://facebook.com" target="blank" className="leading-none">
                    <box-icon type='logo' name='facebook' color='white'></box-icon>
                </a>
                <a href="https://google.com" className="leading-none"><box-icon name='envelope' color="white"></box-icon></a>
            </div>

            <div className="auth flex gap-2 items-center ml-auto"> {/*contains log-in sign-up*/}
                <CustomButton 
                    title='login'
                    func={()=>alert('infomation not available')}
                    rounded fill light small 
                />
                <CustomButton 
                    title='signup' 
                    func={()=>alert('infomation not available')} 
                    rounded outline light small
                />
            </div>
        </div>
    )
}

///==== hero section
function HeroSection(){
    return(
        <header
            className=" relative w-[100vw] h-[100vh] bg-red-100 p-[7.5vw] pt-[5vh] pb-[3vh] bg-[url('./assets/hero-img.jpg')] bg-bottom bg-cover"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black to-[200%]"></div>
            <div className="relative z-10 w-full h-full flex flex-col gap-6 items-center justify-center capitalize text-white">
                <h1
                    className=" font-bold leading-none text-center"
                >
                    creating moments, 
                    <br />
                    crafting memories
                </h1>
                <h6 className="text-gray-100">
                    bringing your dreams to life with elegance and style
                </h6>
                <div
                    className="flex gap-4 items-center"
                >
                    <CustomButton 
                        title='book now' 
                        fill  light
                    />
                    <CustomButton 
                        title='learn more' 
                        light
                    />
                </div>
            </div>
        </header>
    )
}

//======= contact section
function AboutUs(){
    return(
        <div
            id="about-us"
            className="w-[100vw] h-[100vh] px-[7.5vw] py-[5vh] flex flex-col sm:flex-row gap-[3vw] items-center bg-purple-50"
        >
            <div className="flex-1 order-2 sm:order-1">

                <SectionHeader 
                    center
                    mainHeader="about us"
                    subHeader="Luxi is a premier event planning agency dedicated to crafting unforgettable, luxurious experiences. From intimate gatherings to grand celebrations, Luxi specializes in bespoke planning, elegant design, and seamless execution, ensuring every detail reflects the client’s unique vision. With a commitment to sophistication and style, Luxi transforms events into memorable moments."
                />

                <br />
                <div className="mx-auto w-fit">
                    <CustomButton title='contact us' outline func={()=>alert('infomation not available')} small />
                </div>
                

            </div>

            <div className="relative order-1 sm:order-2 flex-1 sm:flex-[0 1 40%] h-[50vh] sm:h-[90%] w-full hue-rotate-[300deg]">
              <img 
                src="./assets/about-us-img.jpg" 
                alt="image about us" 
                className="object-cover  max-h-[90%] w-[90%]"
              />
              <div className="absolute inset-0 w-[90%] -z-[1] h-[90%] bg-pink-800  mt-6 ml-6"></div>
            </div>
        </div>
    )
}

// our service section
function OurServices(){
    return(
        <div className="px-[7.5vw] py-[5vh] min-h-[100vh]"  id='our-services'> 
            <div className="flex gap-4 justify-center flex-wrap">
                <SectionHeader center mainHeader="our services" />
                {services.map(service => (<Service key={service.name} {...service} />))}
            </div>
            <div className="flex flex-wrap gap-4 py-[7.5vh] justify-center">
                <SectionHeader center mainHeader="our packages" />
                {packages.map(pack => (<PackageCard {...pack}  key={pack.title} />) )}
            </div>

        </div>
        
    )
}

// contact us page
function ContactUs(){
    return(
        <div id='contact-us' className="px-[7.5vw] py-[5vh] bg-purple-200">
            <SectionHeader center  mainHeader='contact us' subHeader="we'd love to hear from you, send us a message today!" />
            <form className="mx-auto mt-6 w-full sm:w-[60vw] flex flex-col gap-2 items-stretch justify-center">
                <input 
                    type="text" 
                    name="full name" 
                    placeholder="Full Name" 
                    id="name-input" 
                    className="p-2 text-gray-800 placeholder:text-gray-600 focus:placeholder:text-gray-400 caret-purple-900 rounded-sm bg-transparent  border-2 border-gray-500 focus:outline-purple-800 "
                />
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    id="email-input" 
                    className="p-2 text-gray-800 placeholder:text-gray-600 focus:placeholder:text-gray-400 caret-purple-900 rounded-sm bg-transparent  border-2 border-gray-500 focus:outline-purple-800 "
                />
                <textarea 
                     cols='10'
                    name="Message" 
                    placeholder="Full Name" 
                    id="name-input" 
                    className="p-2 text-gray-800 placeholder:text-gray-600 focus:placeholder:text-gray-400 caret-purple-900 rounded-sm bg-transparent  border-2 border-gray-500 focus:outline-purple-800 "
                />
                <CustomButton title='submit' fill  func={()=>alert('infomation not available')}  />
            </form>
            
        </div>
    )
}


function Footer() {
    return(
        
        <>
            <div className=" bg-black px-[7.5vw] py-[5vh] flex gap-3 items-center text-gray-100 font-regular">
                <a href="#" className="ml-auto">
                    <img src="./assets/LUXI.png" alt="logo"  className="h-[2rem]"/>
                </a>
                <a href="https://instagram.com" target="blank" className="leading-none">
                    <box-icon type='logo' name='instagram' color='white'></box-icon>
                </a>
                <a href="https://facebook.com" target="blank" className="leading-none">
                    <box-icon type='logo' name='facebook' color='white'></box-icon>
                </a>
                <a href="https://google.com" className="mr-auto"><box-icon name='envelope' color="white"></box-icon></a>
            </div>
            <div className=" bg-black px-[7.5vw] py-3 text-center text-gray-100">
                 <small>
                    Contact Us: (123) 456-7890
                </small>
                <small>
                    Address: 123 Luxury Ave, New York, U.S.A
                </small>
            </div>
        </>
    )
}



//============================== key components ============================================
function CustomButton({title, func, fill, outline, light, rounded, small}){

    // title (string) is the title of button
    // func is the function to be handled by button
    // fill is a boolean value, if passed || true, button has to be a filled button
    // outline is a boolean value, if passed || true, button has to be a outlined button
    // light is a boolean value, if passed || true, it tells if the button needs to be light (if it is on a dark surface)
    // round is a boolean value, if passed || true, button has to be a rounded button

    if(fill){ {/* filled button*/}
        return(
            <button 
                type="button"
                onClick={func}
                className={`capitalize leading-none ease-in-out duration-500 font-medium px-3 py-1.5 border-2 border-transparent ${rounded && 'rounded-full py-1'} ${light ? 'bg-purple-800 border-white text-white hover:bg-transparent hover:text-white hover:border-white' : 'bg-black border-black text-white hover:bg-transparent hover:text-black hover:border-black'} `}
            >
               { small ? (<small className="block">{title}</small>) : (<span>{title}</span>)}
            </button>
        )
    }
    else if(outline){ {/* outlined button*/}
        return(
            <button 
                type="button"
                onClick={func}
                className={`capitalize leading-none ease-in-out duration-500 font-medium px-3 py-1.5 border-2 bg-transparent ${rounded && 'rounded-full py-1'} ${light ? ' border-white text-white hover:bg-transparent hover:text-purple-800 hover:border-purple-800' : ' border-black text-black hover:bg-transparent hover:text-purple-800 hover:border-purple-800'}`}
            >
                { small ? (<small className="block">{title}</small>) : (<span>{title}</span>)}
            </button>
        )
    }else{ {/* text button*/}
        return(
            <button 
                type="button"
                onClick={func}
                className={`capitalize leading-none ease-in-out duration-500 font-medium p-2  border-2 bg-none border-transparent ${rounded && 'rounded-full py-1'} ${light ? ' text-white hover:bg-transparent hover:text-white hover:border-white' : ' text-black hover:bg-transparent hover:text-black hover:border-black'}`}
            >
                { small ? (<small className="block">{title}</small>) : (<span>{title}</span>)}
            </button>
        )
    }
}

/// section headers and subheader
function SectionHeader({mainHeader, subHeader, center}){
    // mainHeader is the main-title of the section
    // subHeader is the sub-title
    // center means header should be centered

    return(
        <div className={"w-full " + `${center ? 'text-center' : 'text-left'}`}>
            <h3 className="capitalize text-purple-900 font-bold mb-4">{mainHeader}</h3>
            { subHeader && (<p className="capitalize text-gray-600 font-regular">{subHeader}</p>)}
        </div>
    )
}

/// package card
function PackageCard({title, pack}){

    return(
        <div className="w-fit group basis-[45%] lg:flex-1 flex flex-col gap-4 items-center  p-4 bg-purple-50 hover:bg-purple-100 ease-in-out duration-[1000ms]">
            <h6
                className="font-medium capitalize text-center group-hover:text-purple-900 ease-in-out duration-[1000ms]"
            >{title}</h6>
            <ul
                className="font-regular text-center capitalize text-gray-600 group-hover:text-purple-800 ease-in-out duration-[1000ms]"
            >
                {pack.map((item, i) => (  <li key={i} className="mb-1 font-medium"> <small>{item}</small></li> )    )}
            </ul>
            <div className="mt-auto">
                <CustomButton title='learn more' outline small/>
            </div>
        </div>
    )
}

// service card 
function Service({icon, name}){
    return(
        <div className="h-max flex items-center bg-purple-50 w-fit">
            <div className="p-2 bg-purple-800 w-fit leading-none">
                <box-icon name={icon} color='white' size='md' ></box-icon>
            </div>

            <p
                className="p-2 font-medium text-gray-800"
            >{name}</p>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('app'));


  