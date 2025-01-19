import Image from "next/image";

export default function Pages() {
  return (
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
        <a href="/pages">Pages</a>
      </li>
      <li className="text-2xl">
        <a href="/product">Product</a>
      </li>
      <li className="text-2xl">
        <a href="/FAQ">FAQ</a>
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
      <div className="bg-white w-full h-full">
    <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
    <div style={{ flex: 1, padding: "20px" }}>
      <Image
        src="/Images/chair3.jpeg"
        alt="Chair3"
        width={450}
        height={4}
       />
    </div>
    <div style={{ flex: 1, padding: "20px" }}>
      <div className="text-2xl">
     <h1 className="text-6xl font-bold">Library Stool</h1>
     <h1 className="text-6xl font-bold">Chair</h1>
      <br/>
      <button className="bg-cyan-700 text-white w-36 h-10">$20.00 USD</button>
      <br/>
      <br/>
      <p className="text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
      <p className="text-zinc-500">Nullam tincidunt erat enim. Lorem ipsum dolor</p>
      <p className="text-zinc-500">sit amet, consectetur adipiscing</p>
      <br/>
      <button className="bg-cyan-700 w-32 h-14">
      <Image
      
      src="/Images/cart.png"
      alt="Cart" 
      width={20}
      height={1}
      /><p className="text-white font-semibold text-lg">Add to Cart</p>
          </button>
          </div>
    </div>
    </div>
    </div>
    <br/>
    <br/>
    <div>
      <h1 className="text-4xl font-bold text-center">Featured Products</h1>
      <h3 className="text-slate-500 text-right text-xl"><a href="/product">View All.</a></h3>
    </div>
    <br/>      
      <div style={{ display: "flex", gap: "10px", flexDirection: "row" }}>
      <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/chair4.jpeg"
        alt="Chair4"
        width={350}
        height={3}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$99</h6>
    </div>
    <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/Image3.1.jpeg"
        alt="Chair9"
        width={550}
        height={3}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$99</h6>
    </div>
    <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/chair5.png"
        alt="Chair5"
        width={350}
        height={3}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$99</h6>
    </div>
    <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/chair1.jpeg"
        alt="Chair1"
        width={450}
        height={3}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$99</h6>
    </div>
    <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/chair2.jpeg"
        alt="Chair2"
        width={350}
        height={3}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$99</h6>
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