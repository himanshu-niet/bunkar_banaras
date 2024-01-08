import React from 'react'
import BackToTop from './BackToTop'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <>
    {/* Footer */}
    <footer className="bg3 p-t-75 p-b-32">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">Categories</h4>
            
         
            <ul>
              <li className="p-b-10">
                <Link href="product?category=Georgette" className="stext-107 cl0 hov-cl1 trans-04">
                Georgette Sarees
                </Link>
              </li>
              <li className="p-b-10">
               <Link href="product?category=Katan" className="stext-107 cl0 hov-cl1 trans-04">
                Katan Silk Sarees
               </Link>
              </li>
              <li className="p-b-10">
               <Link href="product?category=Tussar"  className="stext-107 cl0 hov-cl1 trans-04">
                Tussar Silk Sarees
               </Link>
              </li>
              <li className="p-b-10">
               <Link href="product?category=Kora"  className="stext-107 cl0 hov-cl1 trans-04">
                Kora Silk Sarees
               </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">Help</h4>
            <ul>
              <li className="p-b-10">
               <Link href="term" className="stext-107 cl0 hov-cl1 trans-04">
                  Terms & Conditions
               </Link>
              </li>
              <li className="p-b-10">
               <Link href="return" className="stext-107 cl0 hov-cl1 trans-04">
                  Return & Refund
               </Link>
              </li>
              <li className="p-b-10">
               <Link href="policy" className="stext-107 cl0 hov-cl1 trans-04">
               Privacy & Policy
               </Link>
              </li>
              <li className="p-b-10">
               <Link href="faqs" className="stext-107 cl0 hov-cl1 trans-04">
                  FAQs
               </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">GET IN TOUCH</h4>
            <p className="stext-107 cl0 size-201">
              Any questions? Let us know in store at Shop No. 947 Walidpur Market Road, Mau, Mohinuddinpur, Uttar Pradesh 276405 or call us on (+91) 998 4858 991
            </p>
            <div className="p-t-27">
             <Link href="https://www.facebook.com/banarasisilksarees1?mibextid=LQQJ4d" className="fs-18 cl0 hov-cl1 trans-04 m-r-16">
                <i className="fa fa-facebook" />
             </Link>
             <Link href="https://www.instagram.com/anambanarasi/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" className="fs-18 cl0 hov-cl1 trans-04 m-r-16">
                <i className="fa fa-instagram" />
             </Link>
             <Link href="#" className="fs-18 cl0 hov-cl1 trans-04 m-r-16">
                <i className="fa fa-pinterest-p" />
                <i className="fa-brands fa-x-twitter"></i>
             </Link>
             <Link href="https://www.google.com/maps?q=Anam+Banarasi+Silk+House,+Walidpur+Market+Rd,+Mau,+Mohinuddinpur,+Uttar+Pradesh+276405&ftid=0x399190884991bea1:0x92f1e789ce800a14&hl=en-IN&gl=in&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuODYuMS4xNTU2MBgAINeCAyoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJJTg%3D%3D&g_st=iw" className="fs-18 cl0 hov-cl1 trans-04 m-r-16">
                <i className="fa fa-map-marker" />
             </Link>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">Newsletter</h4>
            <p className="stext-107 cl0 size-201">
            Get Exclusive Saree Styles & Offers Delivered to Your Inbox!
          </p>
            <form>
              <div className="wrap-input1 w-full p-b-4">
                <input
                  className="input1 bg-none plh1 stext-107 cl0"
                  type="text"
                  name="email"
                  placeholder="email@example.com"
                />
                <div className="focus-input1 trans-04" />
              </div>
              <div className="p-t-18">
                <button className="flex-c-m stext-101 size-103  btn-m-lm p-lr-15 trans-04">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="p-t-40">
          <div className="flex-c-m flex-w p-b-18">
           <Link href="#" className="m-all-1">
              <img src="images/icons/icon-pay-01.png" alt="ICON-PAY" />
           </Link>
           <Link href="#" className="m-all-1">
              <img src="images/icons/icon-pay-02.png" alt="ICON-PAY" />
           </Link>
           <Link href="#" className="m-all-1">
              <img src="images/icons/icon-pay-03.png" alt="ICON-PAY" />
           </Link>
           <Link href="#" className="m-all-1">
              <img src="images/icons/icon-pay-04.png" alt="ICON-PAY" />
           </Link>
           <Link href="#" className="m-all-1">
              <img src="images/icons/icon-pay-05.png" alt="ICON-PAY" />
           </Link>
          </div>
          <p className="stext-107 cl0 txt-center">
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © 2023 Bunkar Banaras. All rights reserved | Developed by 
            {" "}
           <Link className='text-white hover:text-blue-300' href="https://cybronical.com/" target="_blank">
            Cybronical India
           </Link>{" "}
            
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </footer>
    {/* Back to top */}
  

    <BackToTop/>

    <div className="h-32 fixed bottom-16 right-8  z-10">
  <div className="  pointer">
 <a href={""} className='flex'> <h4 className=' font-medium mtext-102  bg-white py-1 px-2 h-8 shadow-lg mt-3 mr-1 rounded text-[#202020]' >Chat with us</h4>
 <img className='h-14 w-14' src='/whatsapp.png'/></a>
  </div>
