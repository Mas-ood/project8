import Image from "next/image";

export default function Home() {
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
      <br/>
      <div className="bg-white text-black">
        
      
            <div className="flex h-2/5 w-full bg-slate-300 ">
        <div className="flex flex-col flex-1 gap-4 justify-center px-4">
        <h1 className="w-36 h-4 text-xl font-medium">Welcome To Chairy</h1>
        <br/>
        
        <h1 className="justify-items-left text-6xl w-72 h-16"><b>Best Furniture Collection for your interior.</b></h1>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      
        <button className="text-white w-[217px] h-[66px] p-4 bg-cyan-700"><b>Shop Now</b> </button>
        </div>
        <div className="flex-1">
          <div>
          <Image 
            src="/Images/Image1.png"
            alt="Chair1" 
            width={300}
            height={3}
          />
          </div>
        </div>
    </div>
     <br/>
     <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
<div style={{ flex: 1, padding: "10px" }}>
  <Image
  src="/Images/Image2.1.png"
  alt="Img1"
  width={100}
  height={100}
  />
</div>
<div style={{ flex: 1, padding: "10px" }}>
  <Image
  src="/Images/Image2.2.png"
  alt="Img2"
  width={200}
  height={100}
  />
</div>
<div style={{ flex: 1, padding: "10px" }}>
  <Image
  src="/Images/Image2.3.png"
  alt="Img3"
  width={100}
  height={100}
  />
</div>
<div style={{ flex: 1, padding: "10px" }}>
  <Image
  src="/Images/Image2.4.png"
  alt="Img4"
  width={70}
  height={100}
  />
</div>
<div style={{ flex: 1, padding: "10px" }}>
  <Image
  src="/Images/Image2.5.png"
  alt="Img5"
  width={80}
  height={100}
  />
</div>
<div style={{ flex: 1, padding: "10px" }}>
  <Image
  src="/Images/Image2.6.png"
  alt="Img6"
  width={300}
  height={100}
  />
</div>
<div style={{ flex: 1, padding: "10px" }}>
  <Image
  src="/Images/Image2.7.png"
  alt="Img7"
  width={200}
  height={100}
  />
</div>
     </div>
     <br/>
     <div>
  <h1 className="text-2xl font-bold text-center">Featured Products</h1>
  <br/>
  <div style={{ display: "flex", gap: "30px", flexDirection: "row" }}>
<div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/Image3.1.jpeg"
  alt="Chair9"
  width={300}
  height={300}
  />
  <p className="font-medium">Library Stool Chair</p>
  <p className="font-semibold">$20</p>
</div>  
<div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/chair3.jpeg"
  alt="Chair3"
  width={200}
  height={200}
  />
  <p className="font-medium">Library Stool Chair</p>
  <p className="font-semibold">$20</p>
</div>  
<div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/chair1.jpeg"
  alt="Chair1"
  width={300}
  height={300}
  />
  <p className="font-medium">Library Stool Chair</p>
  <p className="font-semibold">$20</p>
</div>  
<div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/chair6.jpeg"
  alt="Chair6"
  width={200}
  height={200}
  />
  <p className="font-medium">Library Stool Chair</p>
  <p className="font-semibold">$20</p>
</div>  
 </div>
 </div>
    </div>
    <br/>
    <div>
    <h1 className="text-2xl font-bold text-center">Featured Products</h1>
     <br/>
     <div style={{ display: "flex", gap: "30px", flexDirection: "row" }}>
<div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/chair2.jpeg"
  alt="Chair2"
  width={200}
  height={200}
  /><br/>
  <p className="font-semibold text-lg">Wing Chair</p>
     </div>
     <div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/chair7.jpeg"
  alt="Chair7"
  width={300}
  height={300}
  /><br/>
  <p className="font-semibold text-lg">Wooden Chair</p>
     </div>
     <div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/chair5.png"
  alt="Chair5"
  width={220}
  height={200}
  /><br/>
  <p className="font-semibold text-lg">Desk Chair</p>
     </div>
    </div>
    <br/>
    <div>
      <h1 className="text-center font-bold text-3xl">Explore New And Popluar Styles</h1>
      </div>
    <br/>
    <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
<div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/chair1.jpeg"
  alt="Chair1"
  width={300}
  height={300}
  /><br/>
  </div>
  <div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/chair6.jpeg"
  alt="Chair6"
  width={230}
  height={220}
  /><br/>
  </div>
  <div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/Image3.1.jpeg"
  alt="Chair9"
  width={330}
  height={330}
  /><br/>
  </div>
  <div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/chair8.jpeg"
  alt="Chair8"
  width={200}
  height={200}
  /><br/>
  </div>
  <div style={{ flex: 1, padding: "20px" }}>
  <Image
  src="/Images/Image3.1.jpeg"
  alt="Chair9"
  width={300}
  height={300}
  /><br/>
  </div>
  </div>
  <br/>
  <div className="text-center font-bold text-3xl"><h1>Our Products</h1></div>
  <br/>
  <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
<div style={{ flex: 1, padding: "20px" }}>
<Image
  src="/Images/Image3.1.jpeg"
  alt="Chair9"
  width={300}
  height={300}
  />
  <p>Library Stool Chair</p>
  <p className="font-semibold text-lg">$20</p>
  </div>
  <div style={{ flex: 1, padding: "20px" }}>
<Image
  src="/Images/chair3.jpeg"
  alt="Chair3"
  width={220}
  height={220}
  />
  <p>Library Stool Chair</p>
  <p className="font-semibold text-lg">$20</p>
  </div>
  <div style={{ flex: 1, padding: "20px" }}>
<Image
  src="/Images/chair1.jpeg"
  alt="Chair1"
  width={280}
  height={280}
  />
  <p>Library Stool Chair</p>
  <p className="font-semibold text-lg">$20</p>
  </div>
  <div style={{ flex: 1, padding: "20px" }}>
<Image
  src="/Images/chair6.jpeg"
  alt="Chair6"
  width={200}
  height={200}
  />
  <p>Library Stool Chair</p>
  <p className="font-semibold text-lg">$20</p>
  </div>
</div>
<div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>
<div style={{ flex: 1, padding: "20px" }}>
<Image
  src="/Images/chair2.jpeg"
  alt="Chair2"
  width={200}
  height={200}
  /><br/>
  <p>Library Stool Chair</p>
  <p className="font-semibold text-lg">$20</p>
  </div>
  <div style={{ flex: 1, padding: "20px" }}>
<Image
  src="/Images/chair8.jpeg"
  alt="Chair8"
  width={220}
  height={220}
  /><br/>
  <p>Library Stool Chair</p>
  <p className="font-semibold text-lg">$20</p>
  </div>
  <div style={{ flex: 1, padding: "20px" }}>
<Image
  src="/Images/chair4.jpeg"
  alt="Chair4"
  width={200}
  height={200}
  /><br/>
  <p>Library Stool Chair</p>
  <p className="font-semibold text-lg">$20</p>
  </div>
  <div style={{ flex: 1, padding: "20px" }}>
<Image
  src="/Images/Image3.1.jpeg"
  alt="Chair9"
  width={300}
  height={400}
  /><br/>
  <p>Library Stool Chair</p>
  <p className="font-semibold text-lg">$20</p>
  </div>
</div>
  </div>
  </div>
  <div>
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
   /><br/>   
   <Image
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