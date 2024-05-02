import Form from "@/components/Form";
import Image from "next/image";
export default function Home() {
	return (
    <div>
      <div className="mobile_view grid justify-items-center items-center text-center bg-primary-GrayishBlue bg-blend-multiply bg-mobile-hero bg-no-repeat bg-center bg-cover h-screen p-8 md:hidden">
        <div className="logo">
          <Image src={"/desktop/logo.svg"} alt="logo" width={100} height={100} />
        </div>

        <div className="content grid gap-y-8">
          <h1 className="text-secondary-PaleGreen text-[1.3rem] leading-relaxed">PUBLISH YOUR PODCAST <br/><span className="text-white">EVERYWHERE</span></h1>
          <p className="text-white">Upload your audio to Pod with a single click. We&apos;ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>

          <div className="sponsors flex items-center justify-center gap-x-4">
            <Image src={"/desktop/apple-podcast.svg"} alt="" width={50} height={50}/>
            <Image src={"/desktop/google-podcasts.svg"} alt="" width={50} height={50}/>
            <Image src={"/desktop/spotify.svg"} alt="" width={50} height={50}/>
            <Image src={"/desktop/pocket-casts.svg"} alt="" width={50} height={50}/>
          </div>
        </div>

        <Form/>

      </div>


      <div className="tablet_view hidden md:inline-block lg:hidden relative h-screen bg-primary-VeryDarkBlue">
        <Image src={"/tablet/image-host.jpg"} alt="" width={200} height={200} className="absolute right-0 h-full w-1/2 object-cover"/>
        <div className="logo">
          <Image src={"/desktop/logo.svg"} alt="logo" width={100} height={100} className="pl-8 pt-8"/>
        </div>
        <div className="content grid justify-items-start content-center gap-y-8 px-8 bg-primary-VeryDarkBlue relative z-10 w-[80%] h-[74%] top-[20%]">
          
        <h1 className="text-secondary-PaleGreen text-3xl leading-relaxed">PUBLISH YOUR PODCAST <br/><span className="text-white">EVERYWHERE</span></h1>
          <p className="text-white">Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
          <div className="sponsors flex items-center justify-center gap-x-4">
            <Image src={"/desktop/apple-podcast.svg"} alt="" width={50} height={50}/>
            <Image src={"/desktop/google-podcasts.svg"} alt="" width={50} height={50}/>
            <Image src={"/desktop/spotify.svg"} alt="" width={50} height={50}/>
            <Image src={"/desktop/pocket-casts.svg"} alt="" width={50} height={50}/>
          </div>
          <Form/>
        </div>
      </div>



      <div className="desktop_view hidden lg:inline-block relative bg-primary-VeryDarkBlue h-screen w-full">
      <Image src={"/desktop/image-host.jpg"} alt="" width={400} height={400} className="absolute right-0 h-full w-1/2 object-cover"/>
        <div className="logo">
          <Image src={"/desktop/logo.svg"} alt="logo" width={100} height={100} className="ml-40 pt-12"/>
        </div>
        <div className="content grid justify-items-start content-center gap-y-8 pl-40 bg-primary-VeryDarkBlue relative z-10 w-[60%] h-[67%] top-[20%]">
          
          <h1 className="text-secondary-PaleGreen text-3xl leading-relaxed">PUBLISH YOUR PODCAST <br/><span className="text-white">EVERYWHERE</span></h1>
            <p className="text-primary-LightGrayishBlue w-[50ch]">Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
            <Form/>
            <div className="sponsors flex items-center justify-center gap-x-4">
              <Image src={"/desktop/apple-podcast.svg"} alt="" width={100} height={100}/>
              <Image src={"/desktop/google-podcasts.svg"} alt="" width={100} height={100}/>
              <Image src={"/desktop/spotify.svg"} alt="" width={100} height={100}/>
              <Image src={"/desktop/pocket-casts.svg"} alt="" width={100} height={100}/>
            </div>
          </div>

        <Image src={"/desktop/bg-pattern-dots.svg"} alt="" width={200} height={200} className="absolute bottom-[2rem] right-[4rem]"/>
      </div>
    </div>
	);
}
