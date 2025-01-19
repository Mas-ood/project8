import Image from "next/image";

export default function Product() {
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
  <div className="text-justify text-3xl font-bold bg-white w-full h-full text-black">
    <br/>
    <h1>All Products</h1>
  <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
      <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/Image3.1.jpeg"
        alt="Chair9"
        width={200}
        height={200}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$20</h6>
    </div>
    <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/chair3.jpeg"
        alt="Chair3"
        width={200}
        height={200}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$20</h6>
    </div>
    <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/chair1.jpeg"
        alt="Chair1"
        width={200}
        height={200}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$20</h6>
    </div>
    <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/chair6.jpeg"
        alt="Chair"
        width={200}
        height={200}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$20</h6>
    </div>
  </div>
  <br/>
  <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
      <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/chair7.jpeg"
        alt="Chair7"
        width={200}
        height={200}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$20</h6>
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/chair8.jpeg"
        alt="Chair8"
        width={200}
        height={200}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$20</h6>
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/chair4.jpeg"
        alt="Chair4"
        width={200}
        height={200}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$20</h6>
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/Image3.1.jpeg"
        alt="Chair9"
        width={350}
        height={350}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$20</h6>
      </div>
  </div>
  <br/>
  <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
      <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/chair2.jpeg"
        alt="Chair2"
        width={200}
        height={200}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$20</h6>
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/chair3.jpeg"
        alt="Chair3"
        width={250}
        height={250}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$20</h6>
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/chair1.jpeg"
        alt="Chair1"
        width={300}
        height={300}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$20</h6>
      </div>
      <div style={{ flex: 1, padding: "20px" }}>
        <Image
        src="/Images/chair5.png"
        alt="Chair5"
        width={200}
        height={200}
        />
        <h4 className="text-lg font-semibold">Library Stool Chair</h4>
        <h6 className="font-semibold">$20</h6>
      </div>
  </div>    
<br/>
<div className="bg-slate-200 w-full h-3/5">
  <br/>
<h1 className="text-3xl font-bold text-center">Or Subscribe To The Newsletter</h1>
<br/>
<p className="text-xl text-center"><b>Email Address:-</b>
  <input type="text" name="Email Address" size={40} maxLength={50}/>
  <button className="bg-white w-32 h-14 text-black text-lg ">
    Submit
  </button>
</p>
<br/>
<h1 className="text-3xl font-bold text-center">Follow products and discounts on Instagram</h1>
<br/>
<div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
<div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/chair7.jpeg"
  alt="Chair7"
  width={200}
  height={200}
  />
</div>
<div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/chair2.jpeg"
  alt="Chair2"
  width={150}
  height={150}
  />
  </div>
  <div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/chair3.jpeg"
  alt="Chair3"
  width={200}
  height={200}
  />
  </div>
  <div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/Image3.1.jpeg"
  alt="Chair9"
  width={250}
  height={250}
  />
  </div>
  <div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/chair1.jpeg"
  alt="Chair1"
  width={200}
  height={200}
  />
  </div>
  <div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/chair5.png"
  alt="Chair5"
  width={200}
  height={200}
  />
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