import Image from "next/image";

export default function Cart() {
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
      </div>
      <div className="bg-white text-black">
        <h1 className="text-2xl font-bold">Bags</h1>    
        <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
      
      <div className="bg-white w-full h-full text-black" style={{ flex: 1, backgroundColor: "white", padding: "20px" }}>
        
        <br/>
        <br/>
        <Image
        src="/Images/chair1.jpeg"
        alt="Chair1"
        width={200}
        height={10}
        /><p className="font-bold ">Library Stool Chair</p>
        <p className="text-gray-500">Ashen Slate/Cobalt Bliss</p>
        <p className="text-gray-500">Size: L   Quantity:1</p>
        <p>MRP:$99.0</p>
        <br/>
        <div className="bg-black w-96 h-1"></div>
        <div style={{ flex: 1, backgroundColor: "white", padding: "20px" }}>
        <div className="bg-white w-full h-full text-black">
        <Image
        src="/Images/chair2.jpeg"
        alt="Chair2"
        width={200}
        height={10}
        /><p className="font-bold ">Library Stool Chair</p>
        <p className="text-gray-500">Ashen Slate/Cobalt Bliss</p>
        <p className="text-gray-500">Size: L   Quantity:1</p>
        <p>MRP:$99.0</p>
        </div>
        </div>
      </div>
       

       <div className="font-bold text-black text-center">
        <h1 className="text-xl ">Summary</h1>
        <br/>
        <p><b>Subtotal</b> $198.00</p>
        <p><b>Estimated delivery and Handling</b> Free</p>
        <div className="bg-slate-400 w-96 h-1"></div>
        <p><b>Total</b> $198.00</p>
        <button className="bg-cyan-700 w-48 h-12">Member Checkout</button>
       </div>
       <br/>
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
);
}