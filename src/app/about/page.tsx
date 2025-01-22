import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div>
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
   <div className="bg-white w-screen h-full">
    <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
      <div style={{ flex: 1, padding: "20px" }}>
      <div className="bg-cyan-800 w-4/5 h-80 text-center">
     <h1 className="text-3xl">About Us - Comforty</h1>
      <br/>
      <p className="text-xl">At Comforty, we believe that the right chair can transform</p> 
      <p className="text-xl">your space and elevate your comfort. Specializing in</p> 
      <p className="text-xl">ergonomic design, premium materials, and modern</p> <p>aesthetics, we craft chairs that seamlessly blend style</p> 
      <p className="text-xl">with functionality. </p>
      <br/>
             <button className="bg-cyan-600 w-56 h-14 text-2xl"><Link href="/product">View Collection</Link></button>
          </div>
    </div>
    <div style={{ flex: 1, padding: "20px" }}>
      <Image
        src="/Images/Image3.1.jpeg"
        alt="Chair2"
        width={400}
        height={4}
       />
    </div>
</div>
<br/>
<div className="text-center text-3xl text-black">
<h1><b>What Makes Our Brand Different</b></h1>
<br/>
<div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
      <div style={{ flex: 1, backgroundColor: "lightgray", padding: "20px" }}>
        <Image
        src="/Images/delivery.png"
        alt="Delivery"
        width={40}
        height={4}
        />
        <h1 className="text-xl">Next Day as Standard</h1>
        <p className="text-lg">Order before 3pm and get</p>
        <p className="text-lg">you order the next day as</p>
        <p className="text-lg">Standard</p>''
      </div>
      <div style={{ flex: 1, backgroundColor: "lightgray", padding: "20px" }}>
      <Image
        src="/Images/checkmark.jpeg"
        alt="Check Mark"
        width={40}
        height={4}
        />
        <h1 className="text-xl">Made By True Artisans</h1>
        <p className="text-lg">Handmade crafted goods</p>
        <p className="text-lg">made with real passion and</p>
        <p className="text-lg">craftmanship</p>
      </div>
      <div style={{ flex: 1, backgroundColor: "lightgray", padding: "20px" }}>
      <Image
        src="/Images/purchase.jpeg"
        alt="Purchase"
        width={40}
        height={4}
        />
        <h1 className="text-xl">Unbeatable Prices</h1>
        <p className="text-lg">For our material and</p>
        <p className="text-lg">quality you won't find better</p>
        <p className="text-lg">prices anywhere</p>
      </div>
      <div style={{ flex: 1, backgroundColor: "lightgray", padding: "20px" }}>
      <Image
        src="/Images/recycle.jpeg"
        alt="Recycle"
        width={40}
        height={4}
        />
        <h1 className="text-xl">Recycled Packaging</h1>
        <p className="text-lg">We use 100% recycled to</p>
        <p className="text-lg">ensureour footprint is more</p>
        <p className="text-lg">manageable</p>
      </div>
</div>
<br/>
  <div className="bg-white text-2xl">
    <h1><b>Our Popular Products</b></h1>
    <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
      <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/Image5.1.jpeg"
        alt="Chair3"
        width={600}
        height={40}
        />
        <p className="text-left text-xl">The Popular Suede Sofa</p>
        <p className="text-left text-base">$99.00</p>
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/Image5.2.jpeg"
        alt="Chair4"
        width={200}
        height={5}
        />
        <p className="text-left text-xl">The Dandy Chair</p>
        <p className="text-left text-base">$99.00</p>
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/Image5.3.jpeg"
        alt="Chair4"
        width={200}
        height={5}
        />
        <p className="text-left text-xl">The Dandy Chair</p>
        <p className="text-left text-base">$99.00</p>
      </div>
      
</div>  
</div>
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