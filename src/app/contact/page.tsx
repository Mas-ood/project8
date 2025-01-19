import Image from "next/image";

export default function ContactUs() {
  return (
<div className="bg-white w-auto h-full text-black text-bold">
<div className=" bg-slate-400 h-10 w-full text-lg">
        <div>
        <Image
      
      src="/Images/Logo.png"
      alt="Logo" 
      width={166}
      height={2}
      />
        </div>
        </div>
        <div className=" bg-slate-200 w-auto h-14 text-2xl  flex gap-8">
        <div>
          <header>
          <ul className="flex gap-5">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact Us</a>
      </li>
      <li>
        <a href="/pages">Pages</a>
      </li>
      <li>
        <a href="/product">Product</a>
      </li>
      <li>
        <a href="/FAQ">FAQ</a>
      </li>
     
     <button className="bg-white text-black">
      <Image
      
      src="/Images/cart.png"
      alt="Cart" 
      width={20}
      height={3}
      />
      CART
      </button>
     </ul>         </header>
        </div>
      </div>
      <br/>
      <div className="text-center">
        <div className="text-3xl"><h1><b>Get In Touch With Us.</b></h1></div>
      <p className="text-gray-400">For More Information About Our Product & Services. Please Feel Free To Drop Us</p> 
      <p className='text-gray-400'>An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>
     
      <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
      <div style={{ flex: 1, backgroundColor: "white", padding: "20px" }}>
      <div>
      <Image
      src="/Images/location.jpeg"
      alt="Location" 
      width={20}
      height={3}
      /><h1 className="text-xl"><b>Address</b></h1>
      <p>236 5th SE Avenue, New</p><p>York NY10000, United</p><p>States</p>
      </div>
      <br/>
      <div>
      <Image
      src="/Images/phone.jpeg"
      alt="Phone" 
      width={20}
      height={3}
      /><h1 className="text-xl"><b>Phone</b></h1>
      <p>Mobile: +(84) 546-6789</p><p>Hotline: +(84) 456-6789</p>
      </div>
      <br/>
      <div>
      <Image
      src="/Images/clock.jpeg"
      alt="Clock" 
      width={20}
      height={3}
      /><h1 className="text-xl"><b>Working Time</b></h1>
      <p>Monday-Friday: 9:00 - 22:00</p>
      <p>Saturday-Sunday: 9:00 - 21:00</p>
      </div>
      <br/>
      </div>
      <div className="bg-slate-200 w-full h-96" style={{ flex: 1, padding: "20px" }}>
          <form>
            <p className="text-xl"><b>Your Name:-</b>
            <input type="comment" name="Your Name" size={40} maxLength={50}/>
            </p>
            <br/>
             <p className="text-xl"><b>Email Address:-</b>
              <input type="text" name="Email Address" size={40} maxLength={50}/>
             </p>
             <br/>
             <p className="text-xl"><b>Subject:-</b>
              <input type="text" name="This is optional" size={100} maxLength={500}/>
             </p>
             <br/>
             <p className="text-xl"><b>Message:-</b>
              <input type="" name="" size={100} maxLength={1000}/>
             </p>
             <br/>
             <button className="bg-cyan-600 w-56 h-14 text-xl"><b>Submit</b></button>
          </form>
          </div>
    
      </div>
      <div>
      <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
      <div style={{ flex: 1, backgroundColor: "lightgray", padding: "20px" }}>
      
      <Image
      src="/Images/trophy.jpeg"
      alt="Trophy" 
      width={60}
      height={10}
      /><p className="text-xl"><b>High Quality</b></p>
      <p className="text-slate-500">crafted from top materials</p>
      </div>
      <div style={{ flex: 1, backgroundColor: "lightgray", padding: "20px" }}>
      <Image
      src="/Images/guarantee.png"
      alt="Guarantee" 
      width={60}
      height={10}
      /><p className="text-xl"><b>Warranty Protection</b></p>
      <p className="text-slate-500">Over 2 Years</p>
      </div>
      <div style={{ flex: 1, backgroundColor: "lightgray", padding: "20px" }}>
      <Image
      src="/Images/customer helpline.jpeg"
      alt="Customer Helpine" 
      width={60}
      height={10}
      /><p className="text-xl"><b>24/7</b></p>
      <p className="text-slate-500">Dedicated Support</p>
      </div>
      </div>
      <br/>
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
    </div>
    );
}