import Image from "next/image";

export default function FAQs() {
  return (
    <div className="bg-white">
    <div className="bg-white w-auto h-full text-black text-bold">
        <div className=" bg-slate-400 h-10 w-auto text-lg">
        <div>
        <Image
      
      src="/Images/Logo.png"
      alt="Logo" 
      width={166}
      height={2}
      />
        </div>
        </div>
        <div className=" bg-slate-200 w-auto h-12 text-xl  flex gap-8">
        <div>
          <header>
          <ul className="flex gap-5">
      <li className="text-2xl">
        <a href="/">Home</a>
      </li>
      <li className="text-2xl">
        <a href="/about">About</a>
      </li>
      <li className="text-2xl">
        <a href="/contact">Contact Us</a>
      </li>
      <li className="text-2xl">
        <a href="/product">Product</a>
      </li>
      <li className="text-2xl">
        <a href="/FAQs">FAQs</a>
      </li>
      
     <button className="bg-white text-black">
      <Image
      
      src="/Images/cart.png"
      alt="Cart" 
      width={20}
      height={1}
      />
      <a href="/cart">CART</a>
      </button>
     </ul>         </header>
        </div>
      </div>
      </div>
      <div className="bg-white w-full h-full text-black">
      <br/>
      <br/>
      <br/>
         <h1 className="text-center font-bold text-4xl">Questions Looks Here</h1>
         <br/>
         <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the </p>
      </div>
      <br/>
      <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
      <div className="bg-white w-full h-full text-black" style={{ flex: 1, backgroundColor: "lightgray", padding: "20px" }}>
        <h1 className="text-2xl text-bold">What types of chairs do you offer?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam </p>
        <p>amet debitis libero veritatis enim repellat optio natus eum delectus deserunt,</p>
        <p> odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
        <div className="text-black" style={{ flex: 1, backgroundColor: "lightgray", padding: "20px" }}>
        <h1 className="text-2xl text-bold">How can we get in touch with you?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam </p>
        <p>amet debitis libero veritatis enim repellat optio natus eum delectus deserunt,</p>
        <p> odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
      </div>
      <br/>
      <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
      <div className="text-black" style={{ flex: 1, backgroundColor: "lightgray", padding: "20px" }}>
        <h1 className="text-2xl text-bold">Do your chairs come with a warranty?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam </p>
        <p>amet debitis libero veritatis enim repellat optio natus eum delectus deserunt,</p>
        <p> odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
        <div className="text-black" style={{ flex: 1, backgroundColor: "lightgray", padding: "20px" }}>
        <h1 className="text-2xl text-bold">What will be delivered? And When?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam </p>
        <p>amet debitis libero veritatis enim repellat optio natus eum delectus deserunt,</p>
        <p> odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
      </div>
      <br/>
      <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
      <div className="text-black" style={{ flex: 1, backgroundColor: "lightgray", padding: "20px" }}>
        <h1 className="text-2xl text-bold">Can I try a chair before purchasing?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam </p>
        <p>amet debitis libero veritatis enim repellat optio natus eum delectus deserunt,</p>
        <p> odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
        <div className="text-black" style={{ flex: 1, backgroundColor: "lightgray", padding: "20px" }}>
        <h1 className="text-2xl text-bold">How do I clean and maintain my Comforty chair?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam </p>
        <p>amet debitis libero veritatis enim repellat optio natus eum delectus deserunt,</p>
        <p> odit expedita eos molestiae ipsa totam quidem?</p>
        </div>
</div>
<footer className="bg-slate-100 text-black">
   <br/>
   <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
   <div style={{ flex: 1, padding: "20px" }}>
   <Image
   src="/Images/Logo.png"
   alt="Logo" 
   width={166}
   height={2}
   /><br/>
   <p>Vivamus tristique odio sit amet velit semper,</p><p>eu posuere turpis interdum.</p>
   <Image
   src="/Images/twitter.png"
   alt="Twitter" 
   width={16}
   height={2}
   /><br/>
      <Image
   src="/Images/instagram.png"
   alt="Instagram" 
   width={16}
   height={2}
   /><br/>   <Image
   src="/Images/pinterest.png"
   alt="Pinterest" 
   width={16}
   height={2}
   /><br/>   
   <Image
   src="/Images/youtube.png"
   alt="Youtube" 
   width={16}
   height={2}
   /><br/> 
   <Image
   src="/Images/facebook.png"
   alt="Facebook" 
   width={16}
   height={2}
   /><br/> 
</div>
<div style={{ flex: 1, padding: "20px" }}>
  <p className="text-lg text-slate-500">Category</p>
  <br/>
  <p>Sofa</p>
  <p>Armchair</p>
  <p>Wing Chair</p>
  <p>Desk Chair</p>
  <p>Wooden Chair</p>
  <p>Park Bench</p>
</div>
<div style={{ flex: 1, padding: "20px" }}>
  <p className="text-lg text-slate-500">Support</p>
  <br/>
  <p>Help and Support</p>
  <p>Terms and Conditions</p>
  <p>Privacy Policy</p>
  <p>Help</p>
</div>
<div style={{ flex: 1, padding: "20px" }}>
<p className="text-lg text-slate-500">Newsletter</p>
<br/>
  <form>
  <p className="text-xl"><b>Email Address:-</b></p>
    <input type="text" name="Email Address" size={40} maxLength={50}/>
    <br/>
    <button className="bg-cyan-800 w-32 h-14 text-white">Subscribe</button>
  </form>
  <br/>
  <p className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nullam tincidunt erat enim.</p>
</div>
</div>
<br/>
<div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
<div style={{ flex: 1, padding: "20px" }}>
  <p className="text-slate-500 text-lg">@ 2021 - Blogy - Designed & Develop by Zakirsoft</p>
</div>
<div style={{flex: 1, padding: "20px"}}>
  <Image
  src="/Images/paypal.png"
  alt="Paypal"
  width={90}
  height={90}
  />
  <br/>
  <Image
  src="/Images/americanexpress.png"
  alt="AE"
  width={90}
  height={90}
  />
  <br/>
  <Image
  src="/Images/visa.png"
  alt="Visa"
  width={90}
  height={90}
  />
  </div> 
</div>
    </footer>
</div>
);
}