</div>


    {/* Modal1 */}
    <div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
      <div className="overlay-modal1 js-hide-modal1" />
      <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
          <button className="how-pos3 hov3 trans-04 js-hide-modal1">
            <img src="images/icons/icon-close.png" alt="CLOSE" />
          </button>
          <div className="row">
            <div className="col-md-6 col-lg-7 p-b-30">
              <div className="p-l-25 p-r-30 p-lr-0-lg">
                <div className="wrap-slick3 flex-sb flex-w">
                  <div className="wrap-slick3-dots" />
                  <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                  <div className="slick3 gallery-lb">
                    <div
                      className="item-slick3"
                      data-thumb="images/product-detail-01.jpg"
                    >
                      <div className="wrap-pic-w pos-relative">
                        <img
                          src="images/product-detail-01.jpg"
                          alt="IMG-PRODUCT"
                        />
                       <Link
                          className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                          href="images/product-detail-01.jpg"
                        >
                          <i className="fa fa-expand" />
                       </Link>
                      </div>
                    </div>
                    <div
                      className="item-slick3"
                      data-thumb="images/product-detail-02.jpg"
                    >
                      <div className="wrap-pic-w pos-relative">
                        <img
                          src="images/product-detail-02.jpg"
                          alt="IMG-PRODUCT"
                        />
                       <Link
                          className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                          href="images/product-detail-02.jpg"
                        >
                          <i className="fa fa-expand" />
                       </Link>
                      </div>
                    </div>
                    <div
                      className="item-slick3"
                      data-thumb="images/product-detail-03.jpg"
                    >
                      <div className="wrap-pic-w pos-relative">
                        <img
                          src="images/product-detail-03.jpg"
                          alt="IMG-PRODUCT"
                        />
                       <Link
                          className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                          href="images/product-detail-03.jpg"
                        >
                          <i className="fa fa-expand" />
                       </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                  Lightweight Jacket
                </h4>
                <span className="mtext-106 cl2">$58.79</span>
                <p className="stext-102 cl3 p-t-23">
                  Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                  ligula. Mauris consequat ornare feugiat.
                </p>
                {/*  */}
                <div className="p-t-33">
                  <div className="flex-w flex-r-m p-b-10">
                    <div className="size-203 flex-c-m respon6">Size</div>
                    <div className="size-204 respon6-next">
                      <div className="rs1-select2 bor8 bg0">
                        <select className="js-select2" name="time">
                          <option>Choose an option</option>
                          <option>Size S</option>
                          <option>Size M</option>
                          <option>Size L</option>
                          <option>Size XL</option>
                        </select>
                        <div className="dropDownSelect2" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-w flex-r-m p-b-10">
                    <div className="size-203 flex-c-m respon6">Color</div>
                    <div className="size-204 respon6-next">
                      <div className="rs1-select2 bor8 bg0">
                        <select className="js-select2" name="time">
                          <option>Choose an option</option>
                          <option>Red</option>
                          <option>Blue</option>
                          <option>White</option>
                          <option>Grey</option>
                        </select>
                        <div className="dropDownSelect2" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-w flex-r-m p-b-10">
                    <div className="size-204 flex-w flex-m respon6-next">
                      <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                        <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                          <i className="fs-16 zmdi zmdi-minus" />
                        </div>
                        <input
                          className="mtext-104 cl3 txt-center num-product"
                          type="number"
                          name="num-product"
                          defaultValue={1}
                        />
                        <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                          <i className="fs-16 zmdi zmdi-plus" />
                        </div>
                      </div>
                      <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                  <div className="flex-m bor9 p-r-10 m-r-11">
                   <Link
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                      data-tooltip="Add to Wishlist"
                    >
                      <i className="zmdi zmdi-favorite" />
                   </Link>
                  </div>
                 <Link
                    href="#"
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Facebook"
                  >
                    <i className="fa fa-facebook" />
                 </Link>
                 <Link
                    href="#"
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Twitter"
                  >
                    <i className="fa fa-twitter" />
                 </Link>
                 <Link
                    href="#"
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Google Plus"
                  >
                    <i className="fa fa-google-plus" />
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  </>
  
  )
}

export default Footer